import { useState, useEffect } from 'react';

const useCurrencyinfo=(currency)=>{
    const [data,setData]=useState({});

    //useEffect hook for calling API and return data from api
    useEffect(()=>{
      fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
      .then((res)=>res.json())
      .then((res)=>setData(res[currency]));
      console.log(data);
    },[currency])

    
    return data;
}

export default useCurrencyinfo;
