import React from 'react';

import './AvatarWrapper.css';

import Status from '../Status/index';

function AvatarWrapper({ avatar, status }) {
  return (
    <div className="Avatar--wrapper">
      <img className="Avatar" src={avatar} alt="" />
      <Status status={status} />
    </div>
  );
}

AvatarWrapper.propTypes = {
  avatar: React.PropTypes.string.isRequired,
  status: React.PropTypes.string.isRequired,
};

export default AvatarWrapper;
