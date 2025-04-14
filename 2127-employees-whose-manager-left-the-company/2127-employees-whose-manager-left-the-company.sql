/* Write your PL/SQL query statement below */
SELECT a.employee_id 
FROM Employees a
WHERE a.salary < 30000 
AND a.manager_id IS NOT NULL 
AND a.manager_id NOT IN (SELECT employee_id 
                            from Employees 
                           WHERE employee_id = a.manager_id )
ORDER BY a.employee_id 