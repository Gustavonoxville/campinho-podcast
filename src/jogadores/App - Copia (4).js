import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import campoImage from './campo.jpg';

const containerStyle = {
  width: '900px',
  height: '600px',
  margin: '50px auto',
  position: 'relative',
};

const playerStyle = {
  width: '50px',
  height: '50px',
  backgroundColor: 'red',
  borderRadius: '50%',
  position: 'absolute',
  cursor: 'move',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  flexDirection: 'column', // Adicionando esta linha para ajustar o alinhamento vertical
};

const ItemTypes = {
  PLAYER: 'player',
};

const names = [
  'Ronaldo', 'Messi', 'Neymar', 'Mbappé', 'Salah',
  'Lewandowski', 'De Bruyne', 'Modric', 'Kante', 'Ramos',
  'Pogba', 'Kane', 'Haaland', 'Suárez', 'Mané', "PEC", "Vegetti", "Paulinho",
];

const playersList = [
  { id: 1, nome: "Capasso", imagem: require("./jogadores/capasso.png").default },
  { id: 2, nome: "Medel", imagem: require("./jogadores/medel.png").default },
  // Adicione os demais jogadores da mesma forma
];

const playerData = () => {

  const players = playersList.map((player, index) => ({
    id: player.id,
    top: 580,
    left: index * 60,
    name: player.nome,
    image: `url(${player.imagem})`,
  }));

//  const startingPlayers = Array(15).fill(null).map((_, index) => ({
//    id: `player-${index}`,
//    top: 580,
//   left: index * 60,
//    name: names[index],
//  }));

//  const reservePlayers = Array(7).fill(null).map((_, index) => ({
//    id: `reserve-${index}`,
//    top: 630,
//    left: index * 60,
//    name: names[index + 11],
//  }));

  return [...players];  
  // return [...players,...startingPlayers, ...reservePlayers];
};

const DraggablePlayer = ({ id, left, top, name, image }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.PLAYER,
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} style={{ ...playerStyle, left, top, opacity: isDragging ? 0.5 : 1 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden' }}>
          <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ marginTop: '5px' }}>{name}</div>
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
          <DraggablePlayer id={player.id} left={player.left} top={player.top} name={player.name} />
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
