import React, { useState , useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import campoImage from './field6.svg';

import cocao from './jogadores/cocao.png';
import pablo from './jogadores/pablo.png';
import fuzato from './jogadores/fuzato.png';
import jair from './jogadores/jair.png';
import jardim from './jogadores/jardim.png';
import ly from './jogadores/ly.png';
import paulinho from './jogadores/paulinho.png';
import ph from './jogadores/ph.png';
import piton from './jogadores/piton.png';
import puma from './jogadores/puma.png';
import rayan from './jogadores/rayan.png';
import jpm from './jogadores/jpm.png';
import tche from './jogadores/tche.png';
import adson from './jogadores/adson.png';
import vegetti from './jogadores/vegetti.png';
import barros from './jogadores/barros.png';
import semft from './jogadores/semft.png';
import david from './jogadores/david.png';
import sforza from './jogadores/sforza.png';
import leandrinho from './jogadores/leandrinho.png';
import estrella from './jogadores/estrella.png';
import victorl from './jogadores/victorl.png';
import hugo from './jogadores/hugo.png';
import couto from './jogadores/couto.png';
import texeira from './jogadores/texeira.png';
import gb from './jogadores/gb.png';
import jean from './jogadores/jean.png';
import max from './jogadores/max.png';
import riquelme from './jogadores/riquelme.png';
import brunol from './jogadores/brunol.png';
import oliveira from './jogadores/oliveira.png';
import freitas from './jogadores/freitas.png';
import pr from './jogadores/pr.png';
import lemos from './jogadores/lemos.png';
import zuka from './jogadores/zuka.png';
import nuno from './jogadores/nuno.png';
import loide from './jogadores/loide.png';
import garre from './jogadores/garre.png';
import euder from './jogadores/euder.png';
import tm from './jogadores/tm.png';
import robert from './jogadores/robert.png';
import gomez from './jogadores/gomez.png';
import franca from './jogadores/franca.png';
import cuesta from './jogadores/cuesta.png';
import nathan from './jogadores/nathan.png';


const containerStyle = {
  width: '1920px',
  height: '960px',
  margin: 'auto',
  backgroundColor: 'rgb(0, 0, 0)',
};

const playerStyle = {
  width: '30px',
  height: '30px',
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
  { id: 1, nome: "Jardim", imagem: jardim, hasBorder: true, hasNumber: true, number: 1},
  { id: 2, nome: "Fuzato", imagem: fuzato , hasBorder: true, hasNumber: true, number: 13},
  { id: 3, nome: "Pablo", imagem: pablo, hasBorder: true, hasNumber: true, number: 37},
  { id: 4, nome: "Robert", imagem: robert, hasBorder: true, hasNumber: true, number: 30},
  { id: 8, nome: "Freitas", imagem: freitas, hasBorder: true, hasNumber: true, number: 43},
  { id: 6, nome: "Cuesta", imagem: cuesta, hasBorder: true, hasNumber: true, number: 46},
   /*{ id: 7, nome: "Nathan", imagem: nathan, hasBorder: true, hasNumber: true, number: 22},*/
  { id: 5, nome: "Lemos", imagem: lemos, hasBorder: true, hasNumber: true, number: 4},
  { id: 9, nome: "Oliveira", imagem: oliveira , hasBorder: true, hasNumber: true, number: 29},
  /*{ id: 10, nome: "Souza", imagem: souza, hasBorder: true, hasNumber: true, number: 5},*/
  /*{ id: 11, nome: "Lyncon", imagem: ly, hasBorder: true, hasNumber: true, number: 33},*/
  /*{ id: 12, nome: "Zé Vitor", imagem: zevitor, hasBorder: true, hasNumber: true, number: 44},*/
  /*{ id: 13, nome: "Miranda", imagem: miranda , hasBorder: true, hasNumber: true, number: 35},*/
  { id: 14, nome: "Puma", imagem: puma, hasBorder: true, hasNumber: true, number: 2},
  { id: 15, nome: "PH", imagem: ph , hasBorder: true, hasNumber: true, number: 96},
  { id: 16, nome: "Paulo Ricardo", imagem: pr, hasBorder: true, hasNumber: true, number: 22},
  { id: 17, nome: "Piton", imagem: piton, hasBorder: true, hasNumber: true, number: 6},
  { id: 18, nome: "Victor L.", imagem: victorl, hasBorder: true, hasNumber: true, number: 12},
  { id: 19, nome: "Leandrinho", imagem: leandrinho, hasBorder: true, hasNumber: true, number: 66},
  { id: 20, nome: "Riquelme", imagem: riquelme, hasBorder: true, hasNumber: true, number: 36},
  /*{ id: 21, nome: "Lucas E.", imagem: lucase, hasBorder: true, hasNumber: true, number: 58},*/
  { id: 22, nome: "Euder", imagem: euder, hasBorder: true, hasNumber: true, number: 70},
  { id: 23, nome: "Hugo M.", imagem: hugo, hasBorder: true, hasNumber: true, number: 25}, 
  { id: 24, nome: "Barros", imagem: barros, hasBorder: true, hasNumber: true, number: 88},
  /*{ id: 25, nome: "JP Murilo", imagem: jpm , hasBorder: true, hasNumber: true, number: 98},*/
  { id: 26, nome: "M. Cocão", imagem: cocao , hasBorder: true, hasNumber: true, number: 85},
  { id: 27, nome: "T. Mendes", imagem: tm, hasBorder: true, hasNumber: true, number: 23},
   /*{ id: 28, nome: "Sforza", imagem: sforza, hasBorder: true, hasNumber: true, number: 20},*/
  { id: 29, nome: "Estrella", imagem: estrella, hasBorder: true, hasNumber: true, number: 14},
  /*{ id: 31, nome: "Maxime", imagem: max, hasBorder: true, hasNumber: true, number: 26},*/
  { id: 32, nome: "Tchê Tchê", imagem: tche, hasBorder: true, hasNumber: true, number: 3},
  { id: 33, nome: "Paulinho", imagem: paulinho, hasBorder: true, hasNumber: true, number: 18},
  { id: 34, nome: "Jair", imagem: jair, hasBorder: true, hasNumber: true, number: 8},
  { id: 35, nome: "Coutinho", imagem: couto, hasBorder: true, hasNumber: true, number: 10},
  { id: 30, nome: "França", imagem: franca, hasBorder: true, hasNumber: true, number: 9},
  { id: 39, nome: "Garré", imagem: garre, hasBorder: true, hasNumber: true, number: 15},
  { id: 36, nome: "Adson", imagem: adson, hasBorder: true, hasNumber: true, number: 28},
  { id: 37, nome: "Vegetti", imagem: vegetti, hasBorder: true, hasNumber: true, number: 99},
  { id: 38, nome: "Rayan", imagem: rayan, hasBorder: true, hasNumber: true, number: 77},
  { id: 40, nome: "Nuno", imagem: nuno, hasBorder: true, hasNumber: true, number: 17},
  { id: 42, nome: "David", imagem: david, hasBorder: true, hasNumber: true, number: 7},
  { id: 43, nome: "Gomez", imagem: gomez, hasBorder: true, hasNumber: true, number: 11},
  { id: 44, nome: "Zuccarello", imagem: zuka, hasBorder: true, hasNumber: true, number: 31},
  { id: 47, nome: "GB", imagem: gb, hasBorder: true, hasNumber: true, number:19},
  { id: 41, nome: "Loide", imagem: loide, hasBorder: true, hasNumber: true, number: 45},
  { id: 46, nome: "Bruno L.", imagem: brunol , hasBorder: true, hasNumber: true, number: 72},
  { id: 45, nome: "Texeira", imagem: texeira, hasBorder: true, hasNumber: true, number: 90},
  { id: 48, nome: "Jean David", imagem: jean, hasBorder: true, hasNumber: true, number: 21},
  { id: 49, nome: "", imagem: semft,hasBorder: false, hasNumber: false, number: 0},
  { id: 50, nome: "", imagem: semft,hasBorder: false, hasNumber: false, number: 0},
  { id: 51, nome: "", imagem: semft,hasBorder: false, hasNumber: false, number: 0},
  { id: 52, nome: "", imagem: semft,hasBorder: false, hasNumber: false, number: 0},
  { id: 53, nome: "", imagem: semft,hasBorder: false, hasNumber: false, number: 0},
 
];

const playerData = () => {
  const screenWidth = 1920; // Largura do container
  const halfScreenWidth = screenWidth / 2; // Metade da tela
  const playerWidth = 100; // Largura de cada jogador (ajustada para espaçamento)
  const startLeft = 60; // Posição inicial na lateral esquerda
  const startTop = 60; // Posição inicial no topo
  const rowHeight = 150; // Distância entre as linhas de jogadores
  const playersPerRow = Math.floor((halfScreenWidth - startLeft) / playerWidth); // Número de jogadores por linha

  return playersList.map((player, index) => ({
    id: player.id,
    top: startTop + Math.floor(index / playersPerRow) * rowHeight,
    left: startLeft + (index % playersPerRow) * playerWidth,
    name: player.nome,
    image: player.imagem,
    hasBorder: player.hasBorder,
    hasNumber: player.hasNumber,
    number: player.number,
  }));
};

const DraggablePlayer = ({ id, left, top, name, image, hasBorder, hasNumber, number }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.PLAYER,
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const playerNameStyle = {
    marginTop: '0px',
    textShadow: '0 0 6px #000, 0 0 6px #000, 0 0 6px #000, 0 0 6px #000', // Adicione esta linha para criar uma borda preta
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    zIndex: 2, // Garante que o nome do jogador fique acima do círculo
  };

  const playerNameContainerStyle = {
    padding: '-2px', // Adicione um espaçamento interno de 5px
    position: 'relative', // Garante que o z-index funcione corretamente
    zIndex: 2, // Garante que o nome do jogador fique acima do círculo
    whiteSpace: 'nowrap', // Evita que o nome do jogador quebre a linha
  };

  const playerImageContainerStyle = {
    position: 'relative', // Adicione position relative para que o número seja posicionado absolutamente em relação a este contêiner
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    overflow: 'hidden',
    border: hasBorder ? '2px solid #373737' : 'none', // Adicione a borda aqui
    backgroundColor: hasBorder ? '#65615f' : 'none',
    zIndex: 1, // Garante que a imagem do jogador fique abaixo do círculo
  };

  const playerNumberContainerStyle = {
    position: 'absolute',
    bottom: '-15px',
    right: -25,
    width: '25px', // Defina um tamanho fixo para o contêiner do número
    height: '25px', // Defina um tamanho fixo para o contêiner do número
    borderRadius: '50%',
    overflow: 'hidden',
    backgroundColor: 'white',
    zIndex: 1, // Garante que a imagem do jogador fique abaixo do círculo
    border: '2px solid #373737',
    display: 'flex', // Centraliza horizontalmente
    justifyContent: 'center', // Centraliza horizontalmente
    alignItems: 'center', // Centraliza verticalmente
  };

  const playerNumberStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#bb0000',
    padding: '1px',
    textAlign: 'center',
    boxSizing: 'border-box',
  };

  return (
    <div ref={drag} style={{ ...playerStyle, left, top, opacity: isDragging ? 0.5 : 1 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={playerImageContainerStyle}>
          <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        {hasNumber && (
          <div style={playerNumberContainerStyle}>
            <div style={playerNumberStyle}>{number}</div>
          </div>
        )}
        <div style={playerNameStyle}>
          <div style={playerNameContainerStyle}>{name}</div>
        </div>
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
          <DraggablePlayer id={player.id} left={player.left} top={player.top} 
                           name={player.name} image={player.image} hasBorder={player.hasBorder} 
                           hasNumber={player.hasNumber} number={player.number} />
        </div>
      ))}
    </div>
  );
};

function App() {

  useEffect(() => {
    document.title = "CampinhoPodcast"; 
    document.body.style.background = "rgb(0, 0, 0)";
  }, []);

  return (
     <div className="App" style={{ backgroundColor: 'rgb(0, 0, 0)', margin: 0, padding: 0, overflow: 'hidden' }}>
      <DndProvider backend={HTML5Backend}>
        <Field/>
      </DndProvider>
    </div>
  );
}

export default App;
