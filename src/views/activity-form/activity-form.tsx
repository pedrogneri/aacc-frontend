import React, { useState } from 'react';
import {
  useFormik,
} from 'formik';
import * as yup from 'yup';

import { Input, Scaffold, Button } from '../../components';

import * as S from './activity-form.style';

const ActivityForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    type: '', name: '', date: '',
  };
  const validationSchema = yup.object().shape({
    type: yup
      .string()
      .required(),
    name: yup
      .string()
      .required(),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      setIsLoading(true);
    },
  });

  return (
    <Scaffold
      loading={isLoading}
      onSearch={(query: string) => query}
    >
      <form onSubmit={formik.handleSubmit}>
        <Input
          outlined
          label="Tipo da atividade"
          name="type"
          value={formik.values.type}
          onChange={formik.handleChange}
          errorMessage={formik.touched.type && formik.errors.type}
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
          name="date"
          type="date"
          value={formik.values.date}
          onChange={formik.handleChange}
          errorMessage={formik.touched.date && formik.errors.date}
        />
        <Button text="Enviar atividade" />
      </form>

    </Scaffold>
  );
};

export default ActivityForm;
