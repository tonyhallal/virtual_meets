import {query} from "../database/db.js";

export const isUserAuthenticated = async (username, password) => {
    try {
        const sql = `SELECT * FROM users 
                            WHERE user_username = ? AND user_password = ?`;

        const response = await query(sql, [username, password]);
        if (response.length > 0) {
            const {user_username, user_password} = response[0];
            return username === user_username && password === user_password;
        }
        return false;
    } catch (err) {
        throw new Error(err)
    }
}