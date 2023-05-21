function process_argv() {
  const { argv } = process;
  const result = studentData(argv[2], argv[3]);

  return result;
}

function studentData(name, studentId) {
  //   let kode = [21, 22, 23, 31, 32, 33, 41, 42, 51, 52];
  let result = {
    id: studentId,
    name: name,
    prody: "",
    faculty: "",
    thesisLecturer: "",
  };
  let facultyList = [
    ["Fakultas Ekonomi", { 21: "Ekonomi" }],
    ["Fakultas Ekonomi", { 22: "Manajemen" }],
    ["Fakultas Ekonomi", { 23: "Akuntansi" }],
    ["Fakultas Ilmu Sosial dan Politik", { 31: "Administrasi Publik" }],
    ["Fakultas Ilmu Sosial dan Politik", { 32: "Administrasi Bisnis" }],
    ["Fakultas Ilmu Sosial dan Politik", { 33: "Hubungan Internasional" }],
    ["Fakultas Teknik", { 41: "Teknik Sipil" }],
    ["Fakultas Teknik", { 42: "Arsitektur" }],
    ["Fakultas Teknologi Informasi dan Sains", { 51: "Matematika" }],
    ["Fakultas Teknologi Informasi dan Sains", { 52: "Fisika" }],
    ["Fakultas Teknologi Informasi dan Sains", { 53: "Informatika" }],
  ];
  let check = false;
  facultyList.forEach((value) => {
    if (`${studentId.slice(4, 6)}` in value[1]) {
      result.prody = value[1][studentId.slice(4, 6)];
      result.faculty = value[0];
      check = true;
    }
  });
  if (!check) {
    return "Invalid Student's ID";
  }
  result.thesisLecturer = getLecturer(result.prody);
  return result; // TODO: replace this
}

function getLecturer(prody) {
  const lecturerList = [
    ["Dr. Ulbert Silalahi, Drs., MA.", "Administrasi Publik"],
    ["Prof. Dr. Martinus Yuwana Marjuka, M.Si.", "Ekonomi"],
    ["Dott. Thomas Anung Basuki, ST., MKom.", "Informatika"],
    ["Dr. Cecilia Lauw Giok Swan, Ir., M.T.", "Teknik Sipil"],
    ["Catharina Tan Lian Soei,Dra.,MM.", "Manajemen"],
    ["Aldyfra Luhulima Lukman, S.T., M.T., Ph.D.", "Arsitektur"],
    ["Sapta Dwikardana, Drs., M.Si., Ph.D.", "Hubungan Internasional"],
    ["Agus, S.Sos., BAC., MBA., M.Phil", "Administrasi Bisnis"],
    ["Dr. Julius Dharma Lesmono, SSi., SE., MT., MSc.", "Matematika"],
    ["Liem Chin, SSi., MSi.", "Fisika"],
    ["Dr. Elizabeth Tiur Manurung, M.Si.,Ak., CA., CIRR.", "Akuntansi"],
  ];
  let result = lecturerList.filter((info) => {
    if (info[1] === prody) {
      return info;
    }
  });
  return result.pop().shift(); // TODO: replace this
}
// console.log(studentData("Maulana Fajar Ibrahim", "2022220004"));
// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
  console.log(process_argv());
}

module.exports = {
  studentData,
  getLecturer,
};
