function process_argv() {
  const { argv } = process;
  const result = krsApplication(argv[2], argv[3], argv[4]);

  return result;
}

function krsApplication(name, programId, gpa) {
  let sks = "";
  if (Number(gpa) > 4) {
    return "Invalid gpa number";
  } else if (Number(gpa) > 2.99) {
    sks = "24";
  } else if (Number(gpa) >= 2.5) {
    sks = "21";
  } else if (Number(gpa) >= 2) {
    sks = "18";
  } else if (Number(gpa) >= 1.5) {
    sks = "15";
  } else if (Number(gpa) >= 0) {
    sks = "12";
  } else if (Number(gpa) < 0) {
    return "Invalid gpa number";
  }
  let program = "";
  if (programId == "ACC") {
    program = "Akuntansi";
  } else if (programId == "HIN") {
    program = "Hubungan Internasional";
  } else if (programId == "IAB") {
    program = "Ilmu Administrasi Bisnis";
  } else if (programId == "IAP") {
    program = "Ilmu Administrasi Publik";
  } else if (programId == "MJN") {
    program = "Manajemen";
  } else if (programId == "TKM") {
    program = "Teknik Kimia";
  }
  if (Number(gpa) >= 3) {
    return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu dapat mengambil SKS sebanyak ${sks} SKS untuk semester depan.`;
  } else {
    return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi ${program} dan hanya dapat mengambil SKS sebanyak ${sks} SKS untuk semester depan.`;
    // TODO: replace this
  }
}

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
  console.log(process_argv());
}

module.exports = krsApplication;
