// Roblox Ranking Bot

var Token = process.env.Token;
const GroupID = '';
const Rblx = require('noblox.js');
const Express = require('express');
const App = Express();

async function startapp(){
    await Rblx.setCookie(Token);

    let CurrentUser = await Rblx.getCurrentUser();
    let Username = CurrentUser.UserName

    console.log(Username + ' logged in.')
}

startapp()

App.get("/ranker", (req, res) => {
    var User = req.params("userid");
    var Rank = req.params("rank");

    Rblx.setRank(GroupID)
    res.json("Successfully ranked.");
});

const listener = App.listen(process.env.PORT, () => {
    console.log("Your app is listening on port " + listener.address().port)
});
