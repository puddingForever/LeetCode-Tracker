/* Write your PL/SQL query statement below */
SELECT *
FROM (
    -- users with most movie rates 
  SELECT name as results
  FROM (
        SELECT U.name 
            , COUNT(*) as cnt 
        FROM MovieRating R 
        INNER JOIN Users U
        ON R.user_id = U.user_id 
        GROUP BY U.name
        ORDER BY cnt desc , U.name
     )
    WHERE ROWNUM = 1
    UNION ALL
    -- highest average rate 
    SELECT title as results
     FROM (
         SELECT M.TITLE 
                , AVG(R.RATING) as avg_rating
        FROM Movies M
        INNER JOIN MovieRating R
        ON M.movie_id = R.movie_id
        WHERE TO_CHAR(R.created_at,'YYYYMM')  = '202002'  
        GROUP BY M.TITLE 
        ORDER BY avg_rating DESC, M.TITLE
      )
    WHERE ROWNUM = 1
)




