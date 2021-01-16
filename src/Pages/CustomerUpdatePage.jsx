import React from "react";
import PageGenerator from "../Components/PageGenerator";
import { createUpdateForm } from "../Data/CreateUpdateForm";

export default function CustomerUpdatePage(props) {
  const id = props.match.params.id;

  return (
    <div>
      <PageGenerator
        setUrl={`https://frebi.willandskill.eu/api/v1/customers/${id}/`}
        id={id}
        method="PUT"
        whereto={`/customers/${id}`}
        btnLabel="Update customer"
        list={createUpdateForm}
      />
    </div>
  );
}
