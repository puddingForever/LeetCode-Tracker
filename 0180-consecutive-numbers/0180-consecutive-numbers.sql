select distinct num as ConsecutiveNums 
from (
    select id 
        , num 
        , LAG(num,1,0) over (order by id) as prev1
        , LAG(num,2,0) over (order by id) as prev2 
    from LOGS 
)
where num = prev1 and num = prev2;

