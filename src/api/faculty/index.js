import { Router } from 'express'

import {
  create,
  index,
  show,
  update,
  destroy,
  searchfaculty,
  search
} from './controller'

const router = new Router()

//POST Request http://localhost:8080/faculty
router.post('/', create)

//PUT Request http://localhost:8080/faculty/123
router.put('/:id', update)

//GET Request http://localhost:8080/faculty/search
router.get('/search', searchfaculty)



//GET Request http://localhost:8080/faculty/search
router.get('/search', search)


//GET Request http://localhost:8080/faculty
router.get('/', index)

//GET Request http://localhost:8080/faculty/123
router.get('/:id', show)

//DELETE Request http://localhost:8080/faculty/123
router.delete('/:id', destroy)


export default router
