import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { companyName, city, email, phone, firstName, lastName } =
      await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.OWNER_USER, 
        pass: process.env.OWNER_PASS,
      },
    });

    const mailOptions = {
      from: `"ET Transport Quote" <${process.env.OWNER_USER}>`,
      to: "owner@email.com", 
      subject: "New Quote Request",
      html: `
        <h3>New Quote Request Received</h3>
        <p><b>Company:</b> ${companyName}</p>
        <p><b>City:</b> ${city}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "Not provided"}</p>
        <p><b>Name:</b> ${firstName} ${lastName}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email send failed:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
