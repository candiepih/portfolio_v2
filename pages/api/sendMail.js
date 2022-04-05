// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "",
    pass: ""
  }
})

const send = ({ email, name, message }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`;
  const msg = {
    from,
    to: "mutheeal.am@gmail.com",
    subject: "Information from site",
    text: message,
    replyTo: from
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(msg, (error, info) => {
      error ? reject(error) : resolve(info);
    })
  })
}



const mailHandler = (req, res) => {
  send(req.body).then(() => {
    let data = { success: true };
    res.json(JSON.stringify(data));

  }).catch((error) => {
    let data = { success: false, error };
    res.json(JSON.stringify(data));

  })
}

export default mailHandler;
