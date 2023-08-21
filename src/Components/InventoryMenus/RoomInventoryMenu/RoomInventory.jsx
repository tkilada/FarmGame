import React from "react";
import { useSelector } from "react-redux";
import { Container } from "reactstrap";
import "./RoomInventoryStyle.css";

function RoomInventory({ RoomInventoryData }) {
  // const Room = useSelector((state)=> state.Room.FarmHouseRoom)
  // console.log(RoomInventoryData,"here")

  return (
    <Container className="RoomInventoryContainer">
      
        <h3>{RoomInventoryData.description} Inventory</h3>
        <div className="RoomitemLabel" id="salt">
          Salt:{RoomInventoryData.inventory.salt.length}
        </div>
        <div className="RoomitemLabel" id="ryeSeeds">
          RyeSeeds:{RoomInventoryData.inventory.ryeSeeds.length}
        </div>
        <div className="RoomitemLabel" id="barleySeeds">
          BarleySeeds:{RoomInventoryData.inventory.barleySeeds.length}
        </div>
        <div className="RoomitemLabel" id="grain">
          Grain:{RoomInventoryData.inventory.grain.length}
        </div>
      
    </Container>
  );
}

export default RoomInventory;
