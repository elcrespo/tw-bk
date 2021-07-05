import express from "express";
import { param } from 'express-validator/check';
import { validateRequest } from '../common'
import { getUserDetailsController } from "./user-details.controller";

const validators = [
    param('username').trim().notEmpty().escape().withMessage("You must supply an username value")
]
const router = express.Router();

router.get("/api/users/:username", validators, validateRequest, getUserDetailsController);
console.log("user-details-routes");
export { router as userDetailsRouter };
