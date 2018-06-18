/**
 * Nodemailer 모듈 1 - 메일 보내기(TEXT)
 * nodemailer 라는 모듈을 이용하면 손쉽게 gmail, naver 등으로 메일을 보낼 수 있다
 * 보안 수준이 낮은 앱 엑세스 허용
 * https://support.google.com/accounts/answer/6010255
 * 설정 POP 설정 및 IMAP 사용은 필요없음
 * https://mail.google.com/mail/u/0/?hl=ko#settings/fwdandpop
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
  subject: 'Hello Hello ✔', // Subject line
  text: 'Hello world?', // plain text body
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

