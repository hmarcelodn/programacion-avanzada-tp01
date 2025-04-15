const fs = require("fs");
const csv = require("csv-parser");
const { Tree } = require("./tree");

const comparator = (a, b) => {
  const aKey = parseInt(a.nro_registro);
  const bKey = parseInt(b.nro_registro);
  return aKey - bKey;
};

const tree = new Tree(comparator);

function findInTree(tree, nro_registro) {
  const dummyObj = { nro_registro };
  const start = process.hrtime();
  const node = tree.findValue(dummyObj);
  const [sec, nano] = process.hrtime(start);
  const time = sec + nano / 1e9;
  return {
    found: node !== null,
    data: node?.value || null,
    time,
  };
}

// Cargar CSV
let count = 0;

fs.createReadStream("../arbolado-publico-lineal-2017-2018.csv")
  .pipe(csv({ separator: "," }))
  .on("data", (row) => {
    if (row["nro_registro"] && !isNaN(parseInt(row["nro_registro"]))) {
      tree.addValue(row);
      count++;
    } else {
      console.warn(
        `Salteando fila con registro invalido: ${row["nro_registro"]}`
      );
    }
  })
  .on("end", () => {
    console.log(`Árbol cargado con ${count} nodos.`);

    const registros = ["101", "2500000"];
    registros.forEach((nro) => {
      const result = findInTree(tree, nro);
      console.log(
        `Buscando ${nro} → ${
          result.found ? "Encontrado" : "No encontrado"
        }. Tiempo: ${result.time.toFixed(6)}s`
      );
    });

    console.log(`Altura del árbol: ${tree.height()}`);
  });
