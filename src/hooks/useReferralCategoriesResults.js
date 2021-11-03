import { useState, useEffect } from 'react';
import { referralCategoriesCollection } from '../firestore/index';

export default useReferralCategoriesResults = () => {
  const [referralCategories, setReferralCategories] = useState([]);
  const [categoriesErrorMessage, setErrorMessage] = useState('');
  let referralCategoriesList = [];
  const getReferralCategories = async () => {
    try {
      await referralCategoriesCollection.get().then((snapshot) => {
        snapshot.forEach((doc) => {
          const thisReferralCategory = { ...doc.data(), id: doc.id };
          referralCategoriesList = [
            ...referralCategoriesList,
            thisReferralCategory,
          ];
        });
        setReferralCategories([...referralCategoriesList]);
      });
    } catch (error) {
      setErrorMessage('Something went wrong.');
    }
  };
  useEffect(() => {
    getReferralCategories();
  }, []);

  return [referralCategories, categoriesErrorMessage];
};
