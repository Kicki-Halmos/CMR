import React from "react";

export async function getData(loginUrl, getUrl, setUrl, method, formData) {
  
 const token = localStorage.getItem("myToken")
console.log(loginUrl)
 if(loginUrl) {
  const data = await fetch(`${loginUrl}`, {
    method: `${method}`,
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  })
  /*.then(res => res.json())*/
    const jsonData = await data.json()
    return jsonData
} 

   else if (getUrl) {
    const data = await fetch(`${getUrl}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    const jsonData = await data.json()
    return jsonData
    
  } else if (setUrl) {
    const data = await fetch(`${setUrl}`, {
      method: `${method}`,
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    const jsonData = await data.json()
    return jsonData
    
  }
}
