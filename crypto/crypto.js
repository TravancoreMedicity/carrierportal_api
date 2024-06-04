const crypto = require('crypto');


const algorithm = 'aes-256-cbc'; // or any other algorithm
// const secretKey = 'hkjhfs44544*&*&H90dbjb098oK8ILKN'; // Use a strong, unique key
const iv = crypto.randomBytes(16); // Initialization vector

const encrypt = (text) => {
    const cipher = crypto.createCipheriv(algorithm, 'hkjhfs44544*&*&H90dbjb098oK8ILKN', 'hkjhfs44544*&*&H');
    let encrypted = cipher.update(text, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    return encrypted;
};

module.exports = {
    encrypt
}