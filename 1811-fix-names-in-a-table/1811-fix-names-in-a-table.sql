/* Write your PL/SQL query statement below */
SELECT user_id 
    , UPPER(SUBSTR(name,1,1)) || LOWER(SUBSTR(name,2))  as name
FROM users 
order by user_id 
