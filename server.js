const express = require('express')
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))

app.post('/mail',(req,res)=>{
    const { email , sub , body } = req.body
    console.log(req.body);
    sendEmail(email,sub,body);
})

const sendEmail = async (email, sub , body) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: '210701278@rajalakshmi.edu.in',
          pass: 'hgeq ippg blyw cjhq'
        }
      });
      
      var mailOptions = {
        from: '210701278@rajalakshmi.edu.in',
        to: email ,
        subject: sub,
        text: body,
      };
      
      await transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

}

app.listen(5000,()=>{
    console.log("connected");
})