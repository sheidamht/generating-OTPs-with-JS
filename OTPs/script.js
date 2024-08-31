function generateOTP(length = 6) {
    const digits = '0123456789';
    let otp = '';
    for (let i = 0; i < length; i++) {
        otp += digits[Math.floor(Math.random() * digits.length)];
    }
    return otp;
}

const otp1 = generateOTP(6);
const otp2 = generateOTP(8);
const otp3 = generateOTP(4);

console.log(otp1);
console.log(otp2);
console.log(otp3);

