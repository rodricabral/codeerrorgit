import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import React, { useState, useEffect } from "react";

function abmClientes() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([
      {
        id: "001",
        nombre: "Tomas",
        cuit: "9082547"
      },
      {
        id: "002",
        nombre: "Alberto",
        cuit: "1435346"
      },
      {
        id: "003",
        nombre: "Mirtha",
        cuit: "1233212"
      }
    ]);
  }, []);

  return (
    <div className="card">
      <DataTable value={products} tableStyle={{ minWidth: "50rem" }}>
        <Column field="id" header="ID:"></Column>
        <Column field="nombre" header="Nombre"></Column>
        <Column field="cuit" header="Cuit"></Column>
      </DataTable>
    </div>
  );
}

export default abmClientes;
