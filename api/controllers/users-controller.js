import {addUser} from "../services/users-service.js";
import {validationResult} from "express-validator";

export const insertUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({errors: errors.array()})
        return;
    }
    try {
        const {user_username, user_password} = req.body;
        res.status(201).send(await addUser(user_username, user_password));
    } catch (err) {
        res.status(500).send(err.message);
    }
}