import React from "react";
import './App.css';
import NavBar from "./components/NavBar";
import Table from "./components/Table";
import ToTopButton from "./components/ToTopButton.js";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <ToTopButton />
      
      <div className="three-columns-container"> 
        <div className="first-column">
          <div>
            <h1 className="text-3xl font-semibold mt-35">
              DASHBOARD
            </h1>
          </div>
          <div className="text-box">
            <h1 className="text-xl font-bold mt-0">
              Portfolios
            </h1>
            <h2 className="text-lg font-semibold mt-4">Technology Portfolio</h2>
            <p className="text-base mt-2">Investment Value: $10,000</p>
            <p className="text-base">Growth Rate: 15%</p>
            
            <h2 className="text-lg font-semibold mt-4">Finance Portfolio</h2>
            <p className="text-base mt-2">Investment Value: $7,500</p>
            <p className="text-base">Growth Rate: 10%</p>
            <button className="custom-button text-white font-bold py-2 px-4 rounded-full" style={{ marginLeft: '60px', marginTop: '70px' }}>
              Invest
            </button>
          </div>

          
        </div>

        <div className="mid-column">
          <h1 className="text-3xl font-semibold mt-45 ml-20">
            PORTFOLIO BREAKDOWN
          </h1>
          <Table />
        </div>

        <div className="end-column">
          <h1 className="text-3xl font-semibold mt-35">
            VISUALIZATION
          </h1>
          <img src={process.env.PUBLIC_URL + '/piegraph.png'} alt="Pie Graph" className="w-30 h-30"  style={{ marginRight: '20px', marginTop: '90px' }}/>
        </div>
      </div>
      
      {/* Hero Section */}
      <div className="fintech-color text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">
                  Past Performance
              </h1>
              <p className="text-lg mb-8">
                  Try our Robo Advisor which analyzes market stock data and factors in your individual risk preference. 
              </p>
              <button
                  //onClick={() => navigate("/donate")}
                  className="bg-white text-blue-500 py-2 px-6 rounded-full font-semibold hover:bg-blue-700 hover:text-white transition duration-300"
              >
                  Take the risk questionaire. 
              </button>
          </div>
      </div>
      
    </Router>
  );
}

export default App;
