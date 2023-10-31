import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const fieldStyle = {
  width: '600px',
  height: '400px',
  backgroundColor: 'green',
  position: 'relative',
  margin: '50px auto',
};

const playerStyle = {
  width: '50px',
  height: '50px',
  backgroundColor: 'red',
  borderRadius: '50%',
  position: 'absolute',
  cursor: 'move',
};

const ItemTypes = {
  PLAYER: 'player',
};

const playerData = Array(11).fill(null).map((_, index) => ({
  id: `player-${index}`,
  top: 0,
  left: 0,
}));

const DraggablePlayer = ({ id, left, top }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.PLAYER,
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return <div ref={drag} style={{ ...playerStyle, left, top, opacity: isDragging ? 0.5 : 1 }} />;
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
    <div ref={drop} style={fieldStyle}>
      {players.map((player) => (
        <div key={player.id}>
          <DraggablePlayer id={player.id} left={player.left} top={player.top} />
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
