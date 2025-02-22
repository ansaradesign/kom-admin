import ky from 'ky';

const defaultInstance = ky.create({
  prefixUrl: '',
  headers: {
    'Content-Type': 'application/json',
  },
});

const guestInstance = defaultInstance.extend({});

const authInstance = defaultInstance.extend({});

export const api = defaultInstance;
export const guestApi = guestInstance;
export const authApi = authInstance;
