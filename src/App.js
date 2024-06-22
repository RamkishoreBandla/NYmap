import Map from "./Map";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from "react";
import { Card } from "react-bootstrap";



function App() {

  const [color,setColor] = useState("#ffff00");

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col text-center">
          <h2>New York Counties</h2>
        </div>

      </div>
      <div className="row mt-5">
        <div className="col-md-4">
          
          <Card className="p-3">
          <h3>Color</h3>
          <p> Choose a color to apply to county</p>
          <input type="color" value={color} onChange={(e)=>{setColor(e.target.value)}}/>
          </Card>
        </div>
        <div className="col-md-8">
          <Map color={color} />
        </div>
      </div>
    </div>
  );
}

export default App;
