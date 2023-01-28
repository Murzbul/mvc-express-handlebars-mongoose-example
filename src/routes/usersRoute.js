import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

const htmlOnWirePrefix = '/html-onwire';
router.get(htmlOnWirePrefix, userController.getHtmlUsers);
router.post(htmlOnWirePrefix, userController.addHtmlUser);

const dataOnWirePrefix = '/data-onwire';
router.get(dataOnWirePrefix, userController.getDataUsersView);
router.get(`${dataOnWirePrefix}/json`, userController.getDataUsersJson);
router.post(dataOnWirePrefix, userController.addDataUser);

export default router;
