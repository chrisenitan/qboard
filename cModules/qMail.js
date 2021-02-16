const nodemailer = require('nodemailer');

let processMail = (req)=>{
    var transporter = nodemailer.createTransport({
        service: "outlook",
        auth: {
            user: "crisdeven@hotmail.com",
            pass: process.env.mailerPass
        }
    })

    var mailOptions = {
        from: "crisdeven@hotmail.com",
        to:"enitanchris@gmail.com",
        subject: "Account Recovery",
        text: "Here is a longr er test of the email function"
    }

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            var res = {
                status: false,
                log: `Log ${info.response}`
            }
        }
        else{
            var res = {
                status: true,
                log: `Log ${info.response}`
            }
        }
        return res
    })
 

}

exports.processMail = processMail