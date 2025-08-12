with cte1 as(
    select id
         , num 
         , row_number() over (order by id) as rn_all -- 원래 순서 
         , row_number() over (partition by num order by id ) as rn_grp -- num 그룹내의 순서 
    from Logs 
),
cte2 as (
    select num 
        , rn_all- rn_grp as diff 
      from cte1
),
cte3 as (
    select num 
         , diff
         , count(*) as cnt 
      from cte2 
      group by num, diff 
      having count(*) >= 3  
)
select distinct num as ConsecutiveNums 
  from cte3; 