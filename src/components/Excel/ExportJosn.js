import React, { useEffect, useState } from 'react';
import exportFromJSON from 'export-from-json';
import {useEffectDespachos} from '../../hooks/useFetchDespachos';

//import './style.css';

const data = [];
const fileName = 'json export ';
const exportType = 'xls';

export  const JsonToExcel=()=> {
  const [json, setJson] = useState([]);
  const [page, setpage] = useState(1);
  const [pending, setpending] = useState(true);

  const {data:data}= useEffectDespachos(page,setpending);
  const exportToExcel =  () => {
    console.log('data',data);
    exportFromJSON({ data, fileName, exportType });
  };

  const downloadFile = () => {
    fetch('https://7209-49-207-201-49.in.ngrok.io/export-confirmed-slot-data/')
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => setJson(json));
  }, []);

  console.log(json);

  return (
    <div>
      <h1>Descarga de archivo Excel!</h1>
    
      <p>Start editing to see some magic happen :)</p>
      <button onClick={exportToExcel}>export data</button>
      {/* <button onClick={downloadFile}>download</button> */}
      <a href="https://7209-49-207-201-49.in.ngrok.io/export-confirmed-slot-data/">
        Download
      </a>
    </div>
  );
}