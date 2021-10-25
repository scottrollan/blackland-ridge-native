import { useState, useEffect } from 'react';
import { referralsCollection } from '../firestore/index';

export default useReferralsResults = () => {
  const [referrals, setReferrals] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  let referralList = [];
  const getReferrals = async () => {
    try {
      await referralsCollection.get().then((snapshot) => {
        snapshot.forEach((doc) => {
          const thisReferral = { ...doc.data(), id: doc.id };
          referralList = [...referralList, thisReferral];
        });
        setReferrals([...referralList]);
      });
    } catch (error) {
      setErrorMessage('Something went wrong.');
    }
  };
  useEffect(() => {
    getReferrals();
  }, []);

  return [referrals, errorMessage];
};
