function emailSend() {
 const userName = document.getElementById('name').value;
 const phone = document.getElementById('phone').value;
 const email = document.getElementById('email').value;

 const messageBody = `
    <h3>New Form Submission</h3>
    <p><strong>Name:</strong> ${userName}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Email:</strong> ${email}</p>
  `;

 fetch("https://api.elasticemail.com/v2/email/send", {
  method: "POST",
  headers: {
   "Content-Type": "application/x-www-form-urlencoded"
  },
  body: new URLSearchParams({
   apikey: "CBA2E28A939AD6F5D6400A4B0DC620C62E982411EAF7E490F1FE76CB5E51EA9BF806E036020B5A589F3DA04F77164FAE",
   subject: "New Contact Form Submission",
   from: "babullicer@feutech.edu.ph",
   to: "babullicer@feutech.edu.ph",
   bodyHtml: messageBody,
   isTransactional: true
  })
 })

  .then(response => response.json())
  .then(data => {
   if (data.success) {
    swal("Successful", "Email has been sent successfully!", "success");
   } else {
    swal("Error", "Failed to send email!", "error");
    console.error("Elastic Error:", data.error);
   }
  })
  
  .catch(error => {
   swal("Error", "An unexpected error occurred!", "error");
   console.error("Fetch Error:", error);
  });
}
