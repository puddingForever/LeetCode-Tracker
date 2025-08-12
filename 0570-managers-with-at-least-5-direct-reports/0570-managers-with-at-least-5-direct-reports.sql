select a.name 
  from Employee a 
  inner join Employee b -- manajorid 가 없는 row는 select 되지 않는다 
  on a.id = b.managerid 
  group by a.id, a.name 
  having count(*) >= 5