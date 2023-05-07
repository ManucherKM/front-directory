const templateDepartments = {
	management: 'Руководство',
	humanResourcesDepartment: 'Отдел кадров',
	legalDepartment: 'Юридический отдел',
	economicDepartment: 'Экономический отдел',

	educationalPart: 'Учебная часть',
	teachingAndTrainingAndProductionPersonnel:
		'Педагогический и учебно-производственный персонал',
	centerForEducationalWork: 'Центр воспитательной работы',
	methodicalService: 'Методическая служба',
	library: 'Библиотека',
	diningRoom: 'Столовая',
	housekeepingService: 'Хозяйственная служба',
	medicalCenter: 'Медицинский пункт',
	informationTechnologyCenter: 'Центр информационных технологий',
	laborProtectionService: 'Служба охраны труда',
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

	{
		name: templateDepartments.educationalPart,
	},
	{
		name: templateDepartments.teachingAndTrainingAndProductionPersonnel,
	},
	{
		name: templateDepartments.centerForEducationalWork,
	},
	{
		name: templateDepartments.methodicalService,
	},
	{
		name: templateDepartments.library,
	},
	{
		name: templateDepartments.diningRoom,
	},
	{
		name: templateDepartments.housekeepingService,
	},
	{
		name: templateDepartments.medicalCenter,
	},
	{
		name: templateDepartments.informationTechnologyCenter,
	},
	{
		name: templateDepartments.laborProtectionService,
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
