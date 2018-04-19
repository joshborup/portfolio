const nodemailer = require('nodemailer');
module.exports = {
    message: (req, res) => {
        const {name, email, message} = req.body;
        console.log(name, email, message)

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                   user: 'joshborup@gmail.com',
                   pass: process.env.EMAIL_PASSWORD
               }
           });
        
        const mailOptions = {
            from: 'joshborup@gmail.com', // sender address
            to: 'joshborup@gmail.com', // list of receivers
            subject: 'New contact from ' + email, // Subject line
            html: `
                <p>name: ${name}</p>
                <p>email: ${email}</p>
                <p>message: ${message}</p>  
            `// plain text body
          };
        
        transporter.sendMail(mailOptions, function (err, info) {
            if(err){
              console.log(err)
            }else{
              console.log(info);
         }});

        res.status(200).json({result:'Your message was sent!'});

    }
}