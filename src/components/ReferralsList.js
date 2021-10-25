import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import ReferralDetail from '../components/ReferralDetail';

const ReferralsList = ({ referrals, errorMessage, selectedValue }) => {
  const [filteredReferrals, setFilteredReferrals] = useState();
  useEffect(() => {
    const filterRefs = (filterOn) => {
      let refs = [];
      referrals.forEach((ref) => {
        if (filterOn === 'All' || filterOn === ref.category) {
          refs = [...refs, ref];
        }
      });
      setFilteredReferrals([...refs]);
    };
    filterRefs(selectedValue);
  }, [selectedValue]);
  return errorMessage ? (
    <View>
      <Text>Something went wrong.</Text>
    </View>
  ) : (
    <View>
      <Text>{selectedValue}</Text>
      <FlatList
        data={filteredReferrals}
        keyExtractor={(referral) => referral.id}
        renderItem={({ item }) => {
          return <ReferralDetail referral={item}></ReferralDetail>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ReferralsList;
