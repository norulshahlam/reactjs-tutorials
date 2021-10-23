import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [queryCpObj, setQueryCpObj] = useState({
    location: "",
    availability: "",
    queryLocation: "",
  });

  const [cpResult, setCpResult] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("start", queryCpObj.queryLocation);
    setLoading(true);

    const requestLocation = axios.get(
      `https://data.gov.sg/api/action/datastore_search?resource_id=139a3035-e624-4f56-b63f-89ae28d4ae4c&q=${queryCpObj.queryLocation}`
    );
    const requestAvailability = axios.get(
      `https://api.data.gov.sg/v1/transport/carpark-availability`
    );

    axios.all([requestLocation, requestAvailability]).then(
      axios.spread((...res) => {
        setQueryCpObj({
          ...queryCpObj,
          location: res[0].data.result.records,
          availability: res[1].data.items[0].carpark_data,
        });
        setLoading(false);

        console.log(res[0].data.result.records[0].car_park_no);
        console.log(res[1].data.items[0].carpark_data[0].carpark_number);

        // console.log("location", queryCpObj.location);
      })
    );
  }, [queryCpObj.queryLocation]);

  useEffect(() => {
    console.log("use efect array matching");
    const result = [];
    for (const item of queryCpObj.location) {
      for (const element of queryCpObj.availability) {
        if (item.car_park_no === element.carpark_number) {
          console.log("matched!");
          result.push({
            address: item.address,
            availableLots: element.carpark_info[0].lots_available,
            totalLots: element.carpark_info[0].total_lots,
            nonSeasonLot: item.short_term_parking,
            freeParking: item.free_parking,
            cpId: item.car_park_no,
          });
        }
      }
    }
    setCpResult(result);
  }, [loading]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQueryCpObj({
      location: "",
      availability: "",
      queryLocation: e.target.query.value,
    });
  };

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      {loading && <div>FETCHING.........</div>}
      <main>
        <form onSubmit={handleSubmit}>
          <input type="text" name="query" />
          <input type="submit" />
        </form>
        <section>
          <h2>Showing results for {queryCpObj.queryLocation}</h2>

          <p>Available lots: </p>
          <p>Total lots:</p>
          <p>Free parking:</p>

          {cpResult.map((item) => (
            <div>{item.address}</div>
          ))}
        </section>
        <article>
          <div>Traffic Cam</div>
          <div>ERP rates</div>
        </article>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
