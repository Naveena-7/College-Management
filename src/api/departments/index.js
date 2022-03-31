import { Router } from 'express'
import { checkAuth } from '../helpers'

import {
  create,
  index,
  show,
  update,
  destroy,
  searchDepartment
} from './controller'

const router = new Router()


router.post('/', checkAuth(true['ADMIN']), create)

router.put('/:id', checkAuth(true['ADMIN']),update)

router.get('/search',  checkAuth(true),searchDepartment)

router.get('/',  checkAuth(true),index)

router.get('/:id',  checkAuth(true),show)

router.delete('/:id',  checkAuth(true['ADMIN']),destroy)

export default router
