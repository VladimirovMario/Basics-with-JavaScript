function guessPassword(input) {
  let pass = input[0];

  if (pass === `s3cr3t!P@ssw0rd`) {
    console.log(`Welcome`);
  } else {
    console.log(`Wrong password!`);
  }
}
guessPassword([`s3cr3t!P@ssw0rd`]);
guessPassword([`s3cr3t!p@ss`]);