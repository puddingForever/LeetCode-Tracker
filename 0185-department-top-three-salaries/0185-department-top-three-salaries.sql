
select b.name Department 
       ,  e.name Employee 
       , e.salary Salary 
from ( select  a.* 
          , dense_rank() over(partition by a.departmentId order by a.salary desc) as rn 
    from Employee a )  e 
inner join Department b
on e.departmentId = b.id 
where rn < 4 