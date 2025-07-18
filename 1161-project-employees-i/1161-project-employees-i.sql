/* Write your PL/SQL query statement below */
SELECT P.PROJECT_ID
     , ROUND(
            (
            SUM(E.EXPERIENCE_YEARS) / COUNT(E.EMPLOYEE_ID)
            )
            , 2
        ) 
       AS AVERAGE_YEARS 
FROM PROJECT P
INNER JOIN EMPLOYEE E 
ON P.EMPLOYEE_ID = E.EMPLOYEE_ID
GROUP BY P.PROJECT_ID 
