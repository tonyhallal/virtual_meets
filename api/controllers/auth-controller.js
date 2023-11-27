import {isUserAuthenticated} from "../services/auth-service.js";
import {validationResult} from "express-validator";

export const authenticateUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({errors: errors.array()})
        return;
    }

    const {user_username, user_password} = req.body;
    try {
        const authResult = await isUserAuthenticated(user_username, user_password);
        if (authResult) {
            res.sendStatus(200);
            return;
        }

        res.sendStatus(401);
    } catch (err) {
        res.status(500).send(err.message);
    }
}