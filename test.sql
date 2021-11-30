SELECT
	FirstName AS 'Имя',
	LastName AS 'Фамилия',
	ExamName AS 'Экзамен',
	Result AS 'Оценка'
FROM students LEFT JOIN Exams ON students.id = Exams.StudentsId
	WHERE Result < 3;