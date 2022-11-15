const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();

router.post('/api/v1/form', async (req, res) => {
  try {
    const {
      name, login, tel,
    } = req.body;

    const transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');

    const mailOptions = {
      from: login,
      to: 'nasybulindk@social.mos.ru, PimenovVY@social.mos.ru',
      subject: 'Резюме',
      text: `Здравствуйте! Меня зовут ${name}. прошу рассмотреть мою кандидатуру на данную вакансию. Мой телефон: ${tel}`, // plaintext body
      html: '<b>Hello world 🐴</b>',
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log(`Message sent: ${info.response}`);
    });
  } catch (error) {
    console.error();
  }
});

module.exports = router;
