import express from 'express'
const router = express.Router()
import {createuser, getusers, updateUsers, getauser,deleteUser} from '../controllers/routes.js'

router.get('/',getusers).post('/',createuser)

router.get('/:id',getauser).delete('/:id',deleteUser).patch('/:id',updateUsers)

export default router
 