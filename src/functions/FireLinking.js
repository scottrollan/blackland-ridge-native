import { Linking } from 'react-native';

export const dialNumber = (number) => {
  const phoneNumber = number.replace(/\D/g, ''); //remove non numeric chars
  Linking.openURL(`tel:+1${phoneNumber}}`);
};
export const sendEmail = (email) => {
  Linking.openURL(`mailto:${email}`);
};
export const visitSite = (uri) => {
  Linking.openURL(uri);
};
