import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import * as S from './category-card.style';

type Props = {
  percent: number;
  category: string;
}

const CategoryCard = ({ percent, category }: Props) => (
  <S.Container>
    <S.Title>{`Categoria ${category}`}</S.Title>
    <S.ProgressContainer>
      <CircularProgressbar
        value={percent}
        text={`${percent}%`}
        strokeWidth={6}
        styles={buildStyles({
          textSize: '14px',
          pathColor: '#00C876',
          textColor: '#000',
          trailColor: '#c4c4c4',
          strokeLinecap: 'butt',
        })}
      />
    </S.ProgressContainer>

    <S.Button>
      Ver atividades
      <img src="icons/arrow-right-black.svg" alt="" />
    </S.Button>
  </S.Container>
);

export default CategoryCard;
