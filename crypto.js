var CryptoJS = require("crypto-js");

var encrypted = CryptoJS.AES.encrypt("Message", "Secret Passphrase");
var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
decrypted = decrypted.toString(CryptoJS.enc.Utf8);

console.log(encrypted + " " + decrypted);
