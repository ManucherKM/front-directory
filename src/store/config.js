const departments = [
	{
		name: 'Отдел кадров',
	},
	{
		name: 'Отдел производства',
	},
	{
		name: 'Отдел по работе с партнёрами',
	},
	{
		name: 'Отдел технического контроля',
	},
]

const templateRoles = {
	director: 'Директор',
	deputyDirector: 'Заместитель директора',
	mathTeacher: 'Преподаватель по математике',
	webDevelopmentInstructor: 'Преподаватель по веб-разработке',
}

const roles = [
	{
		name: templateRoles.director,
	},
	{
		name: templateRoles.deputyDirector,
	},
	{
		name: templateRoles.mathTeacher,
	},
	{
		name: templateRoles.webDevelopmentInstructor,
	},
]

export { departments, templateRoles, roles }
