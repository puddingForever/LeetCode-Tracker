/* Write your PL/SQL query statement below */
SELECT a.machine_id 
    , round( avg(b.timestamp - a.timestamp) ,3) as processing_time 
FROM Activity a
INNER JOIN Activity b 
ON a.machine_id = b.machine_id AND a.process_id = b.process_id
AND a.activity_type = 'start' and b.activity_type = 'end'
group by a.machine_id  