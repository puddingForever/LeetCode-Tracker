/* Write your PL/SQL query statement below */
SELECT a.name 
     , b.bonus 
FROM Employee a 
LEFT JOIN Bonus b 
ON a.empId = b.empId
WHERE b.bonus < 1000 OR b.bonus IS NULL