function splitToArr(str) {
  if (str == "") {
    return "Data not available";
  }
  if (str == undefined) {
    return "Invalid input";
  }
  let result =[]
  str.split(";").forEach((arr) => {
    arr.split("-").forEach((value)=>{
        result.push(value[0].toUpperCase()+value.slice(1))
    })
  });
  return result; // TODO: replace this
}

console.log(splitToArr("annisa;dimitri-alvin;fajar-mirza;tandry"));
console.log(
  splitToArr(
    "ganang.prakoso-ivan.tjendra-haekal.yudhistira;ridza.adhandra-ganda.sipayung;diaz.kautsar"
  )
);
console.log(splitToArr(""));
console.log(splitToArr());

module.exports = splitToArr;
