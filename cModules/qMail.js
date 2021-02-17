const nodemailer = require('nodemailer');

let processMail = (req, res)=>{
    var transporter = nodemailer.createTransport({
        service: "outlook",
        auth: {
            user: process.env.mailerMail,
            pass: process.env.mailerPass
        }
    })

    var mailOptions = {
        from: process.env.mailerMail,
        to: req.to,
        subject: req.subject,
        text: req.body
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
        exports.res = res
        return res
       
    })

  

}

exports.processMail = processMail