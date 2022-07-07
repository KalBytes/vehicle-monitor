
const baseURL = `https://gcp-cloudrun-back-n2pixiylla-ew.a.run.app/api`;
const webSocketsURL = 'wss://gcp-cloudrun-back-n2pixiylla-ew.a.run.app/socket';

export const environment = {
  production: false,
  vehicleURL: `${baseURL}/vehicle`,
  webSocketsURL
};
