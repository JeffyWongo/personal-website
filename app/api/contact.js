import nodeMailer from "nodemailer"

export default async function ContactAPI(req, res) {
  const { name, email, message } = req.body;

  const user = process.env.user;

  const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: user,
      to: "jeffhwang9@gmail.com",
      replyTo: email,
      subject: `Contact form submission from ${name}`,
      html: `
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>
            `,
    });

    console.log("Message sent:", mail.messageId);

    return res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({
        message: "Could not send the email. Your message was not sent.",
      });
  }
}
