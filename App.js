import React from "react";

import "./App.css";
import CreateOrder from "./CreateOrder";

function App() {
  const [getPro, setPro] = React.useState([]);
  const [getCP, setCP] = React.useState("");
  const [getSize, setSize] = React.useState("");
  //console.log(getPro);
  const catTotal = () => {
    let sum = 0;
    getPro.map(d => {
      return sum += d.price;
    });
    return sum;
  };
  return (
    <div className="App">
      <div>
        <label for="cp">Color print:</label>
        <select
          name="cp"
          id="cp"
          onChange={e => {
            setCP(e.target.value);
          }}
        >
          <option value="">Select</option>
          <option value="Red">Red</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
        </select>

        <label for="pb">Paint brush:</label>
        <select
          name="pb"
          id="pb"
          onChange={e => {
            setSize(e.target.value);
          }}
        >
          <option value="">Select</option>
          <option value="Small">Small</option>
          <option value="medium">medium</option>
          <option value="large">large</option>
        </select>
      </div>
      {
        <React.Fragment>
          {getPro.map((co, i) => {
            return (
              <CreateOrder
                products={getPro}
                key={i}
                order={i + 1}
                getCP={getCP}
                getSize={getSize}
                addMore={d => {
                  setPro([
                    ...getPro,
                    {
                      ...d,
                      p1: getCP,
                      p2: getSize,
                      price: (getCP ? 35 : 0) + (getSize ? 10 : 0)
                    }
                  ]);
                }}
              />
            );
          })}
          {getPro.length === 0 && (
            <CreateOrder
              products={getPro}
              order={1}
              getCP={getCP}
              getSize={getSize}
              addMore={d => {
                setPro([
                  ...getPro,
                  {
                    ...d,
                    p1: getCP,
                    p2: getSize,
                    price: (getCP ? 35 : 0) + (getSize ? 10 : 0)
                  }
                ]);
              }}
            />
          )}
        </React.Fragment>
      }
      <br />
      <label>Total:{catTotal()}</label>
    </div>
  );
}

export default App