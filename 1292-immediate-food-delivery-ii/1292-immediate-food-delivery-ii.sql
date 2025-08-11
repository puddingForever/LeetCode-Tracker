select ROUND((count(case when first_day = customer_pref_delivery_date then 1 end)/(count(customer_id))) * 100,2) as immediate_percentage 
from (
        select customer_id
             , min(order_date) as first_day 
             , min(customer_pref_delivery_date) as customer_pref_delivery_date
          from Delivery
        group by customer_id
)
