SELECT s.product_id 
       , s.year as first_year 
       , s.quantity
       , s.price
FROM Sales s
JOIN ( SELECT product_id 
                , MIN(year) as first
         FROM Sales 
         GROUP BY product_id 
       ) first_year_product 
ON s.product_id = first_year_product.product_id 
AND  s.year = first_year_product.first


