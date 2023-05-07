const templateDepartments = {
	management: 'Руководство',
	humanResourcesDepartment: 'Отдел кадров',
	legalDepartment: 'Юридический отдел',
	economicDepartment: 'Экономический отдел',
	economicDepartment: 'Учебная часть',
	economicDepartment: 'Педагогический и учебно-производственный персонал',
	economicDepartment: 'Центр воспитательной работы',
	economicDepartment: 'Методическая служба',
	economicDepartment: 'Библиотека',
	economicDepartment: 'Столовая',
	economicDepartment: 'Хозяйственная служба',
	economicDepartment: 'Медицинский пункт',
	economicDepartment: 'Центр информационных технологий',
	economicDepartment: 'Служба охраны труда',
}

const departments = [
	{
		name: templateDepartments.management,
	},
	{
		name: templateDepartments.humanResourcesDepartment,
	},
	{
		name: templateDepartments.legalDepartment,
	},
	{
		name: templateDepartments.economicDepartment,
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

export { departments, templateRoles, roles, templateDepartments }
