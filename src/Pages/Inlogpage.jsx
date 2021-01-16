import React from "react";
import PageGenerator from "../Components/PageGenerator";
import { login } from "../Data/CreateUpdateForm";
export default function Inlogpage() {
  localStorage.removeItem("myToken");
  
  return (
    <div>
      <PageGenerator
        setUrl="https://frebi.willandskill.eu/api-token-auth/"
        method="POST"
        whereto="/customers"
        btnLabel="Log In"
        list={login}
        login
      />
    </div>
  );
}
