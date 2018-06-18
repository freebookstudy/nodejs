/**
 * Nodemailer 모듈 2 - 메일 보내기(HTML)
 * text: 주석 후 html 코드 작성
 */
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
      user: 'freejava1191@gmail.com',
      pass: 'vmflfkdlvm!@',
  },
});

// setup email data with unicode symbols
const mailOptions = {
    from: 'freejava1191@gmail.com', // sender address
    to: 'freelife1191.good@gmail.com,freeopen1191@gmail.com', // list of receivers
  subject: 'Hello HTML', // Subject line
  // text: 'Hello world?', // plain text body
  // html body
  html: '<h1>Hello HTML</h1><a href="http://www.infopub.co.kr">' +
  '<img src="http://www.infopub.co.kr/pdspool/common/main_top/2016-11-02.jpg"/></p></a>',
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Message sent: ${info.response}`);
  }
  transporter.close();
});
