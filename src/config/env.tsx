export const env = {
  envMode: process.env.ENV_MODE ?? 'develop',
  emailUserName: process.env.NEXT_EMAIL_USERNAME ?? '',
  emailPassword: process.env.NEXT_EMAIL_PASSWORD ?? '',
};
