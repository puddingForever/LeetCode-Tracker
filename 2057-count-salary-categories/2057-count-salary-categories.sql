With categories as (
    select 'Low Salary' as category from dual 
    union all 
    select 'Average Salary' from dual
    union all 
    select 'High Salary' from dual 
),
filter_categories as (
    select
          case 
              when income < 20000 then 'Low Salary'
              when income between 20000 and 50000 then 'Average Salary'
              when income > 50000 then 'High Salary'
           end as category
    from Accounts
)
select a.category 
     , nvl(count(b.category),0) as accounts_count 
from categories a
left join filter_categories b
on a.category = b.category
group by a.category 