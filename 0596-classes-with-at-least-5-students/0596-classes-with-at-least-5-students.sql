/* Write your PL/SQL query statement below */
select distinct class
from courses 
group by class 
having count(student)  >= 5