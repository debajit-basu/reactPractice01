import axios from 'axios';
import env from "../env";

const mailer = {

  // request api to send mail
  // @ author: Arijit Deb Roy
  // @ params: mailType, to, cc[], bcc[], subject, attachment(0/1) data{}

  sendMail(to, mailType, cc, bcc, subject, attachmentStatus = false, data) {
    const sendData = {
      "mailType" : mailType,
      "to" : to,
      "cc" : cc,
      "bcc" : bcc,
      "subject" : subject,
      "attachment": attachmentStatus,
      "data": data
    }
    return axios.post(`${env.MAIL_URL}/mail?_format=json`, sendData)
      .then(res => res.data)
      .catch(error => error);
  }
}

export default mailer;
