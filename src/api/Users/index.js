import { Router } from 'express'

import {
  create,
  login
  
} from './controller'

const router = new Router()

router.post('/signup', create)

router.post('/login', login)

export default router
