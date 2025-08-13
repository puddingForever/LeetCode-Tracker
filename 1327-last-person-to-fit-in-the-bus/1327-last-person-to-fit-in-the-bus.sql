
select person_name 
  from (
    select turn
         , person_name 
         , sum(weight) over (order by turn) as total_weight 
      from Queue
     order by turn desc 
  ) 
  where total_weight <= 1000
    and  rownum = 1
  
 
