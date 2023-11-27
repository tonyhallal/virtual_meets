import {query} from "../database/db.js";

export const addUser = async (username, password) => {
    try {
        const sql = `INSERT INTO users (user_username, user_password)
                            values(?,?)`
        return {
            dbModification: await query(sql,[username,password]),
        message: 'user inserted successfully'
        }
    } catch (err) {
        throw new Error(err.message)
    }
}