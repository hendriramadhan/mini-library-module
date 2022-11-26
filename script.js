import { Table } from "./module.js";

const table = new Table({
  columns: ["No.", "Nama", "Berat Badan", "Gender"],
  data: [
    ["1", "Hana", "7kg", "Perempuan"],
    ["2", "Bambang", "8kg", "Laki-laki"],
    ["3", "Doni", "8.5kg", "Laki-laki"],
    ["4", "Dinda", "7.5kg", "Perempuan"],
    ["5", "Lisa", "8kg", "Perempuan"],
  ],
});

const app = document.getElementById("app");
table.render(app);
