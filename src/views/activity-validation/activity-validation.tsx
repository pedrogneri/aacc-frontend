import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { Scaffold, Button } from '../../components';
import { Activity } from '../../interfaces';
import { useStoreState } from '../../hooks';
import { ActivityService } from '../../services';

import * as S from './activity-validation.style';

type Params = {
  id: string;
}

const ActivityValidation = () => {
  const { id } = useParams<Params>();
  const history = useHistory();

  const loggedUser = useStoreState((state) => state.loggedUser);
  const [activity, setActivity] = useState<Activity>();
  const [isLoading, setIsLoading] = useState(false);

  const getActivity = async () => {
    setIsLoading(true);
    try {
      const activityResponse = await ActivityService.getActivityById(
        loggedUser?.token as string, id,
      );

      setActivity(activityResponse);
      setIsLoading(false);
    } catch {
      history.push('/activities');
    }
  };

  useEffect(() => {
    getActivity();
  }, []);

  return (
    <Scaffold
      loading={isLoading}
      onBack={() => history.push('/activities')}
    >
      <>
        <S.Header>
          <S.Title>Atividade</S.Title>
          <S.Subtitle>Dados da atividade submetida</S.Subtitle>
        </S.Header>

        <S.FieldsArea>
          <S.Field>
            <b>Nome: </b>
            {' '}
            {activity?.name}
          </S.Field>
          <S.Field>
            <b>Categoria: </b>
            {' '}
            {activity?.category}
          </S.Field>
          <S.Field>
            <b>Horas: </b>
            {' '}
            {activity?.hours}
            {' '}
            Hrs
          </S.Field>
        </S.FieldsArea>

        <S.Header>
          <S.Title>Aluno</S.Title>
          <S.Subtitle>Dados do aluno</S.Subtitle>
        </S.Header>

        <S.FieldsArea>
          <S.Field>
            <b>Nome: </b>
            {' '}
            {activity?.studentName}
          </S.Field>
        </S.FieldsArea>

        <Button text="Salvar alterações" />
      </>
    </Scaffold>
  );
};

export default ActivityValidation;
