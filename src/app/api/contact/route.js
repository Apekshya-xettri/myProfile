import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const formData = await request.json();

    console.log("FORM DATA:", formData);

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "apekshyachhetri1@gmail.com",
      subject: "New Contact Form Message",
      text: `
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}

Message:
${formData.message}
      `,
    });

    if (error) {
      console.log("RESEND ERROR:", error);

      return Response.json(
        { error: error },
        { status: 500 }
      );
    }

    console.log("EMAIL SENT:", data);

    return Response.json({
      message: "Email sent!",
      data: data,
    });

  } catch (error) {
    console.log("SERVER ERROR:", error);

    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// RESEND_API_KEY = re_DZmB3W7Y;

// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(request) {
//   const formData = await request.json();

//   console.log(formData);

//   const { data, error } = await resend.emails.send({
//     from: "onboarding@resend.dev",
//     to: "apekshyachhetri1@gmail.com",
//     subject: "New Contact Form Message",
//     text: `
// Name: ${formData.name}
// Email: ${formData.email}
// Message: ${formData.message}
//     `,
//   });

//   if (error) {
//     return Response.json({ error }, { status: 500 });
//   }

//   return Response.json({ message: "Email sent!" });
// }