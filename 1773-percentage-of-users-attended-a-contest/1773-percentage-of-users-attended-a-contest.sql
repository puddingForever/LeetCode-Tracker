/* Write your PL/SQL query statement below */
select contest_id 
    , ROUND((
     (count(user_id) / ( select count(*) from Users ))      * 100

    ),2) as percentage 
from Register  
group by contest_id 
order by percentage desc, contest_id 
