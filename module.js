export class Table {
  constructor(init) {
    this.init = init;
  }

  createTableHead(data) {
    let open = "<thead class='table-dark'><tr>";
    let close = "</tr></thead>";
    data.forEach((d) => {
      open += `<th>${d}</th>`;
    });

    return open + close;
  }

  createTableBody(data) {
    let open = "<tbody>";
    let close = "</tbody>";
    data.forEach((d) => {
      open += `
          <tr>
           <td>${d[0]}</td>
           <td>${d[1]}</td>
           <td>${d[2]}</td>
           <td>${d[3]}</td>
          </tr>
          `;
    });
    return open + close;
  }

  render(element) {
    let table =
      "<table class='table table-hover'>" +
      this.createTableHead(this.init.columns) +
      this.createTableBody(this.init.data) +
      "</table>";
    element.innerHTML = table;
  }
}

// const table = new Table({
//   columns: ["No.", "Nama", "Berat Badan", "Gender"],
//   data: [
//     ["1", "Hana", "7kg", "Perempuan"],
//     ["2", "Bambang", "8kg", "Laki-laki"],
//     ["3", "Doni", "8.5kg", "Laki-laki"],
//     ["4", "Dinda", "7.5kg", "Perempuan"],
//   ],
// });

// const app = document.getElementById("app");
// table.render(app);
