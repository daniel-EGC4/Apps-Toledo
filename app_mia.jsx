// useState es una suerte de super variable de React
//un metodo para Settear una variable
//un metodo para Gettear una variable
//una variable con una suerte de alcance global
//GRAN VENTAJA Es que modifica la GUI 
import { useState } from 'react';
import './App.css'
import AchillesSong from './assets/AchillesSong.jpg'
import UngloriusBastards from './assets/UngloriusBastards.jpg'
import HTTYD from './assets/HTTYD.jpg'
import PacificRim from './assets/PacificRim.jpg'
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
      <h1>Mis Favoritos</h1>
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
  if (!props.data) {
    return (
      <main>
        <section>
          <h2>Selecciona una canción</h2>
          <p>Haz clic en una de la barra superior para ver los detalles.</p>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section>
        <h2>{props.data.title}</h2>
        <p>Creador: {props.data.artist}</p>
      </section>
    </main>
  );
};
const AsideContent = (props) => {
  if (!props.data) {
    return (
      <aside>
        <p>Selecciona una canción para ver la imagen.</p>
      </aside>
    );
  }

  return (
    <aside>
      <img
        src={props.data.imageAsset}
        alt={props.data.title}
        style={{
          width: '200px',
          height: '200px',
          margin: '10px',
          borderRadius: '10px',
        }}
      />
    </aside>
  );
};
const FooterContent = () => {
  return (
    <footer>
      <p><u>Copyright 2025</u></p>
    </footer>
  )
};

function App() {
  const [Mdata, setMdata] = useState()
  const handleClick = (data) => {
    setMdata(data);
    console.log("Cancion seleccionada: ", data);
  }
  const Mydata = [
    {
      id: 1,
      title: "La canción de Aquiles",
      artist: "Madeleine Miller",
      imageAsset: AchillesSong,
    },
    {
      id: 2,
      title: "Bastardos sin gloria",
      artist: "Tarantino",
      imageAsset: UngloriusBastards,
    },
    {
      id: 3,
      title: "Como entrenar a tu dragon",
      artist: "Dean Deblois",
      imageAsset: HTTYD,
    },
    {
      id: 4,
      title: "Titanes del Pacifico",
      artist: "Guillermo del Toro",
      imageAsset: PacificRim,
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
    </div>
  )
};

export default App;
