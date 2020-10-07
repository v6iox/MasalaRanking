/*INSERT GROUP ID AND COOKIE BELOW*/

var groupId = 12345 // << Replace 12345 with your Group Id
var cookie = process.env.cookie // << Put your account cookie inside of the quotes

/*INSERT GROUP ID AND COOKIE ABOVE*/


const express = require("express");
const rbx = require("noblox.js");
const app = express();

app.use(express.static("public"));

async function startApp() {
  await rbx.cookieLogin(cookie);
  let currentUser = await rbx.getCurrentUser();
  console.log(currentUser.UserName);
}
startApp();

app.get("/ranker", (req, res) => {
    var User = req.params("userid");
    var Rank = req.params("rank");
  
    rbx.setRank(groupId, parseInt(User), parseInt(Rank));
    res.json("Ranked!");
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});