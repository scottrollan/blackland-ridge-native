import React, { useState } from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  Modal,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ScrollView,
  StyleSheet,
  Dimensions,
  Pressable,
} from 'react-native';
import NewReferralFormInputs from './NewReferralFormInputs';
import customStyles from '../data/customStyles';
import NewReferralFormHeader from './NewReferralFormHeader';
import NewReferralFormSubmitButtons from './NewReferralFormSubmitButtons';

const window = Dimensions.get('window');

const NewReferralForm = ({ referralModalVisible, setReferralModalVisible }) => {
  const [activity, setActivity] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [errorMessageShow, setErrorMessageShow] = useState(false);
  const emptyReferral = {
    category: '^^',
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

  const submitNewReferral = () => {
    console.log(JSON.stringify(referralInput));

    switch (true) {
      case !referralInput.name || !referralInput.comments:
        setErrorMessage('Please fill in all *required fields.');
        setErrorMessageShow(true);
        break;
      case referralInput.phone && referralInput.phone.length < 13:
        setErrorMessage('Please enter a valid phone number.');
        setErrorMessageShow(true);
        break;
      case referralInput.category === '^^':
        setErrorMessage('Please select a category.');
        setErrorMessageShow(true);
        break;
      default:
        setActivity(true);
        setReferralInput({ ...emptyReferral });
        setTimeout(() => {
          setActivity(false);
          setReferralModalVisible(false);
        }, 2000);
    }
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
              style={[
                errorMessageShow ? { display: 'flex' } : { display: 'none' },
                { flex: 1, alignItems: 'center', justifyContent: 'center' },
              ]}
            >
              <Text>{errorMessage}</Text>
              <Pressable onPress={() => setErrorMessageShow(false)}>
                <Text style={styles.buttonStyles}>Close</Text>
              </Pressable>
            </View>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.container}
            >
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView style={[styles.modalBody]}>
                  <View
                    style={[
                      !activity && !errorMessageShow
                        ? { display: 'flex' }
                        : { display: 'none' },
                    ]}
                  >
                    {/* MODAL HEADER */}
                    <NewReferralFormHeader />
                    {/* MODAL BODY */}
                    <NewReferralFormInputs
                      submitNewReferral={submitNewReferral}
                      referralInput={referralInput}
                      setReferralInput={setReferralInput}
                      setReferralModalVisible={setReferralModalVisible}
                    />
                    {/* MODAL FOOTER */}
                    <NewReferralFormSubmitButtons
                      setReferralModalVisible={setReferralModalVisible}
                      submitNewReferral={submitNewReferral}
                    />
                  </View>
                </ScrollView>
              </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
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
  container: {
    flex: 1,
  },
  modalBody: {
    paddingBottom: 24,
    flex: 1,
  },
  buttonStyles: {
    backgroundColor: customStyles.colorPalletteMutedAccent,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 10,
  },
});

export default NewReferralForm;
