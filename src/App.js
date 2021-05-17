import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  const [state, setstate] = useState([]);
  useEffect(() => {
    updateList()
  }, []);
  const updateList = () => {
    let config = {
      headers: {
        ApiKij: "12nfhfkjaha983ZKsakjh12989S11",
      },
    };

    axios
      .get(
        `https://weddingonline-test.azurewebsites.net/api/wedding/ŚlubMoniki_i_kacpra`,
        config
      )
      .then((response) => {
        console.log(response);
        setstate(response.data.guests);
      })
      .catch((error) => {
        console.log('error');
      });
  };
  return (
    <div>
    <table>
    
   
    {state.map((iteam) => (
      <tr>
      <td>{iteam.firstName}</td> <td>{iteam.lastName}</td> <td>{iteam.decisionStatus == 3 ? 'Potwierdzony' : null} {iteam.decisionStatus == 2 ? 'Może' : null} {iteam.decisionStatus == 1 ? 'Nie będe' : null} {iteam.decisionStatus == 0 ? 'Nie zaznaczył' : null}</td>
      </tr>
    ))}
    </table>
    </div>
  );
}

export default App;
