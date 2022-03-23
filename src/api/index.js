import { Router } from 'express'

import students from './students'
import departments from './departments'
import faculty from './faculty'
import FacultySubjects from './FacultySubjects'
import AcadamicYears from './AcadamicYears'
import marks from './marks'
import Employees from  './Employees'


const router = new Router()

router.use('/students', students)
router.use('/departments', departments)
router.use('/faculty',faculty)
router.use('/FacultySubjects',FacultySubjects)
router.use('/AcadamicYears',AcadamicYears)
router.use('/marks',marks)
router.use('/Employees',Employees)

export default router
