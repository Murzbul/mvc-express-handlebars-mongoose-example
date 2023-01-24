import express from 'express';
import mealsController from '../controllers/mealController';

const router = express().Router();

router.get('/menu', mealsController.getMenu);

export default router;
