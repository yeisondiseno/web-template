// Libraries
import axios from 'axios';
// Types
import { EmailFetcherType } from '../dto/email.dto';

export const emailFetcher = (url: string, { arg }: { arg: EmailFetcherType }) =>
  axios
    .post(url, { body: JSON.stringify(arg) })
    .then((res) => res.data)
    .catch((error) => console.error('error: ', error));
