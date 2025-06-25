import express from 'express';
const router = express.Router();
import { createUser, getUsers, getUser, updateUser, deleteUser } from '../controllers/userController.mjs';

router.post('/create', createUser);      
router.get('/', getUsers);          
router.get('/:id', getUser);        
router.put('/:id', updateUser);     
router.delete('/:id', deleteUser);  

export default router;
