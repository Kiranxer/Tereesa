app.get("/deployment", (req, res) => {
 res.sendFile(__dirname+"/public/index-button.html");
});
app.get("/deploy", (req, res) => {
  res.sendFile(__dirname+"/public/deploy.html");
});
app.get("/heroku", (req, res) => {
  res.sendFile(__dirname+"/public/heroku.html");
});
app.get("/editor", (req, res) => {
  res.sendFile(__dirname+"/public/editor.html"); 
});
app.get("/modules", (req, res) => {
  res.sendFile(__dirname+"/public/module.html");
});
// app.get('/koyeb', (req, res) => {
// res.redirect(301, 'https://app.koyeb.com/apps/deploy?type=docker&image=quay.io/sampandey001/koyeb:latest&env[SESSION_ID]&env[OWNER_NUMBER]&env[MONGODB_URI]&&env[OWNER_NAME]&env[PREFIX]=.&env[THUMB_IMAGE]=https://raw.githubusercontent.com/SecktorBot/Brandimages/main/logos/SocialLogo%201.png&env[email]=sam@secktor.live&env[global_url]=instagram.com&env[FAKE_COUNTRY_CODE]=92&env[READ_MESSAGE]=false&env[DISABLE_PM]=false&env[ANTI_BAD_WORD]=fuck&env[WORKTYPE]=public&env[THEME]=SECKTOR&env[PACK_INFO]=Sam;Pandey&name=secktorbot&env[KOYEB_NAME]=sampandey001&env[ANTILINK_VALUES]=chat.whatsapp.com&env[PORT]=8000');
// });
app.get("/koyeb", (req, res) => {
  res.sendFile(__dirname+"/public/deploy.html");
});
app.get('/koyeb2', (req, res) => {
res.redirect(301, 'https://app.koyeb.com/apps/deploy?type=git&repository=github.com/https://github.com/SamPandey001/Secktor-Md&branch=main&build_command=npm%20i&run_command=npm%20start&env[SESSION_ID]&env[OWNER_NUMBER]&env[MONGODB_URI]&&env[OWNER_NAME]&env[PREFIX]=.&env[THUMB_IMAGE]=https://raw.githubusercontent.com/SecktorBot/Brandimages/main/logos/SocialLogo%201.png&env[email]=sam@secktor.live&env[global_url]=instagram.com&env[FAKE_COUNTRY_CODE]=92&env[READ_MESSAGE]=false&env[DISABLE_PM]=false&env[ANTI_BAD_WORD]=fuck&env[WORKTYPE]=public&env[THEME]=SECKTOR&env[PACK_INFO]=Sam;Pandey&name=secktorbot&env[KOYEB_NAME]=sampandey001&env[ANTILINK_VALUES]=chat.whatsapp.com&env[PORT]=8000');
	     });
app.get('/railway', (req, res) => {
res.redirect(301, 'https://railway.app/new/template/hbw5a1?referralCode=okazYt'); 
});
app.get('/youtube', (req, res) => {
  res.sendFile(__dirname+"/public/main.html");
});
app.get('/support', (req, res) => {
res.redirect(301, 'https://chat.whatsapp.com/Bl2F9UTVU4CBfZU6eVnrbCl');
});
app.get('/mongo', (req, res) => {
res.redirect(301, 'https://www.youtube.com/watch?v=WWrpBCBlyuo');
});

app.get('/wiki', (req, res) => {
res.redirect(301, 'https://github.com/SamPandey001/Secktor-Md/wiki');
});

app.get('/plugins', (req, res) => {
res.redirect(301, 'https://github.com/SamPandey001/Secktor-Plugins');
});
app.get('/repo', (req, res) => {
res.redirect(301, 'https://github.com/SamPandey001/Secktor-Md');
});
app.get('/termux', (req, res) => {
res.redirect(301, 'https://f-droid.org/repo/com.termux_118.apk');
}); 
app.get('/termux', (req, res) => {
res.redirect(301, 'https://secktor.onrender.com/');
});
app.get('/public', (req, res) => {
res.redirect(301, 'https://chat.whatsapp.com/KWWFhiP1yNn2Sc9TDZpHXJ');
});
app.get('/wiki/mongo', (req, res) => {
res.redirect(301, 'https://github.com/SamPandey001/Secktor-Md/wiki/Mongodb-URI');
});
app.get('/session', (req, res) => {
res.redirect(301, 'https://secktor-md.koyeb.app/'); 
});
app.get('/session2', (req, res) => {
res.redirect(301, 'https://secktor-md.koyeb.app/'); 
});
