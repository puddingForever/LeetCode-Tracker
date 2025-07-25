/* Write your PL/SQL query statement below */

Select a.product_name
     , sum(b.unit) as unit 
from products a 
inner join orders b 
on a.product_id = b.product_id 
where to_char(b.order_date,'YYYY-MM') = '2020-02'
group by a.product_name
having sum(b.unit) >= 100