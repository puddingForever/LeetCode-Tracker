SELECT a.product_id 
     , ROUND(
              NVL(
                    SUM(a.price*b.units) / NVL(SUM(b.units),0)
                ,0)
             ,2) as average_price
FROM Prices a 
LEFT JOIN UnitsSold b 
ON a.product_id = b.product_id 
AND b.purchase_date BETWEEN a.start_date AND a.end_date
GROUP BY a.product_id


