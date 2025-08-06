select (
        select  distinct salary as SecondHighestSalary 
        from (
            select id
                , salary
                , DENSE_RANK() OVER (ORDER BY salary desc) as rn 
                from employee 
                )
        where rn = 2
        ) as SecondHighestSalary 
from dual