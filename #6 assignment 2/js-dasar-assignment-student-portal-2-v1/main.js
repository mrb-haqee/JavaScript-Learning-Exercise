function process_argv() {
  const { argv } = process;
  const result = studentStatus(argv[2], argv[3]);

  return result;
}

function studentStatus(name, studentId) {
  console.log(studentId);
  let kodeFakultas, tahun, kodeProgram, nomor;
  if (studentId[2] == 2) {
    kodeFakultas = String(studentId.slice(0, 2));
    tahun = String(studentId.slice(2, 6));
    kodeProgram = String(studentId.slice(6, 8));
  } else if (studentId[4] == 2) {
    kodeFakultas = String(studentId.slice(0, 4));
    tahun = String(studentId.slice(4, 8));
    kodeProgram = String(studentId.slice(8, 10));
  } else {
    kodeFakultas = String(studentId.slice(0, 5));
    tahun = String(studentId.slice(5, 9));
    kodeProgram = String(studentId.slice(9, 11));
  }
  const programStudy = new Map();
  programStudy.set("21", "Ekonomi");
  programStudy.set("22", "Manajemen");
  programStudy.set("23", "Akuntansi");
  programStudy.set("31", "Administrasi Publik");
  programStudy.set("32", "Administrasi Bisnis");
  programStudy.set("33", "Hubungan Internasional");
  programStudy.set("41", "Teknik Sipil");
  programStudy.set("42", "Arsitektur");
  programStudy.set("51", "Matematika");
  programStudy.set("52", "Fisika");
  programStudy.set("53", "Informatika");

  const Fakultas = new Map();
  Fakultas.set("FE", "Fakultas Ekonomi");
  Fakultas.set("FISIP", "Fakultas Ilmu Sosial dan Politik");
  Fakultas.set("FT", "Fakultas Teknik");
  Fakultas.set("FTIS", "Fakultas Teknologi Informasi dan Sains");

  return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi ${programStudy.get(
    kodeProgram
  )} pada ${Fakultas.get(kodeFakultas)} sejak tahun ${tahun}.`; // TODO: replace this
}

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
  console.log(process_argv());
}

module.exports = studentStatus;
