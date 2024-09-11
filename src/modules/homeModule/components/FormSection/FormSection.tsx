'use client';
import React, { use, useState } from 'react';
// Libraries
import { useForm, SubmitHandler } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';
// Fetcher
import { emailFetcher } from '@modules/homeModule/fetchers';
// Types
import { HomeFormInputTypes } from '@modules/homeModule/types';
// Components
import { InputGroup, Button, Cover, Spinner, Alert } from '@components/index';

// Styles
import './FormSection.scss';

const FormSection = () => {
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
  } = useForm<HomeFormInputTypes>();

  // Actions
  const onSubmit: SubmitHandler<HomeFormInputTypes> = (data) =>
    trigger(data).then(() => {
      setIsSuccess(true);
      reset();
    });

  return (
    <section
      className='module-home-form'
      style={{ backgroundImage: `url('/assets/img/home-form.png')` }}
    >
      <Cover direction='r-l' />
      <div className='module-home-form-module max-block'>
        <div className='module-home-form-content'>
          <h2 className='bold'>REGITRATE A NUETRO BOLETÍN</h2>
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
            className='module-home-form-form fade-in-scroll'
          >
            <InputGroup
              placeholder='Ingrese su nombre completo'
              error={errors.name?.message}
              {...register('name', {
                required: { value: true, message: 'El nombre es requerido' },
              })}
            />
            <InputGroup
              placeholder='Ingrese su correo'
              type='email'
              error={errors.email?.message}
              {...register('email', {
                required: { value: true, message: 'El correo es requerido' },
              })}
            />
            <InputGroup
              placeholder='Ingrese su celular'
              type='number'
              error={errors.phone?.message}
              onKeyDown={(e) =>
                ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault()
              }
              {...register('phone', {
                required: { value: true, message: 'El teléfono es requerido' },
                minLength: {
                  value: 7,
                  message: 'El largo mínimo es de 7 dígitos',
                },
                valueAsNumber: true,
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
        </div>
      </div>
    </section>
  );
};

export default FormSection;
