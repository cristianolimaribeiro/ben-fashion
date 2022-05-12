import React,{ useState, useRef } from "react";
import Home from "./pages/Home";
import Menu from "./components/Menu/Menu";
import { GlobalStyle } from "./styles/global";


export function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  return (
    <div ref={node}>
      <GlobalStyle />
      <Home open={open} setOpen={setOpen}/>
      <Menu open={open} setOpen={setOpen}/>
    </div>
  );
}


