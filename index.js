/*INSERT GROUP ID AND COOKIE BELOW*/

var groupId = 5298883 // << Replace 12345 with your Group Id
var cookie = process.env.cookie // << Put your account cookie inside of the quotes

/*INSERT GROUP ID AND COOKIE ABOVE*/


const express = require("express");
const rbx = require("noblox.js");
const app = express();

app.use(express.static("public"));

console.log('hey')