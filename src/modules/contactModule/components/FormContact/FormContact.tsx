'use client';
import React, { useState } from 'react';
// Libraries
import { useForm, SubmitHandler } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';
// Fetcher
import { emailFetcher } from '@modules/homeModule/fetchers';
// Components
import {
  InputGroup,
  TextAreaGroup,
  Button,
  Spinner,
  Alert,
} from '@components/index';
// Types
import { ContactFormInputType } from '@modules/homeModule/types';
// Styles
import './FormContact.scss';

const FormContact = () => {
  // States
  const [isSuccess, setIsSuccess] = useState(false);

  // Fetch
  const {
    trigger,
    isMutating,
    error: errorSendData,
  } = useSWRMutation('send-email-register', emailFetcher);

  // Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputType>();
  console.log('errors: ', errors);

  // Actions
  const onSubmit: SubmitHandler<ContactFormInputType> = (data) =>
    trigger(data).then(() => {
      setIsSuccess(true);
      reset();
    });

  return (
    <>
      {isSuccess && (
        <Alert status='info'>
          <h4>Enviado</h4>
          <p>Su correo ha sido registrado con éxito.</p>
        </Alert>
      )}

      {errorSendData && (
        <Alert status='error'>
          <h4>!Error</h4>
          <p>Error al enviar el correo, por favor intentar más tarde.</p>
        </Alert>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='module-contact-form-contact fade-in-scroll-left'
      >
        <InputGroup
          placeholder='Ingrese su nombre completo'
          error={errors.name?.message}
          id='name'
          {...register('name', {
            required: { value: true, message: 'El nombre es requerido' },
          })}
        />
        <InputGroup
          placeholder='Ingrese su correo'
          type='email'
          id='email'
          error={errors.email?.message}
          {...register('email', {
            required: { value: true, message: 'El correo es requerido' },
          })}
        />
        <InputGroup
          placeholder='Ingrese su celular'
          type='number'
          id='phone'
          onKeyDown={(e) =>
            ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault()
          }
          error={errors.phone?.message}
          {...register('phone', {
            required: { value: true, message: 'El teléfono es requerido' },
            minLength: {
              value: 7,
              message: 'El largo mínimo es de 7 dígitos',
            },
            valueAsNumber: true,
          })}
        />
        <TextAreaGroup
          placeholder='Mensaje'
          id='message'
          error={errors.message?.message}
          {...register('message', {
            required: { value: true, message: 'El mensaje es requerido' },
          })}
        />

        <Button type='submit' disabled={isMutating}>
          {isMutating ? (
            <>
              ENVIANDO...
              <Spinner />
            </>
          ) : (
            'ENVIAR'
          )}
        </Button>
      </form>
    </>
  );
};

export default FormContact;
