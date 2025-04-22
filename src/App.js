import React, { useState , useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import campoImage from './field6.svg';

import capasso from './jogadores/capasso.png';
import jv from './jogadores/jv.png';
import cocao from './jogadores/cocao.png';
import pablo from './jogadores/pablo.png';
import fuzato from './jogadores/fuzato.png';
import jair from './jogadores/jair.png';
import jardim from './jogadores/jardim.png';
import lgus from './jogadores/lg.png';
import ly from './jogadores/ly.png';
import paulinho from './jogadores/paulinho.png';
import payet from './jogadores/payet.png';
import lucca from './jogadores/lucca.png';
import ph from './jogadores/ph.png';
import piton from './jogadores/piton.png';
import puma from './jogadores/puma.png';
import rayan from './jogadores/rayan.png';
import jpm from './jogadores/jpm.png';
import tche from './jogadores/tche.png';
import adson from './jogadores/adson.png';
import vegetti from './jogadores/vegetti.png';
import zegabriel from './jogadores/zegabriel.png';
import semft from './jogadores/semft.png';
import c1 from './jogadores/1.svg';
import c2 from './jogadores/2.svg';
import c3 from './jogadores/3.svg';
import c4 from './jogadores/4.svg';
import c5 from './jogadores/5.svg';
import c6 from './jogadores/6.svg';
import c7 from './jogadores/7.svg';
import c8 from './jogadores/8.svg';
import c9 from './jogadores/9.svg';
import c10 from './jogadores/10.svg';
import c11 from './jogadores/11.svg';
import v1 from './jogadores/numbers2/1.svg';
import v2 from './jogadores/numbers2/2.svg';
import v3 from './jogadores/numbers2/3.svg';
import v4 from './jogadores/numbers2/4.svg';
import v5 from './jogadores/numbers2/5.svg';
import v6 from './jogadores/numbers2/6.svg';
import v7 from './jogadores/numbers2/7.svg';
import v8 from './jogadores/numbers2/8.svg';
import v9 from './jogadores/numbers2/9.svg';
import v10 from './jogadores/numbers2/10.svg';
import v11 from './jogadores/numbers2/11.svg';
import david from './jogadores/david.png';
import sforza from './jogadores/sforza.png';
import leandrinho from './jogadores/leandrinho.png';
import estrella from './jogadores/estrella.png';
import victorl from './jogadores/victorl.png';
import lucase from './jogadores/lucase.png';
import hugo from './jogadores/hugo.png';
import couto from './jogadores/couto.png';
import texeira from './jogadores/texeira.png';
import souza from './jogadores/souza.png';
import gb from './jogadores/gb.png';
import jean from './jogadores/jean.png';
import max from './jogadores/max.png';
import riquelme from './jogadores/riquelme.png';
import brunol from './jogadores/brunol.png';
import alegria from './jogadores/alegria.png';
import oliveira from './jogadores/oliveira.png';
import freitas from './jogadores/freitas.png';
import pr from './jogadores/pr.png';
import lemos from './jogadores/lemos.png';
import zuka from './jogadores/zuka.png';
import nuno from './jogadores/nuno.png';
import loide from './jogadores/loide.png';
import garre from './jogadores/garre.png';
import euder from './jogadores/euder.png';


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
  { id: 5, nome: "J. Victor", imagem: jv, hasBorder: true, hasNumber: true, number: 38},
  { id: 75, nome: "Lemos", imagem: lemos, hasBorder: true, hasNumber: true, number: 4},
  { id: 6, nome: "Capasso", imagem: capasso, hasBorder: true, hasNumber: true, number: 22},
  { id: 7, nome: "Oliveira", imagem: oliveira , hasBorder: true, hasNumber: true, number: 29},
  { id: 4, nome: "Freitas", imagem: freitas, hasBorder: true, hasNumber: true, number: 43},
  { id: 65, nome: "Souza", imagem: souza, hasBorder: true, hasNumber: true, number: 5},
  { id: 64, nome: "Lyncon", imagem: ly, hasBorder: true, hasNumber: true, number: 33},
  { id: 16, nome: "L. Gustavo", imagem: lgus, hasBorder: true, hasNumber: true, number: 44},
  /*{ id: 8, nome: "Zé Vitor", imagem: zevitor, hasBorder: true, hasNumber: true, number: 44},*/
  /*{ id: 9, nome: "Miranda", imagem: miranda , hasBorder: true, hasNumber: true, number: 35},*/
  { id: 10, nome: "Puma", imagem: puma, hasBorder: true, hasNumber: true, number: 2},
  { id: 11, nome: "PH", imagem: ph , hasBorder: true, hasNumber: true, number: 96},
  { id: 12, nome: "Paulo Ricardo", imagem: pr, hasBorder: true, hasNumber: true, number: 32},
  { id: 14, nome: "Piton", imagem: piton, hasBorder: true, hasNumber: true, number: 6},
  { id: 24, nome: "Victor L.", imagem: victorl, hasBorder: true, hasNumber: true, number: 12},
  /*{ id: 69, nome: "Leandrinho", imagem: leandrinho, hasBorder: true, hasNumber: true, number: 66},*/
  { id: 13, nome: "Riquelme", imagem: riquelme, hasBorder: true, hasNumber: true, number: 36},
  /*{ id: 18, nome: "Lucas E.", imagem: lucase, hasBorder: true, hasNumber: true, number: 58},*/
  /*{ id: 19, nome: "Zé Gabriel", imagem: zegabriel, hasBorder: true, hasNumber: true, number: 23},*/
  { id: 79, nome: "Euder", imagem: euder, hasBorder: true, hasNumber: true, number: 70},
  { id: 61, nome: "Hugo M.", imagem: hugo, hasBorder: true, hasNumber: true, number: 25}, 
  /*{ id: 15, nome: "JP Murilo", imagem: jpm , hasBorder: true, hasNumber: true, number: 98},*/
  { id: 17, nome: "M. Cocão", imagem: cocao , hasBorder: true, hasNumber: true, number: 85},
  /*{ id: 67, nome: "De Lucca", imagem: lucca, hasBorder: true, hasNumber: true, number: 27},*/
  { id: 29, nome: "Sforza", imagem: sforza, hasBorder: true, hasNumber: true, number: 20},
  { id: 62, nome: "Estrella", imagem: estrella, hasBorder: true, hasNumber: true, number: 14},
  { id: 20, nome: "Payet", imagem: payet, hasBorder: true, hasNumber: true, number: 10},
  /*{ id: 73, nome: "Maxime", imagem: max, hasBorder: true, hasNumber: true, number: 26},*/
  { id: 21, nome: "Tchê Tchê", imagem: tche, hasBorder: true, hasNumber: true, number: 3},
  { id: 22, nome: "Paulinho", imagem: paulinho, hasBorder: true, hasNumber: true, number: 18},
  { id: 23, nome: "Jair", imagem: jair, hasBorder: true, hasNumber: true, number: 8},
  { id: 63, nome: "Coutinho", imagem: couto, hasBorder: true, hasNumber: true, number: 11},
  { id: 27, nome: "Adson", imagem: adson, hasBorder: true, hasNumber: true, number: 28},
  { id: 26, nome: "Vegetti", imagem: vegetti, hasBorder: true, hasNumber: true, number: 99},
  { id: 31, nome: "Rayan", imagem: rayan, hasBorder: true, hasNumber: true, number: 77},
  /*{ id: 32, nome: "Erick M.", imagem: erick, hasBorder: true, hasNumber: true, number: 16},*/
  /*{ id: 33, nome: "David", imagem: david, hasBorder: true, hasNumber: true, number: "❌"},*/
  { id: 76, nome: "Garré", imagem: garre, hasBorder: true, hasNumber: true, number: 15},
  { id: 77, nome: "Nuno", imagem: nuno, hasBorder: true, hasNumber: true, number: 17},
  { id: 78, nome: "Loide", imagem: loide, hasBorder: true, hasNumber: true, number: 45},
  { id: 33, nome: "David", imagem: david, hasBorder: true, hasNumber: true, number: 7},
  { id: 68, nome: "Alegria", imagem: alegria, hasBorder: true, hasNumber: true, number: 16},
  { id: 74, nome: "Zuccarello", imagem: zuka, hasBorder: true, hasNumber: true, number: 30},
  { id: 70, nome: "Texeira", imagem: texeira, hasBorder: true, hasNumber: true, number:90},
  { id: 25, nome: "Bruno L.", imagem: brunol , hasBorder: true, hasNumber: true, number: 72},
  { id: 71, nome: "GB", imagem: gb, hasBorder: true, hasNumber: true, number:19},
  { id: 72, nome: "Jean David", imagem: jean, hasBorder: true, hasNumber: true, number: 21},
  /*{ id: 28, nome: "Serginho", imagem: serginho, hasBorder: true, hasNumber: true, number: 70},*/
  /*{ id: 66, nome: "André Silva", imagem: andres, hasBorder: true, hasNumber: false, number: 11},*/
  /*{ id: 34, nome: "Klopp", imagem: serjao, hasBorder: true, hasNumber: false, number: 11},*/
  { id: 35, nome: "", imagem: semft,hasBorder: false, hasNumber: false, number: 0},
  { id: 36, nome: "", imagem: semft,hasBorder: false, hasNumber: false, number: 0},
  { id: 37, nome: "", imagem: semft,hasBorder: false, hasNumber: false, number: 0},
  { id: 38, nome: "", imagem: semft,hasBorder: false, hasNumber: false, number: 0},
  { id: 30, nome: "", imagem: semft,hasBorder: false, hasNumber: false, number: 0},
 
  /*{ id: 39, nome: "", imagem: c1, hasBorder: true, hasNumber: false, number: 0},
  { id: 40, nome: "", imagem: c2, hasBorder: true, hasNumber: false, number: 0},
  { id: 41, nome: "", imagem: c3, hasBorder: true, hasNumber: false, number: 0},
  { id: 42, nome: "", imagem: c4, hasBorder: true, hasNumber: false, number: 0},
  { id: 43, nome: "", imagem: c5, hasBorder: true, hasNumber: false, number: 0},
  { id: 44, nome: "", imagem: c6, hasBorder: true, hasNumber: false, number: 0},
  { id: 45, nome: "", imagem: c7, hasBorder: true, hasNumber: false, number: 0},
  { id: 46, nome: "", imagem: c8, hasBorder: true, hasNumber: false, number: 0},
  { id: 47, nome: "", imagem: c9, hasBorder: true, hasNumber: false, number: 0},
  { id: 48, nome: "", imagem: c10, hasBorder: true, hasNumber: false, number: 0},
  { id: 49, nome: "", imagem: c11, hasBorder: true, hasNumber: false, number: 0},
  { id: 50, nome: "", imagem: v1, hasBorder: true, hasNumber: false, number: 0},
  { id: 51, nome: "", imagem: v2, hasBorder: true, hasNumber: false, number: 0},
  { id: 52, nome: "", imagem: v3, hasBorder: true, hasNumber: false, number: 0},
  { id: 53, nome: "", imagem: v4, hasBorder: true, hasNumber: false, number: 0},
  { id: 54, nome: "", imagem: v5, hasBorder: true, hasNumber: false, number: 0},
  { id: 55, nome: "", imagem: v6, hasBorder: true, hasNumber: false, number: 0},
  { id: 56, nome: "", imagem: v7, hasBorder: true, hasNumber: false, number: 0},
  { id: 57, nome: "", imagem: v8, hasBorder: true, hasNumber: false, number: 0},
  { id: 58, nome: "", imagem: v9, hasBorder: true, hasNumber: false, number: 0},
  { id: 59, nome: "", imagem: v10, hasBorder: true, hasNumber: false, number: 0},
  { id: 60, nome: "", imagem: v11, hasBorder: true, hasNumber: false, number: 0},*/
 
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
