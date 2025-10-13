import React from 'react';
// Components
import { Button } from '@/components/';
// Auth
import { signIn } from '@/auth';

const SigninButton = () => {
  return (
    <form>
      <Button type='submit'>Sign in</Button>
    </form>
  );
};

export default SigninButton;
