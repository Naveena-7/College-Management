import { Router } from 'express'

import {
  create,
  index,
  show,
  update,
  destroy,
  searchFacultySubjects
} from './controller'

const router = new Router()


router.post('/', create)

router.put('/:id', update)


router.get('/search', searchFacultySubjects)


router.get('/', index)

router.get('/:id', show)


router.delete('/:id', destroy)


export default router
