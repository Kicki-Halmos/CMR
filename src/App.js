import React, {useState, useEffect} from 'react'
import {Switch,Route} from 'react-router-dom'
import NavLinkItem from './Components/NavLinkItem';
import { CustomersContext } from './Contexts/CustomersContext';
import CustomerCreatePage from './Pages/CustomerCreatePage';
import CustomerDetailPage from './Pages/CustomerDetailPage';
import CustomerListPage from './Pages/CustomerListPage';
import CustomerUpdatePage from './Pages/CustomerUpdatePage';
import Inlogpage from './Pages/Inlogpage';
import { ContainerStyle, NavStyle} from './Styles/HomeStyled'
import {getData} from './GetData'

export default function App() {

  const [customerList, setCustomerList] = useState(null);
  const [userInfo, setUserInfo] = useState({});
 

  const contextValue = {
    customerList, setCustomerList,
    userInfo, setUserInfo,
    
  }

  useEffect(() => {
    
    getData("", "https://frebi.willandskill.eu/api/v1/customers/").then(data => setCustomerList(data.results))
    getData("", "https://frebi.willandskill.eu/api/v1/me/").then(data => setUserInfo(data))

  }, [] )
   
 

  return (
    <ContainerStyle className="container">
          <NavStyle className="navbar navbar-expand-xs rounded p-2 d-flex flex-row justify-content-start">
          <div className="nav-item m-4">
          <NavLinkItem 
          className="nav-link"
          to="/customers/"
          text ="Home"
          /> 
          </div>
        
        
          <div className="nav-item m-4">
          <NavLinkItem 
          className="nav-link"
          to="/customers/create"
          text ="Add customer"
          />
          </div>

          <div className="nav-item m-4 ml-auto">
          <NavLinkItem 
          className="nav-link"
          to="/login"
          text ="Log out"
          />
          </div>
        </NavStyle>
      <CustomersContext.Provider value={contextValue}>
      <Switch>
      <Route path = "/customers/create">
          <CustomerCreatePage/>
        </Route>
        <Route path = "/login">
          <Inlogpage/>
        </Route>
        <Route path = "/customers/:id/edit" component = {CustomerUpdatePage}/>
        <Route exact path = "/customers/:id" component = {CustomerDetailPage} />
       
        <Route path = "/customers">
          <CustomerListPage/>
        </Route>
        
      </Switch>
      </CustomersContext.Provider>
    
   
    </ContainerStyle>
  )
}

