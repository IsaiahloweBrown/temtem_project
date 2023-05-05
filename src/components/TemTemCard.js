import styled from "styled-components";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";

// some style for containers, card
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
  height: 701px;
  margin-top: 50px;
  color: #541f4b;
`;

const Card = styled.div`
  background: #fbd25a;
  cursor: pointer;
  width: 350px;
  height: 350px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 15px;
  gap: 10px;
  box-shadow: 4px 2px 2px black;
  border-top-left-radius: 2px;
  border-top-right-radius: 100px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 35px;
`;

const InputContainer = styled.div`
  height: 50px;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 25px;

  & input {
    border-radius: 10px;
    padding: 10px;
    width: 300px;
  }
`;

const Picture = styled.img`
  max-width: 150px;
  max-height: 150px;
`;

export const TemTemCard = () => {
  //renders null and selects the state of clicked brewery

  const [temtems, setTemTem] = useState([]);
  const [selectedTemTem, setSelectedTemTem] = useState(null);

  const [searchingFor, setSearchingFor] = useState("");
  const handleSearch = (e) => setSearchingFor(e.target.value);

  const filiteredTems = temtems.filter((temtem) =>
    temtem.name.toLowerCase().includes(searchingFor.toLowerCase())
  );

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://temtem-api.mael.tech/api/temtems`
        );
        const data = await response.json();
        console.log(data);

        setTemTem(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <InputContainer>
        <input
          type="text"
          placeholder="Search TemTem by name..."
          value={searchingFor}
          onChange={handleSearch}
          className="searchbar border-solid input input-secondary w-full max-w-xs bg-white text-pink-900"
          id="searchArea"
        />
      </InputContainer>
      <Container>
        {filiteredTems.map((temtem) => (
          <Card
            className=" font-link card w-96 bg-primary text-primary-content hover:outline outline-white outline-4"
            key={temtem.number}
            onClick={() => setSelectedTemTem(temtem)}
          >
            <div className="card-body">
              <Picture src={temtem.wikiRenderStaticUrl} className="w-96 h-96" />
              <h2 className="card-title text-2xl">{temtem.name}</h2>
              <p className="text-xl">#{temtem.number} </p>
              <p className="text-xl">{temtem.types[0]}</p>
              <p className="text-xl">{temtem.types[1]}</p>
            </div>
          </Card>
        ))}
        {selectedTemTem && (
          <Modal
            setSelectedTemTem={setSelectedTemTem}
            selectedTemTem={selectedTemTem}
          />
        )}
      </Container>
    </>
  );
};
