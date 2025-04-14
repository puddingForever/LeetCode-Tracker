/* Write your PL/SQL query statement below */
SELECT today.id 
FROM Weather yesterday
cross join Weather today 
WHERE today.recordDate - yesterday.recordDate = 1 AND yesterday.temperature < today.temperature 