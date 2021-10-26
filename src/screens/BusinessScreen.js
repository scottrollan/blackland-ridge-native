import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Picker, Text, Pressable } from 'react-native';
import ReferralsList from '../components/ReferralsList';
import NewReferralForm from '../components/NewReferralForm';
import { referralCategories } from '../data/referralCategories';
import useReferralsResults from '../hooks/useReferralsResults';
import { FontAwesome } from '@expo/vector-icons';
import customStyles from '../data/customStyles';

const BusinessScreen = () => {
  const [selectedValue, setSelectedValue] = useState('All');
  const [newReferral, setNewReferral] = useState({});
  const [referralModalVisible, setReferralModalVisible] = useState(false);
  const [referrals, errorMessage] = useReferralsResults();

  return (
    <View style={styles.viewStyles}>
      <Text style={styles.headerStyles}>Business Referrals</Text>
      <Pressable onPress={() => setReferralModalVisible(true)}>
        <FontAwesome name="plus-square" size={40} style={styles.addButton} />
      </Pressable>
      <NewReferralForm
        referralModalVisible={referralModalVisible}
        setReferralModalVisible={setReferralModalVisible}
      />
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
    backgroundColor: customStyles.colorPalletteMutedAccent,
    paddingHorizontal: 10,
  },
  addButton: {
    color: customStyles.colorPalletteAccent,
    textAlign: 'center',
    paddingTop: 10,
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
