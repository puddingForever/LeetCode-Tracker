/* Write your PL/SQL query statement below */
SELECT students.student_id  
     , students.student_name
     , subjects.subject_name
     , COUNT(exams.student_id) as attended_exams
FROM Students students
CROSS JOIN Subjects subjects -- do not need join  
LEFT JOIN Examinations exams
ON students.student_id = exams.student_id
AND subjects.subject_name = exams.subject_name
GROUP BY  students.student_id  
     , students.student_name
     , subjects.subject_name
ORDER BY students.student_id  , subjects.subject_name



-- student_id
-- student_name
-- subject_name
-- count of attendents 
