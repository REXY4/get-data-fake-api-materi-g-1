const totalData = 93;
const limit = 10;

const bulatkanKeBawah = Math.floor(totalData / limit);
const bulatkanKeAtas = Math.ceil(totalData / limit);
console.log("di bulatkan ke atas ", bulatkanKeAtas);
console.log("di bulatkan ke bawah ", bulatkanKeBawah);
console.log("total asli ", totalData / limit);