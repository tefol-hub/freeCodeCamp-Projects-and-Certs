const email = "raymond05@gmail.com"

function maskEmail(email) {

  if (!email.includes("@")) {
    return "Email format invalid, @ is missing!";
  }

  const trimEmail = email.trim();

  if (email.includes(" ")) {
    return "Your email input shouldn't have any spaces";
  }

  const slicedEmail = trimEmail.slice(
    1, 
    (email.indexOf("@") - 1)
  );

  const maskedEmail = trimEmail.replace(
    slicedEmail,
    "*".repeat(slicedEmail.length)
  )

  return maskedEmail;
}

console.log(maskEmail(email)); // r*******5@gmail.com
