// const axios = require("axios");
var fs = require("fs");
const date = require('date-and-time');

var moment = require('moment-timezone');

function convertTimeZone(userData) {

    let { time, inputTimeZone, outputTimeZone } = userData //use default time zone (local computer)
    //Split time into hour and min
    let genTime = time.split(":");

    let hour = genTime[0];
    let min = genTime[1];

    if ((Number(hour) < 1 || Number(hour) > 25) || (Number(min) < 0 || Number(min) > 60)) {
        let statusMsg = {
            msg: "Please Select Valid Time!!"
        }
        return statusMsg;
    } else if (hour == undefined || min == undefined) {
        let statusMsg = {
            msg: "Please Select Valid Time!!"
        }
        return statusMsg;
    } else {
        try {

            let sourceTime = moment.tz(`2014-06-01 ${hour}:${min}`, `${inputTimeZone}`);
            let destinationTime = sourceTime.clone().tz(`${outputTimeZone}`);

            console.log("Source Time: ", sourceTime.format("HH:MM"));
            console.log("Destination Time: ", destinationTime.format("HH:MM"));

            let statusMsg = {
                "sourceTimeZone": `${inputTimeZone}`,
                "destinationTimeZone": `${outputTimeZone}`,
                "sourceTime": `${sourceTime.format("HH:MM")}`,
                "destinationTime": `${destinationTime.format("HH:MM")}`,
                msg: "null"
            }

            return statusMsg;
        } catch (e) {
            console.log(e)
            let statusMsg = {
                msg: "Something went wrong!!"
            }

            return statusMsg;
        }
    }
}

module.exports = { convertTimeZone };