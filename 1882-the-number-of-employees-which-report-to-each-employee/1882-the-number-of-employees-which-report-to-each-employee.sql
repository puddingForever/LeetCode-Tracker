/* Write your PL/SQL query statement below */
SELECT 
      b.employee_id
    , b.name
    , count(a.employee_id) as reports_count 
    , round(avg(a.age)) as average_age 
From Employees a
inner join Employees b 
on a.reports_to = b.employee_id 
group by b.employee_id, b.name
Order by b.employee_id 
