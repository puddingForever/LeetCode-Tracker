with pr_list as (
    select distinct product_id 
       from products 
)
, agg_list as (
    select product_id 
         , price 
      from (
          select product_id   
             , NVL(new_price,10) price 
             , row_number() over (  partition by product_id 
                                        order by change_date desc 
                                    ) as rn 
        from products 
        where change_date <= to_date('2019-08-16','YYYY-MM-DD') 
       )  
    where rn = 1 
)
select a.product_id 
     , NVL(b.price,10) as price 
from pr_list a 
left join agg_list b 
on a.product_id = b.product_id 