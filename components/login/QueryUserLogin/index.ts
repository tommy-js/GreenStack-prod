var bcrypt = require("bcryptjs");

export function comparePass(password: string, hash: string) {
  console.log(password);
  console.log(hash);
  bcrypt.compare(password, hash, (err, isMatch) => {
    console.log(isMatch);
    return isMatch;
  });
}
