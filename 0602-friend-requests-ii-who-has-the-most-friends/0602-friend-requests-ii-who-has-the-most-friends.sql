WITH TOTAL_LIST AS (
    SELECT requester_id as me 
         , accepter_id as ff
      FROM RequestAccepted -- 내가 요청보냄 
      UNION ALL 
    SELECT accepter_id as me 
         , requester_id as ff 
     FROM RequestAccepted  -- 내가 요청받음 
),
CAL_FRIEND AS (
    SELECT me 
         , COUNT(DISTINCT ff) OVER (PARTITION BY me) cnt -- 내 친구 수
      FROM TOTAL_LIST
)
SELECT DISTINCT me as id
     , cnt as num
 FROM CAL_FRIEND
 WHERE cnt = ( SELECT MAX(cnt) 
                    FROM CAL_FRIEND );