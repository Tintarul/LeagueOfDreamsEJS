# LeagueOfDreamsEJS
# For more informations please visit <a href="https://discord.gg/NUDmnGR2ka">our discord server</a>

Server for league of dreams based on ejs and socket.io<br>
<br>
Requirements:<br>
 -MongoDB server<br>
 -Nodejs<br>
 -Range port forward 3000 to 7000<br>
 -LeagueSandbox GameServer<br>
<br>
<h2>Setup EJS server for Windows</h2><br>
1. Change secretkey and database name in <code>/config/secret.js</code><br>
2. Range port forward 3000 to 7000<br>
3. Install <a href="https://nodejs.dev">NodeJS</a> and <a href="https://www.mongodb.com/try/download/community">MongoDB Community Server</a><br>
4. Compile <a href="https://github.com/LeagueSandbox/GameServer">League Sandbox Project</a> then update path in <code>/middlewares/gameServer.js</code> lines <code>64</code>, <code>65</code>, <code>105</code>, <code>109</code> and update <a href="https://github.com/LeagueSandbox/LeagueSandbox-Default">Content Folder</a> path at line <code>100</code><br>
5. Run <code>install_node_modules.bat</code> and then <code>run_windows_platform.bat</code><br>
6. Connect to ip via <a href="https://github.com/Tintarul/LeagueOfDreamsElectron">Client</a><br><br>

<h2>Setup EJS server for Ubuntu 20</h2><br>
1. Change secretkey and database name in <code>/config/secret.js</code><br>
2. Range port forward 3000 to 7000<br>
3. Install NodeJS and npm via <code>sudo apt install nodejs npm</code> , MongoDB Community Server following this <a href="https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/">tutorial</a> and most important dotnet following this <a href="https://tecadmin.net/how-to-install-net-core-on-ubuntu-20-04/">tutorial</a><br>
5. Compile <a href="https://github.com/LeagueSandbox/GameServer">League Sandbox Project</a> using <code>dotnet build .</code> then update path in <code>/middlewares/gameServer.js</code> lines <code>64</code>, <code>65</code>, <code>105</code>, <code>109</code> and update <a href="https://github.com/LeagueSandbox/LeagueSandbox-Default">Content Folder</a> path at line <code>100</code><br>
8. Get into folder via <code>cd /path/to/EjsServer</code><br>
7. Run <code>npm install</code> and then <code>node serverLoD.js</code><br>
8. Connect to ip via <a href="https://github.com/Tintarul/LeagueOfDreamsElectron">Client</a><br><br>

For 24/7 runtime we recommend using PM2<br>
For more informations please visit <a href="https://www.npmjs.com/package/pm2">npm page of pm2</a><br>
 Init:<br>
     - pm2 start serverLoD.js<br>
 Usage:<br>
     - pm2 restart serverLoD<br>
     - pm2 logs serverLoD<br>
     - pm2 stop serverLoD<br>
     - pm2 start serverLod<br>
