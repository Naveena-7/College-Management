import { Router } from 'express'

import students from './students'
import departments from './departments'
import faculty from './faculty'


const router = new Router()

router.use('/students', students)
router.use('/departments', departments)
router.use('/faculty',faculty)

export default router
