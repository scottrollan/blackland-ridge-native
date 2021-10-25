import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Picker, Text } from 'react-native';
import ReferralsList from '../components/ReferralsList';
import { referralCategories } from '../data/referralCategories';
import useReferralsResults from '../hooks/useReferralsResults';

const BusinessScreen = () => {
  const [selectedValue, setSelectedValue] = useState('Yards');
  const [referrals, errorMessage] = useReferralsResults();

  return (
    <View style={styles.viewStyles}>
      <Text style={styles.headerStyles}>Business Referrals</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
          style={styles.pickerStyles}
        >
          <Picker.Item label="All" value="All" />
          {referralCategories.map((cat) => {
            return (
              <Picker.Item
                label={cat.category}
                value={cat.category}
                key={cat.category}
              />
            );
          })}
        </Picker>
      </View>
      <ReferralsList
        referrals={referrals}
        errorMessage={errorMessage}
        selectedValue={selectedValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyles: {
    minHeight: '100%',
    backgroundColor: '#b9d453',
    paddingHorizontal: 10,
  },
  headerStyles: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  pickerWrapper: {
    height: 100,
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  pickerStyles: {
    width: '100%',
  },
});

export default BusinessScreen;
