'use client';
import React from 'react';
// Libraries
import { useForm, SubmitHandler } from 'react-hook-form';
// Components
import { Input, Button } from '@components/index';
// Styles
import './FormSection.scss';

type InputsType = {
  name: string;
  email: string;
  phone: number;
};

const FormSection = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<InputsType>();

  // Actions
  const onSubmit: SubmitHandler<InputsType> = (data) => console.log(data);

  return (
    <section
      className='module-home-form'
      style={{ backgroundImage: `url('/assets/img/home-form.png')` }}
    >
      <div className='module-home-form-cover' />
      <div className='module-home-form-module max-block'>
        <div className='module-home-form-content'>
          <h2 className='bold'>REGITRATE A NUETRO BOLETÍN</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='module-home-form-form'
          >
            <Input
              placeholder='Ingrese su nombre completo'
              {...register('name', { required: true })}
            />
            <Input
              placeholder='Ingrese su correo'
              {...register('email', { required: true })}
            />
            <Input
              placeholder='Ingrese su celular'
              type='number'
              {...register('phone', { required: true })}
            />
            <Button type='submit'>ENVIAR</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
