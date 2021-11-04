import { referralsCollection } from '../firestore/index';
import { createRandomString } from './CreateRandomString';

const addReferral = (newReferral) => {
  const rID = createRandomString(20);

  try {
    referralsCollection.doc(rID).set(newReferral);
  } catch (error) {
    return error;
  }
};

export default addReferral;
