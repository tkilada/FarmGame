import React from "react";
import ShopsStyle from "./ShopsStyle.css";
import { Container } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import RoomInventory from "../../../Components/InventoryMenus/RoomInventoryMenu/RoomInventory";
import ActionBox from "../../../Components/Actions/ActionBox/ActionBox";
import PlayerMenu from "../../../Components/InventoryMenus/PlayerMenu/PlayerMenu";
import BuySellButton from "../../../Components/Actions/BuyandSell/BuySellButton";
import MoveButtons from "../../../Components/Actions/ActionBox/Actions/MoveButton/MoveButtons";

function Shops() {
  const ShopsRoom = useSelector((state) => state.Room.ShopsRoom);
  // console.log(ShopsRoom)
  return (
    <Container className="ShopContainer">
      <div className="ShopInventory">
        <div className="MarketGold">
          <h2> Shop Gold:</h2>
          <h2>{ShopsRoom.gold}</h2>
        </div>
        <RoomInventory RoomInventoryData={ShopsRoom}></RoomInventory>
      </div>
      <div className="ShopActionBox">
        <a className="ShopMoveButtons shopBox"> 
          <MoveButtons RoomData={ShopsRoom}></MoveButtons>
        </a>
        <a className="BuySell">
          <BuySellButton></BuySellButton>
        </a>
      </div>
      
    </Container>
  );
}

export default Shops;
