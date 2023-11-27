import express from "express";
import {authAndUserValidator} from "../validators/auth-validators.js";
import {authenticateUser} from "../controllers/auth-controller.js";
import {insertUser} from "../controllers/users-controller.js";

const router = express.Router();

router.post('/auth', authAndUserValidator, authenticateUser);
router.post('/user', authAndUserValidator, insertUser);

export default router;