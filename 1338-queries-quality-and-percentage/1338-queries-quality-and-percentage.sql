/* Write your PL/SQL query statement below */
SELECT query_name
     , ROUND(
        avg(rating / position)
        ,2) quality
     , ROUND(
      	avg(case when rating < 3 then 1 else 0 end) * 100 
        ,2) poor_query_percentage
FROM Queries 
group by query_name 

