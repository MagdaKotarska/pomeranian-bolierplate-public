import './styles.css';
import React from 'react';
import { SettingIcon } from '../Icons/SettingIcon';

export const HeaderMenu = () => {
  return (
    <div className="flex-container">
      <div className="item1">
        <SettingIcon />
      </div>

      <img
        className="item2"
        src="/images/neom-WZCMd9K-sHY-unsplash.jpg"
        alt=""
      />
      <div className="flex-container2">
        <div className="item3">Magda</div>
        <div className="item4">kursant</div>
      </div>
      <div className="item5">&#10003;</div>
    </div>
  );
};
