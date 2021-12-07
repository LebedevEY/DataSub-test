SELECT
	GroupNum AS 'Группа'
FROM students LEFT JOIN Exams ON students.id = Exams.StudentsId
	WHERE Result < 3
	Group by GroupNum
	HAVING count(*) >= 10;