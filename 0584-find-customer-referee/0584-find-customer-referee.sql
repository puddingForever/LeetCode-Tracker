# Write your MySQL query statement below

SELECT name
FROM Customer 
where coalesce(referee_id, 0) <> 2 ;