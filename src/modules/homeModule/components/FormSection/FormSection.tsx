'use client';
import React from 'react';
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
  // Fetch
  const {
    trigger,
    isMutating,
    error: errorSendData,
  } = useSWRMutation('/api/send-email', emailFetcher);

  // Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HomeFormInputTypes>();
  console.log('errors', errors);

  // Actions
  const onSubmit: SubmitHandler<HomeFormInputTypes> = (data) => trigger(data);

  return (
    <section
      className='module-home-form'
      style={{ backgroundImage: `url('/assets/img/home-form.png')` }}
    >
      <Cover direction='r-l' />
      <div className='module-home-form-module max-block'>
        <div className='module-home-form-content'>
          <h2 className='bold'>REGITRATE A NUETRO BOLETÍN</h2>
          {errorSendData && (
            <Alert status='warning'>
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
