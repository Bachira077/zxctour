import express from 'express';
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/userController.js';
const router = express.Router();

import {verifyAdmin, verifyUser} from "../utils/verifyToken.js";

//update
router.put("/:id",verifyUser, updateUser);
//delete
router.delete("/:id",verifyUser, deleteUser);
//getSingle
router.get("/:id",verifyUser, getSingleUser);
//get all 
router.get("/",verifyAdmin, getAllUser);

export default router;