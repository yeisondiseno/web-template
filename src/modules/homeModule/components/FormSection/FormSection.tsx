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
import { Input, Button, Cover, Spinner } from '@components/index';

// Styles
import './FormSection.scss';

const FormSection = () => {
  // Fetch
  const { trigger, isMutating } = useSWRMutation(
    '/api/send-email',
    emailFetcher,
  );

  // Form
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<HomeFormInputTypes>();

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

          <form
            onSubmit={handleSubmit(onSubmit)}
            className='module-home-form-form fade-in-scroll'
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
