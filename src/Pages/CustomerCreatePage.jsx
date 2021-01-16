import React from "react";
import PageGenerator from "../Components/PageGenerator";
import { createUpdateForm } from "../Data/CreateUpdateForm";

export default function CustomerCreatePage() {
  return (
    <div>
      <PageGenerator
        setUrl="https://frebi.willandskill.eu/api/v1/customers/"
        method="POST"
        whereto="/customers"
        btnLabel="Skapa"
        list={createUpdateForm}
      />
    </div>
  );
}
