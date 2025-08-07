with cte as (
              select player_id 
                   , min(event_date) as first_login 
              from Activity
            group by player_id 
            ),
cte2 as (
            select a.player_id 
             from Activity a
                , cte b
            where a.player_id = b.player_id 
              and a.event_date = b.first_login + 1
         )
 select round(count(cte2.player_id)/ count(cte.player_id) , 2) as fraction
 from cte, cte2
 where cte.player_id = cte2.player_id(+)