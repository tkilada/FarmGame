import React, { useEffect } from "react";
import { Container } from "reactstrap";
import { useSelector } from "react-redux";
import PlayerMenuStyle from "./PlayerMenuStyle.css";
import {
  PlayerNameSelector,
  PlayerSelector,
} from "../../../StoreFolder/Reducers/storePlayerState";
import { SelectTurnPoints } from "../../../StoreFolder/Reducers/Months";

function PlayerMenu() {
  const Player = useSelector(PlayerSelector);
  const Name = useSelector(PlayerNameSelector);
  const ActionPoints = useSelector(SelectTurnPoints)
  return (
    <Container className="playerInventoryContainer">
      <div className="NameBox">
        <h1 className="text">{Name}</h1>{" "}
      </div>
      <div className="gold">
        <h1 className="text">Gold:{Player.gold}</h1>
      </div>
      <div className="Inventory">
          <div className="itemLabel" id="salt">
            Salt:{Player.inventory.salt.length}
          </div>
          <div className="itemLabel" id="ryeSeeds">
            RyeSeeds:{Player.inventory.ryeSeeds.length}
          </div>
          <div className="itemLabel" id="barleySeeds">
            BarleySeeds:{Player.inventory.barleySeeds.length}
          </div>
          <div className="itemLabel" id="grain">
            Grain:{Player.inventory.grain.length}
          </div>
      </div>
        <h1 className="ActionPoints">AP:{ActionPoints}</h1>
    </Container>
  );
}

export default PlayerMenu;
