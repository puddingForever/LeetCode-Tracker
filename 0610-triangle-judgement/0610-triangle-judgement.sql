/* Write your PL/SQL query statement below */
select x 
, y 
, z 
, case when x + y > z 
           and  x + z > y 
           and  z+y > x then 'Yes'
          ELSE 'No'
  END AS triangle
from Triangle 