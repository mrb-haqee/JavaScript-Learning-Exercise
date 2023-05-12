function zodiacSign(day, month) {
  let months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  for (let i = 0; i < months.length; i++) {
    if (month == months[i].toLowerCase()) {
      return "Nama bulan salah";
    }
    if (month == months[i][0] + months[i][1] + months[i][2]) {
      if (month == "Mei") {
        continue;
      }
      return "Nama bulan salah";
    }
    let genap = ["April", "Juni", "September", "November"];
    if (day <= 31 && day > 0) {
      if (day > 29 && month == "Februari") {
        return "Input tanggal salah";
      }
      if (day == 31) {
        for (let i = 0; i < genap.length; i++) {
          if (month == genap[i]) {
            return "Input bulan salah";
          }
        }
      }
      if (month == "Januari") {
        if (day >= 20) {
          return `Aquarius`;
        } else {
          return `Capricorn`;
        }
      } else if (month == "Februari") {
        if (day >= 19) {
          return `Pisces`;
        } else {
          return `Aquarius`;
        }
      } else if (month == "Maret") {
        if (day >= 21) {
          return `Aries`;
        } else {
          return `Pisces`;
        }
      } else if (month == "April") {
        if (day >= 20) {
          return `Taurus`;
        } else {
          return `Aries`;
        }
      } else if (month == "Mei") {
        if (day >= 21) {
          return `Gemini`;
        } else {
          return `Taurus`;
        }
      } else if (month == "Juni") {
        if (day >= 21) {
          return `Cancer`;
        } else {
          return `Gemini`;
        }
      } else if (month == "Juli") {
        if (day >= 23) {
          return `Leo`;
        } else {
          return `Cancer`;
        }
      } else if (month == "Agustus") {
        if (day >= 23) {
          return `Virgo`;
        } else {
          return `Leo`;
        }
      } else if (month == "September") {
        if (day >= 23) {
          return `Libra`;
        } else {
          return `Virgo`;
        }
      } else if (month == "Oktober") {
        if (day >= 23) {
          return `Scorpio`;
        } else {
          return `Libra`;
        }
      } else if (month == "November") {
        if (day >= 22) {
          return `Sagittarius`;
        } else {
          return `Scorpio`;
        }
      } else if (month == "Desember") {
        if (day >= 22) {
          return `Capricorn`;
        } else {
          return `Sagittarius`;
        }
      }
      return "Nama bulan salah";
    }
    return "Input tanggal salah"; // TODO: replace this
  }
}

console.log(zodiacSign(22, 'November'));

// console.log(zodiacSign(31, "Desember"));
// console.log(zodiacSign(41, "Desember"));
// console.log(zodiacSign(31, "Februari"));
// console.log(zodiacSign(29, "Februari"));
// console.log(zodiacSign(29, "Januari"));

module.exports = zodiacSign;
