import { createTransport } from "nodemailer";


//using mailtrap api for mailing
export const sendMail = async(text) => {
    const transporter = createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        }
    });
    await transporter.sendMail({
        subject: "Contact Request From Portfolio", 
        to: process.env.MY_MAIL,  //self send
        from: process.env.MY_MAIL, 
        text,
    });

};
//SMTP

