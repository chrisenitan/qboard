const nodemailer = require('nodemailer');

function lastLap (request, res){
    //console.log(request)
    var request = {
        mane: "fdhfk"
    }
    return request
}


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
            var result = {
                status: false,
                log: `Log ${info.response}`
            }
        }
        else{
            var result = {
                status: true,
                log: `Log ${info.response}`
            }
        }
       lastLap(result)
    })
}



exports.lastLap = lastLap
exports.processMail = processMail