import crypto from "crypto";
// import { Buffer } from "buffer";

let dictionary = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']

/**
 * 登录账号加密算法：加密前为：账户名 + 当日特殊字符串(长度为25) + 密码base64加密后结果，使用iv
 * @param {Object} use_data 加密前的数据
 * @returns {String} ciphertext 加密后的数据
 */
async function encrypt(use_data) {
    let {
        username,
        password
    } = use_data;
    let today_string = getstring();
    let text = username + today_string + Buffer.from(password).toString("base64");
    let iv = Math.round(new Date(new Date().toLocaleDateString()) / 1000)
    console.log(text)

}
encrypt({username:"wuhao",password:"123456"})

function getstring() {
    let today = String(Math.round(new Date(new Date().toLocaleDateString()) / 1000)); //获取当天0点的时间戳
    let arr = today.split("");
    let string = "righttruelys";
    for (let i = 0; i < arr.length; i++) {
        let a = arr[i] || 1,
            b = arr[i + 1] || 10;
        let number = Number(a + b) > 26 ? Number(a) + Number(b) : Number(a + b);
        string += dictionary[a] + dictionary[number];
    }
    return string ;
}

// AES 加密
function aesEncrypt(message, key,iv) {
    console.log(key.length)
    const cipher = crypto.createCipheriv("aes-256-cbc", key,Buffer.alloc(16, 0));
    let crypted = cipher.update(message, "utf8", "hex");
    crypted += cipher.final("hex");
    return crypted;
};

// AES 解密
function aesDecrypt(text, key,iv) {
    const cipher = crypto.createDecipheriv("aes-256-cbc", key, Buffer.alloc(16, 0));
    let decrypted = cipher.update(text, "hex", "utf8");
    decrypted += cipher.final("utf8");
    return decrypted;
};

/**
 * 登录账号解密算法
 * @param {String} ciphertext 密文
 * @returns {Object} 解密后的数据
 */
function decrypt(ciphertext) {

}

export default {
    decrypt,
    encrypt
}