import { Router } from 'express'
import { checkAuth } from '../helpers'

import {
  create,
  index,
  show,
  update,
  destroy,
  searchEmployees,
  search,
  showMyProfile,
  updateprofile
} from './controller'

const router = new Router()

router.post('/', checkAuth(true,['ADMIN']), create)

router.put('/self-update', checkAuth(true),updateprofile)

router.put('/:id', checkAuth(true,['ADMIN']),update)

router.get('/search', checkAuth(true),searchEmployees)

router.get('/search', checkAuth(true),search)

router.get('/', checkAuth(true),index)

router.get('/me' ,checkAuth(true) , showMyProfile)

router.get('/:id',checkAuth(true), show)

router.delete('/:id', checkAuth(true,['ADMIN']),destroy)


export default router
