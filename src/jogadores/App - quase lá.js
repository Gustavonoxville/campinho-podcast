import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import campoImage from './campo.jpg';

import capasso from './jogadores/capasso.jpg';
import medel from './jogadores/medel.jpg';

const containerStyle = {
  width: '900px',
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
  { id: 1, nome: "Capasso", imagem: capasso },
  { id: 2, nome: "Medel", imagem: medel},
   { id: 3, nome: "Capasso", imagem: capasso },
  { id: 4, nome: "Medel", imagem: medel},
   { id: 5, nome: "Capasso", imagem: capasso },
  { id: 6, nome: "Medel", imagem: medel},
   { id: 7, nome: "Capasso", imagem: capasso },
  { id: 8, nome: "Medel", imagem: medel},
   { id: 9, nome: "Capasso", imagem: capasso },
  { id: 10, nome: "Medel", imagem: medel},
   { id: 11, nome: "Capasso", imagem: capasso },
  { id: 12, nome: "Medel", imagem: medel},
   { id: 13, nome: "Capasso", imagem: capasso },
  { id: 14, nome: "Medel", imagem: medel},
   { id: 15, nome: "Capasso", imagem: capasso },
  { id: 16, nome: "Medel", imagem: medel},
   { id: 17, nome: "Capasso", imagem: capasso },
  { id: 18, nome: "Medel", imagem: medel},
   { id: 19, nome: "Capasso", imagem: capasso },
  { id: 20, nome: "Medel", imagem: medel},
   { id: 21, nome: "Capasso", imagem: capasso },
  { id: 22, nome: "Medel", imagem: medel},
   { id: 23, nome: "Capasso", imagem: capasso },
  { id: 24, nome: "Medel", imagem: medel},
   { id: 25, nome: "Capasso", imagem: capasso },
  { id: 26, nome: "Medel", imagem: medel},
  // Adicione os demais jogadores da mesma forma
];

const playerData = () => {
  const players = playersList.map((player, index) => ({
    id: player.id,
    top: 580 + Math.floor(index / 15) * 80, // Ajuste para quebrar a linha a cada 15 jogadores
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
    marginTop: '5px',
    textShadow: '0 0 4px #fff',
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
