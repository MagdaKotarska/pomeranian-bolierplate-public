import React from 'react';
import './styles.css';
import { ArrowIcon } from '../../Icons/ArrowIcon';

export const Blocks1 = ({ title, icon, description, link }) => {
  return (
    <div className="blocks1">
      <div className="block-title">{title}</div>
      <div className="block-icon block-center">{icon}</div>
      <div className="block-description block-center">{description}</div>
      <div className="block-center">
        <a href={link}>
          zobacz więcej <ArrowIcon />
        </a>
      </div>
    </div>
  );
};
