async function genKey() {
let key = await window.crypto.subtle.generateKey({'name': 'AES-GCM', 'length': 256}, true, ['encrypt', 'decrypt']);
return key;
}
async function expKey(key) {
let keyJwkObject = await window.crypto.subtle.exportKey('jwk', key);
return keyJwkObject;
}
async function impKey(keyStr) {
let key = window.crypto.subtle.importKey('jwk',{"alg":"A256GCM","ext":true,"k":keyStr,"key_ops":["encrypt","decrypt"],"kty":"oct"},
	{'name': 'AES-GCM'},true,['encrypt', 'decrypt']);
return key;
}
async function encrypt(plaintext, key, iv) {
let cipher = await window.crypto.subtle.encrypt({'name': 'AES-GCM', 'iv': iv}, key, plaintext);
return cipher;
}
async function decrypt(cipher, key, iv) {
let plaintext = await window.crypto.subtle.decrypt({'name': 'AES-GCM', 'iv': iv}, key, cipher);
return plaintext;
}
function generateRandomBytes(numOfBytes) {
return window.crypto.getRandomValues(new Uint8Array(numOfBytes));
}
function bytesBufferToBase64(buffer) {
return btoa(String.fromCharCode.apply(null, new Uint8Array(buffer)));
}
function base64ToBytesBuffer(base64String) {
return Uint8Array.from(atob(base64String), c => c.charCodeAt(0));
}
function stringToBytes(message) {
let enc = new TextEncoder();
return enc.encode(message);
}
function bytesToString(bytes) {
let dec = new TextDecoder();
return dec.decode(bytes);
}