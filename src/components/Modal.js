import styled from "styled-components";
import { useCallback, useEffect } from "react";
import Charts from "./Charts";

const Root = styled.div`
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(3px);
  display: flex;
  height: 100vh;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 3;
  align-items: center;
`;

const Card = styled.div`
  
  cursor: pointer;
  width: 700px;
  height: 475px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 10px;
  background: #541f4b;
  color: #fbd25a;
  font-size: 1.2rem;
  font-weight: 500;
  border-bottom-right-radius: 2px;
  border-bottom-left-radius: 100px;
  border-top-right-radius: 10px;
  border-top-left-radius: 35px;
  gap: 10px;
  font-family: "Audiowide", cursive;
  border: 3px solid yellow;
  margin: 20%;
  padding: 5%;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const NameArea = styled.div`
  
  width: 450px;
  height: 200px;
  float: left;
`;
const StatArea = styled.div`
  width: 450px;
  height: 300px;
  margin-bottom: 5%;
  float: left;
`;
const MovesArea = styled.div`
  float: left;
  width: 450px;
  column-count: 2;
`;
const Picture = styled.img`
  float: right;
  width: 100px;
  height: 150px;

`;

const FancyUL = styled.ul`
   

`;

export const Modal = ({ setSelectedTemTem, selectedTemTem }) => {

 
  const toggleVisibility = useCallback(
    (event) => {
      const { target } = event;
      //using closest to apply to element and feed attribute from HTML element
      const shouldClosedCard = target.closest("div[data-close-card]");
      if (shouldClosedCard) setSelectedTemTem(null);
      //dependary array changes
    },
    [setSelectedTemTem]
  );

  console.log("moves")
  console.log(selectedTemTem.techniques)
  const techs = selectedTemTem.techniques
  console.log(techs)

  useEffect(() => {
    document
      .getElementById("card-area")
      .addEventListener("mouseleave", toggleVisibility);
  }, []);
  return (
    <Root id="root-area" data-close-card={true}>
      <Card id="card-area" key={setSelectedTemTem.number}>
        <NameArea>
          <Picture src={selectedTemTem.wikiRenderStaticUrl} />
          <h2>{selectedTemTem.name}</h2>
          <span className="card-title text-2xl">#{selectedTemTem.number} </span>
          <span className="text-xl">{selectedTemTem.types[0]} </span>
          <span className="text-xl">{selectedTemTem.types[1]}</span>
        </NameArea>
        <StatArea>  
          <Charts
            hp={selectedTemTem.stats.hp}
            sta={selectedTemTem.stats.sta}
            spd={selectedTemTem.stats.spd}
            atk={selectedTemTem.stats.atk}
            def={selectedTemTem.stats.def}
            spatk={selectedTemTem.stats.spatk}
            spdef={selectedTemTem.stats.spdef}
          />
        </StatArea>
        <h2>{selectedTemTem.name}'s Moves</h2>
        
        <MovesArea>
        {techs.map((temtem, index) => (
              index < 5 && (
             <FancyUL>
              <li>{temtem.name}</li>
             </FancyUL>
              )))}
        </MovesArea>
    
     
      </Card>
    </Root>
  );
};
