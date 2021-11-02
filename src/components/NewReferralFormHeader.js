import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NewReferralFormHeader = () => {
  return (
    <View style={[styles.modalHeader, customStyles.horizontalLineBottom]}>
      <Text style={[styles.headerText, styles.text]}>
        Refer a New Person or Business
      </Text>
      <Text style={{ fontStyle: 'italic', textAlign: 'center' }}>
        Please fill in as much info as possible
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  modalHeader: {
    fontSize: 20,
    fontWeight: '400',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
  },
});

export default NewReferralFormHeader;
