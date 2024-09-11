// Libraries
import axios from 'axios';
// Types
import { HomeFormInputTypes } from '@modules/homeModule/types';

export const emailFetcher = (
  url: string,
  { arg }: { arg: HomeFormInputTypes },
) =>
  axios
    .post(url, { body: JSON.stringify(arg) })
    .then((res) => res.data)
    .catch((error) => console.error('error: ', error));
