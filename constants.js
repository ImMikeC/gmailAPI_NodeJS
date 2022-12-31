require("dotenv").config();

const auth = {
  type: "OAuth2",
  user: "hebressus@gmail.com",
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  refreshToken: process.env.REFRESH_TOKEN,
};

const mailoptions = {
  from: "Josemi <hebressus@gmail.com>",
  to: "sanscratos@gmail.com",
  subject: "Gmail API NodeJS",
};

module.exports = {
  auth,
  mailoptions,
};