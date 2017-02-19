import React from 'react';

import './Main.css';

import Chat from '../Chat';
import UtilityBar from '../../components/UtilityBar';

function Main({ socket }) {
  return (
    <div className="Main">
      <UtilityBar socket={socket} />
      <Chat />
    </div>
  );
}

Main.propTypes = {
  socket: React.PropTypes.object.isRequired,
};

export default Main;
