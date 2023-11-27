import {http} from "./http-common.js";
import dayjs from "dayjs";

export const postData = async (endpoint, body) => {
    const res = await http.post(endpoint, body);
    return res.data;
}

export const getMonth = (month = dayjs().month()) => {
    month = Math.floor(month); //used because when resetting the date a random number < 1 is added
    const year = dayjs().year();
    const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();

    let currentMonthCount = 0 - firstDayOfTheMonth;
    //return a 2D array containing the days of the month
    return new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonthCount++;
            return dayjs(new Date(year, month, currentMonthCount));
        })
    });
}