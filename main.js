var CryptoJS = require("crypto-js");
var key = "12345678901234561234567890123456";
var iv = "1234567890123456";
var text = "My Name Is Nghĩa";


var encryptedCP = CryptoJS.AES.encrypt(text, CryptoJS.enc.Utf8.parse(key), { iv: CryptoJS.enc.Utf8.parse(iv) });
var decryptedWA = CryptoJS.AES.decrypt(encryptedCP,CryptoJS.enc.Utf8.parse(key), { iv: CryptoJS.enc.Utf8.parse(iv)});
var cryptText = encryptedCP.toString();
console.log("Data encrypt: " + cryptText);
console.log("Data decrypt: " + decryptedWA.toString(CryptoJS.enc.Utf8));

//Decode from text    
var cipherParams = CryptoJS.lib.CipherParams.create({
     ciphertext: CryptoJS.enc.Base64.parse(cryptText )
});
var decryptedFromText = CryptoJS.AES.decrypt(cipherParams, CryptoJS.enc.Utf8.parse(key), { iv: CryptoJS.enc.Utf8.parse(iv)});
console.log("Data decrypt from encrypted text: " + decryptedFromText.toString(CryptoJS.enc.Utf8));