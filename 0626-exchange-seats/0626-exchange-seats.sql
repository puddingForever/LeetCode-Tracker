/* Write your PL/SQL query statement below */
SELECT 
    CASE 
        WHEN MOD(id,2) = 1 AND id + 1 IN (SELECT id FROM Seat) THEN id + 1
        WHEN MOD(id,2) = 0 THEN id - 1
        ELSE id
    END AS id
  , student 
FROM Seat
Order by id;