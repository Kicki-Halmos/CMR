import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { CustomersContext } from "../Contexts/CustomersContext";
import { getData } from "../GetData";
import { ButtonStyle } from "../Styles/ButtonStyled";
import { FormStyle } from "../Styles/FormsStyled";

export default function PageGenerator({
  setUrl,
  method,
  whereto,
  btnLabel,
  list,
  login,
  id,
}) {
  const [formData, setFormData] = useState({
  });
  const history = useHistory();
  const { customerList, setCustomerList } = useContext(CustomersContext);
  const { setUserInfo } = useContext(CustomersContext);
  const [detailIndex, setDetailIndex] = useState("");

  function handleOnChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  }

  function getMe() {
    const url = "https://frebi.willandskill.eu/api/v1/me/";
    getData("", url).then((data) => setUserInfo(data));
  }

    function getCustomerList() {
   const url = "https://frebi.willandskill.eu/api/v1/customers/";
    getData("", url).then((data) => setCustomerList(data.results));
  }

  function getToken(e) {
    e.preventDefault();

    getData({ setUrl }.setUrl, "", "", { method }.method, formData).then(
      (data) => {
        localStorage.setItem("myToken", data.token);
        getMe();
        getCustomerList();
        history.push(`${whereto}`);
      }
    );
  }

  function handleOnSubmit(e) {
    e.preventDefault();

    const vat = "vatNr";
    let check = /^SE[0-9]{10}$/.test(formData[vat]);

    if (check) {
      getData("", "", { setUrl }.setUrl, { method }.method, formData).then(
        (data) => {
          customerList.splice(detailIndex,1, data)
          console.log(customerList);
          history.push(`${whereto}`);
        }
      );
    } else {
      alert("At VAT Number you need to fill out SE followed by 10 digits");
    }
  }

  function getCustomer() {
    const customer =
      customerList &&
      customerList.filter((item, index) => {
        if (item.id == id) {
          return item;
        }
      });

    customerList && setFormData(customer[0]);
    const customerIndex = customerList.findIndex(x => x.id === customer[0].id)
    setDetailIndex(customerIndex)
  }

  useEffect(() => {
    if (id) {
      getCustomer();
    }
  },[]);

  function renderInput(name, label, type, value, key) {
    return (
      <div className="form-group">
        <label htmlFor={key}>{label}</label>
        <input
          className="form-control shadow-none"
          key={key}
          id={key}
          type={type || "text"}
          name={name}
          value={formData[name] || value}
          required
          onChange={handleOnChange}
        />
      </div>
    );
  }

  return (
    <div className="mx-auto m-5 p-5" style={{ width: "30rem" }}>
      <FormStyle onSubmit={login ? getToken : handleOnSubmit}>
        {list.map((item, index) => {
          let name = item[0];
          let label = item[1];
          let type = item[2];
          let value = item[3];
          let key = item.id || index;

          return renderInput(name, label, type, value, key);
        })}

        <ButtonStyle className="btn" type="submit">
          {btnLabel}
        </ButtonStyle>
      </FormStyle>
    </div>
  );
}
