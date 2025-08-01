/* Write your PL/SQL query statement below */
   SELECT customer_id 
     FROM (
  SELECT  CUSTOMER_ID 
       FROM Customer
GROUP BY CUSTOMER_ID
  HAVING COUNT(distinct product_key) = ( SELECT COUNT(*) 
                                             FROM Product )
	)