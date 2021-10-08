import React from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { MenuItem } from '@mui/material';
import { Scaffold, Button, Input } from '../../components';
import { Activity } from '../../interfaces';

import * as S from './activity-validation.style';

type Props = {
  activity?: Activity;
  onUpdateActivity: Function;
}

const STATUS_OPTIONS = [
  { value: 'pendente', display: 'Pendente' },
  { value: 'negada', display: 'Negada' },
  { value: 'confirmada', display: 'Confirmada' },
];

const ActivityValidation = ({
  activity,
  onUpdateActivity,
}: Props) => {
  const history = useHistory();
  const initialValues = {
    category: activity?.category,
    status: activity?.status,
    hours: activity?.hours,
  };

  const validationSchema = yup.object().shape({
    category: yup
      .string()
      .required('Campo obrigatório'),
    hours: yup
      .number()
      .moreThan(0, 'O valor não pode ser zero')
      .required('Campo obrigatório'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      await onUpdateActivity(values);
    },
  });

  return (
    <Scaffold onBack={() => history.push('/activities')}>
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
          <S.Field>
            <b>RA: </b>
            {' '}
            {activity?.studentRA}
          </S.Field>
        </S.FieldsArea>

        <form onSubmit={formik.handleSubmit}>
          <Input
            outlined
            label="Categoria"
            name="category"
            value={formik.values.category}
            onChange={formik.handleChange}
            errorMessage={formik.touched.category && formik.errors.category}
          />
          <Input
            outlined
            label="Duração"
            name="hours"
            type="number"
            value={formik.values.hours}
            onChange={formik.handleChange}
            errorMessage={formik.touched.hours && formik.errors.hours}
          />
          <Input
            label="Status"
            name="status"
            type="select"
            selectItems={STATUS_OPTIONS}
            onChange={formik.handleChange}
            value={formik.values.status}
          />

          <S.SubmitContainer>
            <Button text="Salvar alterações" />
          </S.SubmitContainer>
        </form>
      </>
    </Scaffold>
  );
};

export default ActivityValidation;
