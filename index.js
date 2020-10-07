const rbx = require('noblox.js')
const express = require('express')

async function startApp () {
    await rbx.setCookie('_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_81B612434CE9333B64393A119A35FAC9B15DE197B60776103814B901F620B85660343D067D7667089B47A028FA56F1259B719FAA730D69954A628808D86A98CDB393B070FD5F19235FBC651291228ACCFB99D5A9A0A5F7653FA280EA9699A95B117BF18A060AB5F3EAF1A51DE4DA94FA609D36B5672DEFD918AB54B3782DA95F38E286E6C1927BF61192D475BDBEC33B0093484B0CE88BEEE17F737B5F98DFA268961C69579D77C4BE260B73BA2F1C9E28BA866E9B1690D9F9B49DE648399B8DFBC1F280D1BFD4A32C603273D9792C29F8ADF1935E526A238EAE9994B2776EFD00DF6A3F4877334083B4A4E0E14E10AE4A4BF82BF9CF6FDDBAFAB427BCED40B6542BD6CF21627D68563198767528BE5B7470E926A34DE3192E2B6C8456AB8D24F8CA1D7B')
    let currentUser = await rbx.getCurrentUser()
    console.log(currentUser.UserName)
}

startApp()

const bot = express();

bot.get("/ranker", (req, res) => {
    var Username = req.param("userid");
    var Rank = req.param("rank");

    rbx.setRank(5298883, parseInt(Username), parseInt(Rank));
    res.json('Successfully Ranked!');
});

const Listener = bot.listen(process.env.PORT, () => {
    console.log("MasalaRoblox is current listening on port " + Listener.address().port);
});