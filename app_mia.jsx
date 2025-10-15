
import { useState } from 'react';
import './App.css'
import Abarajame from './assets/Abarajame.jpg'
import Jeremy from './assets/Jeremy.jpg'
import Killing from './assets/Killing-me-softly.jpg'
import Selena from './assets/chico.jpg'
import Caifanes from './assets/celula.jpg'
import MGM from './assets/Electric-feel.jpg'

const rootContainer = {
  backgroundColor: 'dodgerblue',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  color: 'white',
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  fontFamily: 'Arial, sans-serif',
};

const MainHeader = () => {
  return (
    <header>
      <h1>canciones para educar a la nueva generaci&oacute;n</h1>
    </header>

  )
};
const styleItemNavBar = {
  padding: '8px',
  marginRight: '16px',
  borderRadius: '8px',
  backgroundColor: 'white',
  boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
  cursor: 'pointer',
  transition: 'all 0.3s',
  margin: '5px',
  color: 'black',
  justifyContent: 'center',
  alignItems: 'center',
};

const StyleNavBar = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  margin: '16px',
  backgroundColor: 'darkblue',
  listStyleType: 'none',
  borderRadius: '8px',
};

const NavBar = (props) => {
  return (
    <nav>
      <ul style={StyleNavBar}>
        {props.Mydata.map((Mdata) => (
          <li key={Mdata.id}
            style={styleItemNavBar}
            onClick={() => props.fncClick(Mdata)}>
            <img
              src={Mdata.imageAsset}
              alt={Mdata.title}
              style={{ width: "30px", height: "30px", marginRight: "8px", verticalAlign: "middle", borderRadius: "5px" }}
            />
            {Mdata.title}
          </li>
        ))}
      </ul>
    </nav>
  );
}
const MainContent = (props) => {
  return (
    <main>
      <section>
        <h2>{props.data.title}</h2>
        <p>{props.data.artist}</p>
      </section>
    </main>
  );
}
const AsideContent = (props) => {
  return (
    <aside>
      <img src={props.data ? props.data.imageAsset : ''}
        alt={props.data ? props.data.title : ''}
        style={{ width: "200px", height: "200px", margin: "10px", borderRadius: "10px" }} />
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto a autem inventore, illum minus odit quas enim voluptas corporis sequi veritatis laborum ipsam possimus quo quasi. Reprehenderit beatae vitae cum.</p>
    </aside>
  );
}
const FooterContent = () => {
  return (
    <footer>
      <p><u>Copyright 2025</u></p>
    </footer>
  )
};

function App() {
  const [Mdata, setMdata] = useState(0)
  const handleClick = (data) => {
    setMdata(data);
    console.log("Cancion seleccionada: ", data);
  }
  const Mydata = [
    {
      id: 1,
      title: "La canci&oacute;n de Aquiles",
      artist: "Madeleine Miller",
      imageAsset: AchillesSong,
    },
    {
      id: 2,
      title: "Abarajame la bañera",
      artist: "Illya Kuryaki & The Valderramas",
      imageAsset: Abarajame,
    },
    {
      id: 3,
      title: "Killing me softly",
      artist: "Fugees",
      imageAsset: Killing,
    },
    {
      id: 4,
      title: "El chico del apartamento 512",
      artist: "Selena",
      imageAsset: Selena,
    },
    {
      id: 5,
      title: "La celula que explota",
      artist: "Caifanes",
      imageAsset: Caifanes,
    },
    {
      id: 6,
      title: 'Electric Feel',
      artist: 'MGMT',
      imageAsset: MGM,
    }
  ];
  return (
    <div style={rootContainer}>
      <MainHeader />
      <NavBar
        Mydata={Mydata}
        fncClick={handleClick}
      />
      <div>
        <AsideContent data={Mdata} />

        <MainContent data={Mdata} />

      </div>
      <div>
        <FooterContent />
      </div>

      <p> Hola mundo de ReactJS</p><p> Daniel Eduardo Guerrero Centeno  </p>
    </div>
  )
};

export default App
