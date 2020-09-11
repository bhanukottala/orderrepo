import React from "react";

import "./App.css";

function CreateOrder(props) {
  const [getfn, setFn] = React.useState("");
  const [getUrg, setUrg] = React.useState("");
  if (document.getElementById("p1")) {
    document.getElementById("p1").disabled = true;
    document.getElementById("p2").disabled = true;
  }
  console.log(props);
  return (
    <div className="App">
      {/* (Math.random() * 100).toFixed(0) */}
      <label>Order number: {props.order}</label> <br />
      <label for="lname">First name:</label>
      <input
        type="text"
        id="lname"
        name="lname"
        value={getfn}
        onChange={e => {
          setFn(e.target.value);
        }}
      />
      <br />
      <label for="Urgency">Urgency:</label>
      <select
        name="Urgency"
        id="Urgency"
        onChange={e => {
          setUrg(e.target.value);
        }}
      >
        <option value="not-urgent">not-urgent</option>
        <option value="Urgent">Urgent</option>
      </select>
      <br />
      <label for="p1">Product 1:</label>
      <select name="p1" id="p1">
        <option value={props.getCP}>{props.getCP}</option>
      </select>
      <label for="p2">Product 2:</label>
      <select name="p2" id="p2">
        <option value={props.getSize}>{props.getSize}</option>
      </select>
      <br />
      {props.products.length === props.order || props.products.length === 0 ? (
        <React.Fragment>
          <button
            type="button"
            onClick={() => {
              props.addMore({ getUrg: getUrg, getfn: getfn });
            }}
          >
            Add more
          </button>
          <button
            type="button"
            onClick={() => {
              sessionStorage.setItem(
                "products",
                JSON.stringify(props.products)
              );
            }}
          >
            Submit{" "}
          </button>
        </React.Fragment>
      ) : (
        ""
      )}
    </div>
  );
}

export default CreateOrder