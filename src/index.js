
import { createRoot } from "react-dom/client";
import { TemTemCard } from "./components/TemTemCard";
import reportWebVitals from "./reportWebVitals";
import styled from "styled-components";
import "./index.css"





//test
const Container = styled.div`
  height: 900px;
  width: 95vw;
  margin: auto;
  
 
`;

const root = createRoot(document.getElementById("root"));

root.render(
  <Container>
    <TemTemCard />
  </Container>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 