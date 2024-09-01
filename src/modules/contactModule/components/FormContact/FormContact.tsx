'use client';
import React from 'react';
// Libraries
import { useForm } from 'react-hook-form';
// Components
import { Input, TextArea, Button } from '@components/index';
// Styles
import './FormContact.scss';

const FormContact = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  // Actions
  // TODO: be care whit this any
  const onSubmit = (data: any) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='module-contact-form-contact fade-in-scroll-left'
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
      <TextArea placeholder='Mensaje' {...register('message')} />
      <Button type='submit'>ENVIAR</Button>
    </form>
  );
};

export default FormContact;
