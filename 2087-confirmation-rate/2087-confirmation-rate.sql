with rate as (
    select a.user_id 
         , sum(case when a.action = 'confirmed' then 1 else 0 end) / count(a.action) as confirmation_rate 
      from Confirmations a 
     group by a.user_id 
)
select b.user_id 
     , round(nvl(r.confirmation_rate,0),2) as confirmation_rate
  from Signups b
  left join rate r 
    on b.user_id = r.user_id    