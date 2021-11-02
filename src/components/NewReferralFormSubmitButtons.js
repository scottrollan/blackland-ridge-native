import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import customStyles from '../data/customStyles';

const NewReferralFormSubmitButtons = ({
  setReferralModalVisible,
  submitNewReferral,
}) => {
  return (
    <View style={[styles.modalFooter, customStyles.horizontalLineTop]}>
      {/* MODAL FOOTER */}
      <Pressable
        style={[styles.buttonStyles, styles.cancel]}
        onPress={() => setReferralModalVisible(false)}
      >
        <Text>Cancel</Text>
      </Pressable>
      <Pressable
        style={[styles.buttonStyles, styles.submit]}
        onPress={() => submitNewReferral()}
      >
        <Text>Submit</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  modalFooter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  buttonStyles: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 10,
  },
  cancel: {
    backgroundColor: customStyles.mutedGoogleRed,
  },
  submit: {
    backgroundColor: customStyles.colorPalletteMutedAccent,
  },
});

export default NewReferralFormSubmitButtons;
