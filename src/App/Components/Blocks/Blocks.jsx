import React from 'react';
import { Blocks1 } from './Blocks1/Blocks1';
import { PersonalCardIcon } from '../Icons/PersonalCardIcon';
import { SettingIcon } from '../Icons/SettingIcon';
import { FaqIcon } from '../Icons/FaqIcon';
import { EditIcon } from '../Icons/EditIcon';

import './styles.css';

export const Blocks = () => {
  return (
    <div>
      <h4 className="header-block">Hej, tu Magda!</h4>
      <p className="header-block2">
        Poniżej znajdziesz najważniejsze informacje na temat mojej działalności
      </p>
      <div className="header-blocks">
        <Blocks1
          title="Moje Cv"
          icon={<PersonalCardIcon />}
          description="podgląd cv wraz z doświadczeniem"
        />
        <Blocks1
          title="Ćwiczenia"
          icon={<EditIcon />}
          description="wszystkie wykonane ćwiczenia"
          link
        />
        <Blocks1
          title="Blog"
          icon={<SettingIcon />}
          description="wpisy blogowe o technologii i front-end"
          link
        />
        <Blocks1
          title="Tech stack"
          icon={<SettingIcon />}
          description="stack technologiczny realizowany na kursie"
          link
        />
        <Blocks1
          title="FAQ"
          icon={<FaqIcon />}
          description="odpowiedzi na najczęstsze pytania"
          link
        />
      </div>
    </div>
  );
};
