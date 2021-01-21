import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";
import Datatable from "./datatable";

function App() {
  const [data, setdata] = useState();
  const [sdata, sets] = useState();

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await Axios.get("https://api.mocki.io/v1/973abf47");
      // ...
      console.log(response.data);
      setdata(response.data);
    }
    fetchData();
    // You can await here
    // const response = await Axios.get("https://api.mocki.io/v1/973abf47");
    // console.log(response.data);
    // setdata(response.data);
    // ...
  }, []);

  // there are two methode for search filtering

  // start one
  // function search(row) {
  //   return row.filter(
  //     (el) =>
  //       el.first_name.toLowerCase().indexOf(sdata.toLowerCase()) > -1 ||
  //       el.last_name.toLowerCase().indexOf(sdata.toLowerCase()) > -1
  //   );
  // }
  // end one

  // Start two
  function search(row) {
    const column = row[0] && Object.keys(row[0]);
    return row.filter((el) =>
      column.some(
        (columns) =>
          el[columns].toString().toLowerCase().indexOf(sdata.toLowerCase()) > -1
      )
    );
  }

  return (
    <>
      <div className="App">
        <input
          type="text"
          placeholder="...search"
          onChange={(event) => sets(event.target.value)}
        />

        <Datatable data={search(data)} />
        {/* {data
          .filter((item1) => {
            if (item1 === "") {
              return item1;
            } else if (
              item1.first_name.toLowerCase().includes(sdata.toLowerCase())
            ) {
              return item1;
            }
          })
          .map((item1) => (
            <h1 key={item1.id}>{item1.first_name}</h1>
          ))} */}
        {sdata}
      </div>
    </>
  );
}

export default App;
