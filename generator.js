// imports for our encryption code
const CryptoJS = require(crypto-js);

import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';


const message, nonce, path, privateKey; 
const hashDigest = sha256(nonce + message);
const hmacDigest = Base64.stringify(hmacSHA512(path + hashDigest, privateKey));


// crypto model from ChatGPT

function encrypt(plaintext, password) {
    const ciphertext = CryptoJS.AES.encrypt(plaintext, password).toString();
    return ciphertext;
}

function decrypt(ciphertext, password) {
    const bytes = CryptoJS.AES.decrypt(ciphertext, password);
    const plaintext = bytes.toString(CryptoJS.enc.utf8);
    return plaintext
}

const password = 'secret_password';
const plaintext = 'secret_message';


const ciphertext = encrypt(plaintext, password);
console.log("Encrypted Message: " + ciphertext);

const decryptedMessage = decrypt(ciphertext, password);
console.log("Decrypted Message: " + decryptedMessage);