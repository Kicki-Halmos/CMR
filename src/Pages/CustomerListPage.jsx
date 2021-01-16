import React, { useContext, useEffect } from "react";
import CustomerListItem from "../Components/CustomerListItem";
import { CustomersContext } from "../Contexts/CustomersContext";
import UserItem from "../Components/UserItem";

export default function CustomerListPage() {
  const { customerList } = useContext(CustomersContext);
  const { userInfo } = useContext(CustomersContext);

  return (
    <div className="col-lg-12">
      <div className="row">
        <UserItem className="col" userData={userInfo} />
        <div className="m-3 p-2 col-4">
          <h2>Customer List</h2>
          {customerList &&
            customerList.map((item) => {
              return <CustomerListItem key={item.id} customerData={item} />;
            })}
        </div>
      </div>
    </div>
  );
}
