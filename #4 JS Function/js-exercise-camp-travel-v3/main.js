function travelDiscount(id, amount) {
  const GetRole = (id) => {
    let check = false;
    for (let i = 0; i < 10; i++) {
      if (id.split("-")[0].charAt(0) === String(i)) {
        return "";
      }
      if (id.split("-")[0].charAt(3) === String(i)) {
        check = true;
      }
    }
    if (check) {
      return id.split("-")[0].substring(0, 3);
    } else {
      return id.split("-")[0].substring(0, 4);
    }
  };
  let role = GetRole(id);
  if (role == "STD") {
    let totalPrice = 0;
    if (amount > 20) {
      totalPrice = amount * 20000 - amount * 20000 * 0.2;
      return `"Selamat! Voucher untuk STUDENT dengan id ${id} berhasil di redeem, total yang harus dibayarkan sebesar Rp. ${totalPrice}."`;
    }
    totalPrice = amount * 20000;
    return `"Selamat! Voucher untuk STUDENT dengan id ${id} berhasil di redeem, total yang harus dibayarkan sebesar Rp. ${totalPrice}."`;
  } else if (role == "CORP") {
    let totalPrice = 0;
    if (amount > 30) {
      totalPrice = amount * 50000 - amount * 50000 * 0.25;
      return `"Selamat! Voucher untuk CORPORATE dengan id ${id} berhasil di redeem, total yang harus dibayarkan sebesar Rp. ${totalPrice}."`;
    }
    totalPrice = amount * 50000;
    return `"Selamat! Voucher untuk CORPORATE dengan id ${id} berhasil di redeem, total yang harus dibayarkan sebesar Rp. ${totalPrice}."`;
  } else {
    return "Maaf, voucher yang anda miliki tidak valid!"; // TODO: replace this
  }
}

console.log(travelDiscount("STD9845-8461-121", 11));

console.log(travelDiscount("CORP8135-4612-912", 30));

console.log(travelDiscount("STD7601-639-184", 36));

console.log(travelDiscount("CORP5611-8456-999", 31));

console.log(travelDiscount("8347-7-9124365", 99));

console.log(travelDiscount("XYZ8135461-2-912", 1));
module.exports = travelDiscount;
