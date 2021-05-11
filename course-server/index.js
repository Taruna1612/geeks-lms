const URL = "https://apikey-v2-31rq8eya20ziu6vfftxaboal92cgpvbl2vq0j08l8dh:f86c63bfb03f4a04b44d3b2ecedcf49a@67dd6035-bf98-418c-be35-ac85d3e8e0ce-bluemix.cloudantnosqldb.appdomain.cloud";
const apiKey = "boV71oLvwmeABwkO009UAd2aiBVUuIJqSzr8K9pi2-tw";
const express = require('express');
var cors = require('cors');
const app = express();

//Creating database arrays
let allCourses = [];
let profile = [];
let userCourses = [];

//Using Cloudant 
const Cloudant = require('@cloudant/cloudant');
const cloudant = Cloudant({ url: URL, apikey: apiKey });

//Fetching user profile data
const db1 = cloudant.db.use('users');
const fetchprofile = async () => {
    const data = await db1.list({ include_docs: true });
    for (let i in data.rows) {
        profile.push(data.rows[i].doc);
    }
    console.log(profile);
    return profile;
}

//Fetching user Courses
const db2 = cloudant.db.use('user-courses');
const fetchUserCourses = async () => {
    const data = await db2.get("_design/user-courses-view/_view/new-view");
    for (let i in data.rows) {
        userCourses.push(data.rows[i].value);
    }
    console.log(userCourses);
    return userCourses;
}

//Fetching courses database data
const db = cloudant.db.use('courses');
const fetchCourses = async () => {
    const data = await db.list({ include_docs: true });
    for (let i in data.rows) {
        allCourses.push(data.rows[i].doc);
    }
    return allCourses;
}



//cross-origin middleware
app.use(cors({
    origin: [
        "http://localhost:4200"
    ], credentials: true
}));

//custom middleware that prints request 
const printRequest = function (req, res, next) {
    console.log("request received");
    console.log("sending response");
    next();
}
app.use(printRequest);


//profile data
fetchprofile().then((data) => {
    app.get("/profile", (req, res) => {
        console.log(data);
        res.json(data);
    })
}).catch((err) => { console.log(err) });



//all courses data
fetchCourses().then((data) => {
    app.get("/allCourses", (req, res) => {
        console.log(data);
        res.json(data);
    })
}).catch((err) => { console.log(err) });

//user courses data
fetchUserCourses().then(data => {
    app.get("/userCourses", (req, res) => {
        console.log(data);
        res.json(data);
    })
}).catch((err) => { console.log(err); });

app.listen(8000, () => {
    console.log("listening port at 8000");
});
