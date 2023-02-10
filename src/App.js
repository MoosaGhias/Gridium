//download node, then react, then npx create-react-app project, then npm install axios --save, then npm install puppeteer --save

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Fragment } from 'react';
import './App.css';


const endpoint1 = "https://snapmeter.com/api/public/meters/2080448990211/readings?start=2022-08-01&end=2023-02-01";
const endpoint2 = "https://snapmeter.com/api/public/services/2080448990210/bills?start=2022-01-01&end=2023-02-01";
const corsProxy = "https://cors-anywhere.herokuapp.com/";


const App = () => {
  const [meters, setMeters] = useState([]);
  const [services, setServices] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const metersResponse = await axios.get(
          corsProxy + endpoint1,
          {
            headers: {
              Authorization: "4f981c43-bf28-404c-ba22-461b5979b359",
            },
          }
        );
        setMeters(JSON.stringify(metersResponse.data, null, 2));
        console.log(metersResponse.data.id);
        

        const servicesResponse = await axios.get(
          corsProxy + endpoint2,
          {
            headers: {
              Authorization: "4f981c43-bf28-404c-ba22-461b5979b359",
            },
          }
        );
        setServices(JSON.stringify(servicesResponse.data, null, 2));
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);



  return (
    <Fragment>
      <div className='container'>
          <div className='box-item meter-box'>
            <h2>Meters</h2>
            <p>{meters}</p>
          </div>

          <div className='box-item service-box'>
            <h2>Services</h2>
            <p>{services}</p>
          </div>

      </div>
    </Fragment>
 
  );
};

export default App;


// const App = () => {
//   const [metersData, setMetersData] = useState([]);
//   const [servicesData, setServicesData] = useState([]);
  
//   const authCode = '4f981c43-bf28-404c-ba22-461b5979b359';
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const corsProxy = "https://cors-anywhere.herokuapp.com/";
//         const metersResponse = await fetch(corsProxy + 'https://snapmeter.com/api/public/meters/2080448990211/readings?start=2022-08-01&end=2023-02-01', {
//           headers: {
//             'Authorization': authCode
//           }
//         });
//         const metersJson = await metersResponse.json();
//         setMetersData(metersJson);
//         console.log(metersData)


//         const servicesResponse = await fetch(corsProxy + 'https://snapmeter.com/api/public/services/2080448990210/bills?start=2022-01-01&end=2023-02-01', {
//           headers: {
//             'Authorization': authCode
//           }
//         });
//         const servicesJson = await servicesResponse.json();
//         setServicesData(servicesJson);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h2>Meters Data</h2>
//       {metersData.map((meter, index) => (
//         <div key={index}>
//           <p>{meter.id}: {meter.value}</p>
//         </div>
//       ))}
//       <h2>Services Data</h2>
//       {servicesData.map((service, index) => (
//         <div key={index}>
//           <p>{service.id}: {service.name}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;




