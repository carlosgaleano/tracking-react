import React, { Component,useEffect }  from 'react';
import Form from 'react-bootstrap/Form';

export  const SelectRowTable=()=> {
  return (
    <Form.Select aria-label="" className='d-inline ml-1 rowForPAge'>
      <option >N° Line</option>
      <option value="10">10</option>
      <option value="15">15</option>
      <option value="20">20</option>
    </Form.Select>
  );
}

