import { useEffect, useState } from "react";
import "./App.css";
import {Route, Routes } from "react-router-dom";
import RoomRoutes from "./Rooms/RoomRoutes";

import Lobby from "./Rooms/SpecificRooms/Lobby/Lobby";
import FarmHouse from "./Rooms/SpecificRooms/FarmHouse/FarmHouse";
import Field from "./Rooms/SpecificRooms/Field/Field";
import Paris from "./Rooms/SpecificRooms/Paris/Paris";
import Shops from "./Rooms/SpecificRooms/Shops/Shops";
import Tavern from "./Rooms/SpecificRooms/Tavern/Tavern";
import Palace from "./Rooms/SpecificRooms/Palace/Palace";
import GameBox from "./Components/Game/Game";

function App() {
  const [sessionToken, setSessionToken] = useState("");

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Lobby updateToken={updateToken} />}></Route>
          <Route path="/Game" element = {<GameBox></GameBox>}>
            <Route
              path="FarmHouse"
              element={
                <FarmHouse token={sessionToken} updateToken={updateToken} />
              }
            ></Route>
            <Route
              path="Field"
              element={<Field token={sessionToken} updateToken={updateToken} />}
            ></Route>
            <Route
              path="Paris"
              element={<Paris token={sessionToken} updateToken={updateToken} />}
            ></Route>
            <Route path="Shops" element={<Shops />}></Route>
            <Route
              path="Tavern"
              element={<Tavern token={sessionToken} updateToken={updateToken} />}
            ></Route>
            <Route
              path="Palace"
              element={<Palace token={sessionToken} updateToken={updateToken} />}
            ></Route>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
