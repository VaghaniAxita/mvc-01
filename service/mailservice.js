const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "axita23@gmail.com",
        pass: "abc def"
    }
})
const sendingMail = (to, subject, html) => {
const mailOptions = {
        from: "axita23@gmail.com",
        to: to,
        subject,
        html
    }
    transport.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(info);
        }
    })
}


module.exports = sendingMail