import express from 'express';
import { createTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, getTourCount, updateTour } from '../controllers/tourController.js';
import { verifyAdmin } from '../utils/verifyToken.js';





const router = express.Router();



//create
router.post("/",verifyAdmin, createTour);
//update
router.put("/:id",verifyAdmin, updateTour);
//delete
router.delete("/:id",verifyAdmin, deleteTour);
//getSingle
router.get("/:id", getSingleTour);
//get all tour
router.get("/", getAllTour);
//get tour by search
router.get("/search/getTourBySearch",getTourBySearch);
router.get("/search/getFeaturedTours",getFeaturedTour);
router.get("/search/getTourCount",getTourCount);



export default router;