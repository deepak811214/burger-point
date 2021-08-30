import React, { useState, useEffect } from "react";
import { pricingService } from "../services/pricingService";

function Burger() {
  const [state, setState] = useState({
    personName: "",
    bun: 2,
    slice: 1,
    cutlet: 1,
    salad: false,
    total: 13
  });

  const [value, setValue] = useState();
  const [database, setData] = useState([]);
  let [filterList, setList] = useState([])
  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "salad") {
      value = !state.salad;
    }
    setState((state) => {
      return {
        ...state,
        [name]: value,
      };
    });
  };

  const calculateTotal = () => {
    let total = pricingService(state);
    setState((state) => {
      return {
        ...state,
        total: total,
      };
    });
  }

  const handleOrder = () => {
    database.push(state);
    console.log(2222, database)
  }

  const handleFilter = (e) => {
    setValue(e.target.value)
    filterList = database.filter((item, index) => {
      return item.personName.toLowerCase().includes(value.toLowerCase())
    })
    setList(filterList)
    console.log(111, filterList);
  }

  return (
    <div className="container">
      <h1>Burger Point</h1>
      <div className="search">
        <input placeholder="search" value={value} onChange={(e) => setValue(e.target.value)}></input>
        <button onClick={handleFilter}>Filter</button>
        {filterList.length > 0 && filterList.map(item => {
          return (<div>{item.personName}----{item.total}Rs</div>)
        })}
      </div>
      <div className="order" onChange={handleChange}>
        <div>Name</div>
        <input type="text" name="personName" value={state.name}></input>
        <div className="ingredient">
          <div>
            <div>Bun</div>
            <input
              type="value"
              value={state.bun}
              readOnly
              style={{ background: "#eee" }}
              name="bun"
            ></input>
          </div>
          <div>
            <div>Cheese Slices</div>
            <input
              type="number"
              value={state.slice}
              name="slice"
            ></input>
          </div>
          <div>
            <div>Cutlet</div>
            <input
              type="number"
              value={state.cutlet}
              name="cutlet"
            ></input>
          </div>
          <div>
            <div>Salad</div>
            <input
              type="checkbox"
              checked={state.salad}
              name="salad"
            ></input>
          </div>
        </div>
        <div className="total">
          <button onClick={calculateTotal}>Calculate Total</button>
          Total: {state.total}
        </div>
        <button onClick={handleOrder}>Order</button>
      </div>
      {JSON.stringify(state)}
    </div>
  );
}

export default Burger;
