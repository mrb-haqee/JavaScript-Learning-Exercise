function studyRecommendation(mathScore, physicsScore, englishScore) {
  if (mathScore >= 80 || physicsScore >= 75 || englishScore >= 70) {
    let Rekomendation="Rekomendasi jurusan yang bisa dipilih: ";
    if (mathScore > 80 && physicsScore > 75 && englishScore > 70) {
      Rekomendation += "Teknik Informatika;";
    }
    if (physicsScore >= 75 && mathScore >= 80) {
      Rekomendation += "Teknik;";
    }
    if (englishScore >= 70 && mathScore >= 80) {
      Rekomendation += "Ekonomi;";
    }
    if (englishScore >= 70) {
      Rekomendation += "Sastra Inggris;";
    }
    if (mathScore >= 80) {
      Rekomendation += "Matematika;";
    }
    if (physicsScore >= 75) {
      Rekomendation += "Fisika;";
    }
    return Rekomendation
  }
  return "Maaf, tidak ada rekomendasi yang dapat kami berikan."; // TODO: replace this
}

console.log(studyRecommendation(0, 0, 0)); // expected Output => Maaf, tidak ada rekomendasi yang dapat kami berikan.
console.log(studyRecommendation(80, 70, 70)); // expected Output => Rekomendasi jurusan yang bisa dipilih: Ekonomi;Sastra Inggris;Matematika;
console.log(studyRecommendation(80, 75, 60)); // expected Output => Rekomendasi jurusan yang bisa dipilih: Teknik;Matematika;Fisika;
console.log(studyRecommendation(60, 85, 85)); // expected Output => Rekomendasi jurusan yang bisa dipilih: Sastra Inggris;Fisika;
console.log(studyRecommendation(80, 85, 70)); // expected Output => Rekomendasi jurusan yang bisa dipilih: Teknik;Ekonomi;Sastra Inggris;Matematika;Fisika;
console.log(studyRecommendation(85, 70, 70)); // expected Output => Rekomendasi jurusan yang bisa dipilih: Ekonomi;Sastra Inggris;Matematika;
console.log(studyRecommendation(64, 90, 85)); // expected Output => Rekomendasi jurusan yang bisa dipilih: Sastra Inggris;Fisika;
console.log(studyRecommendation(40, 85, 60)); // expected Output => Rekomendasi jurusan yang bisa dipilih: Fisika;
console.log(studyRecommendation(85, 85, 85)); // expected Output => Rekomendasi jurusan yang bisa dipilih: Teknik Informatika;Teknik;Ekonomi;Sastra Inggris;Matematika;Fisika;

module.exports = studyRecommendation;
