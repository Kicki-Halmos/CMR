import React, { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { CustomersContext } from "../Contexts/CustomersContext";
import { ButtonStyle } from "../Styles/ButtonStyled";
import { DetailStyle } from "../Styles/DetailPageStyled";

export default function CustomerDetailPage(props) {
  const id = props.match.params.id;
  const url = `https://frebi.willandskill.eu/api/v1/customers/${id}/`;
  const token = localStorage.getItem("myToken");
  const history = useHistory();
  const { customerList } = useContext(CustomersContext);
  console.log(customerList)

  let customer =
    customerList &&
    customerList.filter((item, index) => {
      if (item.id == id) {
        return item;
      }
    });

  function deleteCustomer() {
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(() => {
      history.push("/customers");
    });
  }

  return (
    <DetailStyle
      className="card mx-auto m-5 p-4 row"
      style={{ width: "40rem" }}
    >
      <p>
        {" "}
        <strong>Name:</strong> {customer[0].name}
      </p>
      <p>
        <strong>Organization Number:</strong> {customer[0].organisationNr}
      </p>
      <p>
        <strong>Payment Term:</strong> {customer[0].paymentTerm}
      </p>
      <p>
        <strong>VAT Number:</strong> {customer[0].vatNr}
      </p>
      <p>
        <strong>Reference:</strong> {customer[0].reference}
      </p>
      <p>
        <strong>Phone Number:</strong> {customer[0].phoneNumber}
      </p>
      <p>
        <strong>Email:</strong> {customer[0].email}
      </p>
      <p>
        <strong>Website:</strong> {customer[0].website}
      </p>
      <div className="row p-2 ">
        <ButtonStyle className="btn  m-3" onClick={deleteCustomer}>
          Delete
        </ButtonStyle>
        <ButtonStyle className="btn  m-3">
          {" "}
          <Link to={`/customers/${id}/edit`} customerData={customer}>
            Update Customer
          </Link>
        </ButtonStyle>
        <ButtonStyle className="btn m-3">
          <Link to="/customers">Get back to customer list</Link>
        </ButtonStyle>
      </div>
    </DetailStyle>
  );
}
