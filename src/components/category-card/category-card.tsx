import React from 'react';
import { ArrowRightAltOutlined } from '@mui/icons-material';
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
        value={100 - percent}
        text={`${percent}%`}
        strokeWidth={6}
        styles={buildStyles({
          textSize: '14px',
          trailColor: '#00C876',
          pathColor: '#c4c4c4',
          textColor: '#000',
          strokeLinecap: 'butt',
        })}
      />
    </S.ProgressContainer>

    <S.Button>
      Ver atividades
      <ArrowRightAltOutlined />
    </S.Button>
  </S.Container>
);

export default CategoryCard;
