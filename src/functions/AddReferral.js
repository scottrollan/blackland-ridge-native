import { referralsCollection } from '../firestore/index';
import { createRandomString } from './CreateRandomString';

export default addReferral = (newReferral) => {
  const rID = createRandomString(20);

  try {
    referralsCollection.doc(rID).set(newReferral);
  } catch (error) {
    console.log(error);
  }
};
