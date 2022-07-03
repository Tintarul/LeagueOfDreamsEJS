# LeagueOfDreamsEJS
# For more informations please visit <a href="https://discord.gg/NUDmnGR2ka">our discord server</a>

Server for league of dreams based on ejs and socket.io<br>
This version is outdated and work only with LoD client version 0.0.4<br>
<br>
Requirements:<br>
 -MongoDB server<br>
 -Nodejs<br>
 -Range ports open (3000 - 7000)<br>
 -LeagueSandbox GameServer<br>
<br>
How to start<br>
1. Change recaptcha public and private key from `/config/passport.js` and `/views/accounts/login.ejs` and `signup.ejs`<br>
2. Generate new secret key for `/config/secret.js`<br>
3. Run `node serverLoD.js`<br><br>

For 24/4 runtime we recommend using PM2<br>
For more informations please visit <a href="https://www.npmjs.com/package/pm2">npm page of pm2</a><br>
 Init:<br>
     - pm2 start serverLoD.js<br>
 Usage:<br>
     - pm2 restart serverLoD<br>
     - pm2 logs serverLoD<br>
     - pm2 stop serverLoD<br>
     - pm2 start serverLod<br>
