

import { Router} from "express";

import { 
    create,
    get,
    search,
    update,
    destroy
    
 } from './controller'


const router =new Router()

router.post('/',create)

router.get('/',get);

router.get('/search',search);

router.put('/:id',update)

router.delete('/:id', destroy)

export default router