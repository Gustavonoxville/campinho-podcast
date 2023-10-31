import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import campoImage from './campo.jpg';

import capasso from './jogadores/capasso.png';
import bambu from './jogadores/bambu.png';
import barros from './jogadores/barros.png';
import cocao from './jogadores/cocao.png';
import erick from './jogadores/erick.png';
import figueiredo from './jogadores/figueiredo.png';
import gabrieldias from './jogadores/gabrieldias.png';
import halls from './jogadores/halls.png';
import ivan from './jogadores/ivan.png';
import jair from './jogadores/jair.png';
import jardim from './jogadores/jardim.png';
import jefferson from './jogadores/jefferson.png';
import leo from './jogadores/leo.png';
import maicon from './jogadores/maicon.png';
import marlongomes from './jogadores/marlongomes.png';
import medel from './jogadores/medel.png';
import orellano from './jogadores/orellano.png';
import paulinho from './jogadores/paulinho.png';
import payet from './jogadores/payet.png';
import pec from './jogadores/pec.png';
import praxedes from './jogadores/praxedes.png';
import ph from './jogadores/ph.png';
import piton from './jogadores/piton.png';
import puma from './jogadores/puma.png';
import miranda from './jogadores/miranda.png';
import rayan from './jogadores/rayan.png';
import riquelme from './jogadores/riquelme.png';
import rossi from './jogadores/rossi.png';
import sebas from './jogadores/sebas.png';
import serginho from './jogadores/serginho.png';
import texeira from './jogadores/texeira.png';
import vegetti from './jogadores/vegetti.png';
import zegabriel from './jogadores/zegabriel.png';
import zevitor from './jogadores/zevitor.png';

const containerStyle = {
  width: '920px',
  height: '600px',
  margin: '50px auto',
  position: 'relative',
};

const playerStyle = {
  width: '75px',
  height: '75px',
  borderRadius: '50%',
  position: 'absolute',
  cursor: 'move',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};

const ItemTypes = {
  PLAYER: 'player',
};

const playersList = [
  { id: 1, nome: "Jardim", imagem: jardim },
  { id: 2, nome: "Ivan", imagem: ivan},
  { id: 3, nome: "Halls", imagem: halls },
  { id: 4, nome: "Maicon", imagem: maicon},
  { id: 5, nome: "Robson", imagem: bambu },
  { id: 6, nome: "Capasso", imagem: capasso},
  { id: 7, nome: "Léo", imagem: leo },
  { id: 8, nome: "Zé Vitor", imagem: zevitor},
  { id: 9, nome: "Miranda", imagem: miranda },
  { id: 10, nome: "Puma", imagem: puma},
  { id: 11, nome: "PH", imagem: ph },
  { id: 12, nome: "Gabriel D.", imagem: gabrieldias},
  { id: 13, nome: "Jefferson", imagem: jefferson },
  { id: 14, nome: "Piton", imagem: piton},
  { id: 15, nome: "Riquelme", imagem: riquelme },
  { id: 16, nome: "Medel", imagem: medel},
  { id: 17, nome: "Mateus C.", imagem: cocao },
  { id: 18, nome: "Barros", imagem: barros},
  { id: 19, nome: "Zé Gabriel", imagem: zegabriel },
  { id: 20, nome: "Payet", imagem: payet},
  { id: 21, nome: "Praxedes", imagem: praxedes },
  { id: 22, nome: "Paulinho", imagem: paulinho},
  { id: 23, nome: "Jair", imagem: jair },
  { id: 24, nome: "Marlon", imagem: marlongomes},
  { id: 25, nome: "Rossi", imagem: rossi },
  { id: 26, nome: "Vegetti", imagem: vegetti},
  { id: 27, nome: "Sebastian", imagem: sebas},
  { id: 28, nome: "Serginho", imagem: serginho},
  { id: 29, nome: "Orellano", imagem: orellano},
  { id: 30, nome: "A. Texeira", imagem: texeira},
  { id: 31, nome: "Rayan", imagem: rayan},
  { id: 32, nome: "Erick M.", imagem: erick},
  { id: 33, nome: "Figueiredo", imagem: figueiredo},
  { id: 34, nome: "Pec", imagem: pec},

];

const playerData = () => {
  const players = playersList.map((player, index) => ({
    id: player.id,
    top: 580 + Math.floor(index / 15) * 80 + 30, // Ajuste para quebrar a linha a cada 15 jogadores
    left: (index % 15) * 60, // Ajuste para posicionar os jogadores na linha correta
    name: player.nome,
    image: player.imagem,
  }));

  return [...players];  
};

const DraggablePlayer = ({ id, left, top, name, image }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.PLAYER,
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const playerNameStyle = {
    marginTop: '0px',
    textShadow: '1 1 4px #fff',
    fontSize: '12px',
    fontWeight: 'bold',
    color: 'red', 
    textAlign: 'center',
  };

  return (
    <div ref={drag} style={{ ...playerStyle, left, top, opacity: isDragging ? 0.5 : 1 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden' }}>
          <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={playerNameStyle}>{name}</div>
      </div>
    </div>
  );
};

const Field = () => {
  const [players, setPlayers] = useState(playerData);

  const [, drop] = useDrop({
    accept: ItemTypes.PLAYER,
    drop: (item, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(delta.x);
      const top = Math.round(delta.y);

      const updatedPlayers = players.map((player) => {
        if (player.id === item.id) {
          return { ...player, left: player.left + left, top: player.top + top };
        }
        return player;
      });

      setPlayers(updatedPlayers);
    },
  });

  return (
    <div
      ref={drop}
      style={{
        ...containerStyle,
        backgroundImage: `url(${campoImage})`,
        backgroundSize: 'cover',
      }}
    >
      {players.map((player) => (
        <div key={player.id}>
          <DraggablePlayer id={player.id} left={player.left} top={player.top} name={player.name} image={player.image} />
        </div>
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Field />
      </DndProvider>
    </div>
  );
}

export default App;
