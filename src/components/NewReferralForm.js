import React, { useState } from 'react';
import {
  ActivityIndicator,
  View,
  Modal,
  Alert,
  StyleSheet,
  Dimensions,
} from 'react-native';
import NewReferralFormInputs from './NewReferralFormInputs';
import customStyles from '../data/customStyles';
import { formatPhoneNumber } from '../functions/FormatPhoneNumber';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const NewReferralForm = ({ referralModalVisible, setReferralModalVisible }) => {
  const [activity, setActivity] = useState(false);
  const emptyReferral = {
    category: 'General',
    comments: '',
    email: '',
    image: '',
    link1: '',
    name: '',
    phone: '',
    rating: [],
    subcategory: [],
  };
  const [referralInput, setReferralInput] = useState({ emptyReferral });

  const handleInput = (val, el) => {
    if (el === 'phone') {
      let num = formatPhoneNumber(val);
      setReferralInput({ ...referralInput, phone: num });
    } else {
      setReferralInput({ ...referralInput, [el]: val });
    }
  };

  const submitNewReferral = () => {
    console.log(JSON.stringify(referralInput));
    setActivity(true);
    setReferralInput({ ...emptyReferral });
    setTimeout(() => setActivity(false), 2000);
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={referralModalVisible}
        onRequestClose={() => {
          Alert.alert('Modal Closed.');
          setReferralModalVisible(!referralModalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View
            style={[
              styles.modalView,
              // !activity ? { display: 'flex' } : { display: 'none' },
            ]}
          >
            <View
              style={[activity ? { display: 'flex' } : { display: 'none' }]}
            >
              <ActivityIndicator
                size="large"
                color={customStyles.colorPalletteAccent}
                style={{ flex: 1 }}
              />
            </View>
            <View
              style={[!activity ? { display: 'flex' } : { display: 'none' }]}
            >
              <NewReferralFormInputs
                handleInput={handleInput}
                submitNewReferral={submitNewReferral}
                referralInput={referralInput}
                setReferralInput={setReferralInput}
                setReferralModalVisible={setReferralModalVisible}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: customStyles.centeredView,
  container: {
    flex: 1,
  },
  modalView: {
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderColor: customStyles.overlayDark,
    borderWidth: 3,
    borderRadius: 10,
    margin: 15,
    width: window.width - 30,
    height: window.height - 30,
  },
});

export default NewReferralForm;
