# LeagueOfDreamsEJS
# For more informations please visit <a href="https://discord.gg/NUDmnGR2ka">our discord server</a>

Server for league of dreams based on ejs and socket.io<br>
This version is outdated and work only with LoD client version 0.0.4<br>
<br>
Requirements:<br>
 -MongoDB server<br>
 -Nodejs<br>
 -Range port forward 3000 to 7000<br>
 -LeagueSandbox GameServer<br>
<br>
<h2>Setup EJS server for Windows</h2><br>
1. Change secretkey and database name in `/config/secret.js`<br>
2. Range port forward 3000 to 7000<br>
3. Install <a href="https://nodejs.dev">NodeJS</a> and <a href="https://www.mongodb.com/try/download/community">MongoDB Community Server</a><br>
4. Compile <a href="https://github.com/LeagueSandbox/GameServer">League Sandbox Project</a> then update path in `/middlewares/gameServer.js` lines `64`, `65`, `105`, `109` and update <a href="https://github.com/LeagueSandbox/LeagueSandbox-Default">Content Folder</a> path at line `100`<br>
5. Run `install_node_modules.bat` and then `run_windows_platform.bat`<br>
6. Connect to ip via Client<br><br>

<h2>Setup EJS server for Ubuntu 20</h2><br>
1. Change secretkey and database name in `/config/secret.js`<br>
2. Range port forward 3000 to 7000<br>
3. Install NodeJS and npm via ```sudo apt install nodejs npm``` , MongoDB Community Server following this <a href="https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/">tutorial</a> and most important dotnet following this <a href="https://tecadmin.net/how-to-install-net-core-on-ubuntu-20-04/">tutorial</a><br>
5. Compile <a href="https://github.com/LeagueSandbox/GameServer">League Sandbox Project</a> using `dotnet build .` then update path in `/middlewares/gameServer.js` lines `64`, `65`, `105`, `109` and update <a href="https://github.com/LeagueSandbox/LeagueSandbox-Default">Content Folder</a> path at line `100`<br>
8. Get into folder via `cd /path/to/EjsServer`<br>
7. Run `npm install` and then `node serverLoD.js`<br>
8. Connect to ip via Client<br><br>

For 24/4 runtime we recommend using PM2<br>
For more informations please visit <a href="https://www.npmjs.com/package/pm2">npm page of pm2</a><br>
 Init:<br>
     - pm2 start serverLoD.js<br>
 Usage:<br>
     - pm2 restart serverLoD<br>
     - pm2 logs serverLoD<br>
     - pm2 stop serverLoD<br>
     - pm2 start serverLod<br>
