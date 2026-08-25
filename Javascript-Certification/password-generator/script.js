function generatePassword(pwdLength) {
  if (
    !Number.isInteger(pwdLength) || 
    pwdLength < 0
  ) {
    throw new Error("Argument should be a number greater than -1!");
  }

  const pwdChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let pwd = "";

  for (let i = 0; i < pwdLength; i++) {
    pwd += pwdChars[Math.floor(Math.random() * pwdChars.length)];
  }

  return pwd;
}

const password = generatePassword(10);

console.log(`Generated password: ${password}`); // Generated password: XoR0T@$Wg6
