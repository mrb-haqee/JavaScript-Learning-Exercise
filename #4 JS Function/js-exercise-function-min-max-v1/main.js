// TODO: answer here
const minMax = (str) => {
  if (str.length > 1) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
      arr.push(Number(str[i]));
    }
    arr.sort((a, b) => a - b);
    let sml = arr[0],
      big = arr[arr.length - 1];
    if (sml == big) {
      return `Nilai terkecil dan terbesar adalah ${sml}`;
    } else {
      return `Nilai terkecil adalah ${sml}, dan terbesar adalah ${big}`;
    }
  } else {
    return `Nilai terkecil dan terbesar adalah ${str}`;
  }
};

console.log(minMax("123141587981042"));
module.exports = minMax;
