with day_total as (
    select to_char(visited_on, 'yyyy-mm-dd') as visited_on
         , sum(amount) as amount 
      from Customer
      group by visited_on 
),
calculated as (
    select visited_on 
         , sum(amount) over (order by visited_on rows between 6 preceding and current row) as amount
         , round(avg(amount) over (order by visited_on rows between 6 preceding and current row),2) as average_amount
     from day_total 
     order by visited_on 
)
select * from calculated 
where visited_on >= (
    select min(visited_on) from customer     
) + 6
order by visited_on 