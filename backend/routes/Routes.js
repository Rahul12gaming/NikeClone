import express from 'express'
import { getAllProduct } from '../controller/allProduct.js';
import { getAll } from '../controller/clothController.js';
import { Post } from '../controller/crudController.js';
import { getKidsProduct } from '../controller/kidsController.js';
import { getMensProduct } from '../controller/mensController.js';
// import { paymentController } from '../controller/paymentController.js';
import { login, singup } from "../controller/userController.js";
import { getWomensProduct } from '../controller/womensController.js';
import allProduct from '../model/allProductModel.js';
import Kids from '../model/kidsModel.js';
import men from '../model/menModel.js';
import women from '../model/womenModel.js';

const router=express.Router();
router.post('/singup',singup)
router.post('/login',login)
router.get('/cloth',getAll)
router.get('/allproduct',getAllProduct)
router.get('/men',getMensProduct)
router.get('/kid',getKidsProduct)
router.get('/women',getWomensProduct)
router.post('/allproduct',Post(allProduct))
router.post('/men',Post(men))
router.post('/women',Post(women))
router.post('/kids',Post(Kids)) 

export default router;