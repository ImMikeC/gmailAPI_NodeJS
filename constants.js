require("dotenv").config();

const auth = {
  type: "OAuth2",
  user: "nombre-usuario@gmail.com",
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  refreshToken: process.env.REFRESH_TOKEN,
};

const mailoptions = {
  from: "Usuario <nombre-usuario@gmail.com>",
  to: "nombre-usuario@gmail.com",
  subject: "Gmail API NodeJS",
};

module.exports = {
  auth,
  mailoptions,
};