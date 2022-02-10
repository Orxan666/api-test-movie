import React, { useState } from "react";
import Select from 'react-select'
function Multipleddl() {
  var Countryname = [
    {
      value: 1,
      label: "India",
    },
    {
      value: 2,
      label: "USA",
    },
    {
      value: 3,
      label: "Nepal",
    },
    {
      value: 4,
      label: "Japan",
    },
    {
        value:5,
        label:"Newzealand"
    },
  ];
  var [Displayvalue,getvalue]=useState()
  var Ddlhandle=(e)=>{
      getvalue(Array.isArray(e)?e.map(x=>x.label):[]);

  }
  return <div>
      <Select isMulti options={Countryname} onChange={Ddlhandle}></Select>
      <b>The selected Country Names: </b> <h1 style={{color:"red"}}>{Displayvalue}</h1>
  </div>;
}

export default Multipleddl;
