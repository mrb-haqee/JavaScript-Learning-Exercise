// TODO: answer here
const correctCapitalization = (par) => {
  let result = "";
  for (let i = 0, check = 0; i < par.length; i++) {
    if (i == 0) {
      result = par[i].toUpperCase();
      continue;
    }
    if (par[i] == ".") {
      check++;
      result += par[i];
      continue;
    }
    if (check == 2) {
      result += par[i].toUpperCase();
      check = 0;
      continue;
    }
    if (check == 1) {
      check++;
    }
    result += par[i];
  }
  return result;
};
module.exports = correctCapitalization;
