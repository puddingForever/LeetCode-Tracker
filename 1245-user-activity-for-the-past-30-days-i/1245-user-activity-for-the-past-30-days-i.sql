/* Write your PL/SQL query statement below */
SELECT to_char(activity_date,'YYYY-MM-DD') as day 
     , count(distinct user_id) as active_users
FROM Activity 
GROUP BY activity_date
HAVING activity_date BETWEEN to_date('2019-07-27','YYYY-MM-DD')-29 AND to_date('2019-07-27','YYYY-MM-DD')