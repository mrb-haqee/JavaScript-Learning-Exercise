function rekapSalesByName(data, name) {
  // TODO: answer here
}

function salesReport(data, correction) {
  correction.forEach((check) => {
    let cek = false;
    data.forEach((info) => {
      if (
        check.salesName == info.salesName &&
        check.salesDate == info.salesDate
      ) {
        cek = true;
        switch (check.type) {
          case "tambah":
            info.totalSales += check.totalSales;
          case "koreksi":
            info.totalSales = check.totalSales;
        }
      }
    });
    if (!cek) {
      delete check.type;
      data.push(check);
    }
  });
  let Names = [];
  data.forEach((value) => {
    if (Names.indexOf(value.salesName) === -1) {
      Names.push(value.salesName);
    }
  });
  let result = {
    monthlySales: 0,
    totalSalesByName: { Adi: 0, Budi: 0, Poltak: 0, Sri: 0, Udin: 0 },
    bestSalesman: "",
  };
  let sales = 0;
  Names.forEach((name) => {
    data.forEach((info) => {
      if (name === info.salesName) {
        result.monthlySales += info.totalSales;
        result.totalSalesByName[name] += info.totalSales;
      }
    });
    if (sales < result.totalSalesByName[name]) {
      sales = result.totalSalesByName[name];
      result.bestSalesman = `Penjualan terbanyak dilakukan oleh ${name} dengan total penjualan dalam 1 bulan sebesar ${result.totalSalesByName[name]}`;
    }
  });
  return result;
  // TODO: answer here
}

module.exports = {
  salesReport,
};
