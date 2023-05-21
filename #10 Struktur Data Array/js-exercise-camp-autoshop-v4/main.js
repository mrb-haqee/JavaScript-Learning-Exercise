function convertItems(items) {
  return items.map((value) => value.split("|")); // TODO: replace this
}

function filterItems(items) {
  return items.filter((value) => {
    if (value.length > 1) {
      value[1] = Number(value[1]);
      return value;
    }
  }); // TODO: replace this
}

function generateSpareParts(items) {
  return items.map((value) => {
    let result = {};
    result["name"] = value[0];
    result["price"] = value[1];
    result["category"] = value[2];
    return result;
  }); // TODO: replace thisz
}

function itemsStatistics(items) {
  let result = {};
  items.forEach((value) => {
    if (result[value[2]] === undefined) {
      result[value[2]] = 1;
    } else {
      result[value[2]]++;
    }
  });
  return result; // TODO: replace this
}

function generateItemsData(items) {
  let result = {};
  result["spare_parts"] = generateSpareParts(filterItems(convertItems(items)));
  result.statistics = itemsStatistics(filterItems(convertItems(items)));
  return result; // TODO: replace this
}

const items = [
  "Spakbor Gordon|150000|variation",
  "Head Lamp",
  "USD KX150|8500000|bodyParts",
  "Handle Expedition|275000|variation",
  "Karet Body",
  "Body set KTM|1899950|bodyParts",
  "Jok Gordon|250000|variation",
  "Behel Bodyset Gordon",
  "CDI BRT KLX|625000|electricity",
  "Cover jok KLX|185000|variation",
];

console.log(generateSpareParts(filterItems(convertItems(items))));
console.log(itemsStatistics(filterItems(convertItems(items))));
console.log(generateItemsData(items));

module.exports = {
  convertItems,
  filterItems,
  generateSpareParts,
  itemsStatistics,
  generateItemsData,
};
