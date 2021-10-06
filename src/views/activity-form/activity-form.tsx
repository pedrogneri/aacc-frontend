import React, { useState } from 'react';
import {
  useFormik,
} from 'formik';
import * as yup from 'yup';

import { useHistory } from 'react-router-dom';
import { Input, Scaffold, Button } from '../../components';
import { ActivitiesResponse } from '../../interfaces';
import { useStoreState } from '../../hooks';
import { ActivityService } from '../../services';

import * as S from './activity-form.style';

const ActivityForm = () => {
  const history = useHistory();
  const loggedUser = useStoreState((state) => state.loggedUser);
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    category: '', name: '', start: '', hours: 0, location: '', entity: '', presenters: '',
  };
  const validationSchema = yup.object().shape({
    category: yup
      .string()
      .required('Campo obrigatório'),
    name: yup
      .string()
      .required('Campo obrigatório'),
    start: yup
      .date()
      .required('Campo obrigatório'),
    hours: yup
      .number()
      .moreThan(0, 'O valor não pode ser zero')
      .required('Campo obrigatório'),
    location: yup
      .string()
      .required('Campo obrigatório'),
    entity: yup
      .string()
      .required('Campo obrigatório'),
    presenters: yup
      .string()
      .required('Campo obrigatório'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);

      const newActivity: Partial<ActivitiesResponse> = {
        RA: loggedUser?.ra as string,
        categoria: values.category,
        cidade: values.location,
        inicio: new Date(values.start).getTime(),
        horas: values.hours,
        nomeAluno: loggedUser?.name as string,
        nomeAtividade: values.name,
        nomePalestrante: values.presenters,
        organizador: values.entity,
      };

      await ActivityService.createActivity(loggedUser?.token as string, newActivity);
      history.push('/activities');
    },
  });

  return (
    <Scaffold
      loading={isLoading}
      onBack={() => history.push('/activities')}
    >
      <form onSubmit={formik.handleSubmit}>
        <S.Title>Enviar atividade</S.Title>

        <Input
          outlined
          label="Categoria da atividade"
          name="category"
          value={formik.values.category}
          onChange={formik.handleChange}
          errorMessage={formik.touched.category && formik.errors.category}
        />
        <Input
          outlined
          label="Nome da atividade"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          errorMessage={formik.touched.name && formik.errors.name}
        />
        <Input
          outlined
          label="Data da realização"
          name="start"
          type="date"
          value={formik.values.start}
          onChange={formik.handleChange}
          errorMessage={formik.touched.start && formik.errors.start}
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
          outlined
          label="Local/Cidade de Realização"
          name="location"
          value={formik.values.location}
          onChange={formik.handleChange}
          errorMessage={formik.touched.location && formik.errors.location}
        />
        <Input
          outlined
          label="Entidade organizadora do Evento/Atividade"
          name="entity"
          value={formik.values.entity}
          onChange={formik.handleChange}
          errorMessage={formik.touched.entity && formik.errors.entity}
        />
        <Input
          outlined
          label="Nome dos Palestrantes/Apresentadores"
          name="presenters"
          value={formik.values.presenters}
          onChange={formik.handleChange}
          errorMessage={formik.touched.presenters && formik.errors.presenters}
        />

        <Button text="Enviar atividade" />
      </form>
    </Scaffold>
  );
};

export default ActivityForm;
