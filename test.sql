SELECT
	FirstName AS 'Имя',
	LastName AS 'Фамилия'
FROM students LEFT JOIN Exams ON students.id = Exams.StudentsId
	WHERE Result < 3
	Group by FirstName
	HAVING count(*) >= 2;