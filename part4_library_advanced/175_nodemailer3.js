/**
 * Nodemailer 모듈 3 - 메일 보내기(첨부파일)
 * attachment 파일에 대한 파일명과 첨부할 파일 경로 지정 하여 첨부파일 전송
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
  subject: 'Hello attachment', // Subject line
  // text: 'Hello world?', // plain text body

  // html body
  html: '<h1>Hello Attachment</h1><a href="http://www.infopub.co.kr">' +
    '<img src="http://www.infopub.co.kr/pdspool/common/main_top/2016-11-02.jpg"/></p></a>',

  // attachment configuration
  attachments: [
    {
      filename: 'attachment_test.xlsx',
      path: '',
      // path: 'attachment_test.xlsx',
    },
  ],
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Message sent: ${info.response}`);
    console.log(mailOptions.attachments);
  }
  transporter.close();
});
