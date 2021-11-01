import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import NewReferralFormCategories from './NewReferralFormCategories';
import customStyles from '../data/customStyles';

const NewReferralFormInputs = ({
  handleInput,
  submitNewReferral,
  referralInput,
  setReferralInput,
  setReferralModalVisible,
}) => {
  return (
    <View>
      {/* MODAL HEADER */}
      <View style={[styles.modalHeader, customStyles.horizontalLineBottom]}>
        <Text style={[styles.headerText, styles.text]}>
          Refer a New Person or Business
        </Text>
        <Text style={{ fontStyle: 'italic', textAlign: 'center' }}>
          Please fill in as much info as possible
        </Text>
      </View>
      {/* MODAL BODY */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView style={[styles.modalBody]}>
            <View>
              <Text>Business or Person's Name (*required)</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => handleInput(text, 'name')}
                autoCapitalize="words"
              />
              <Text>Phone</Text>
              <TextInput
                style={styles.input}
                type="tel"
                keyboardType="numeric"
                value={referralInput.phone}
                onChangeText={(text) => handleInput(text, 'phone')}
              />
              <Text>Email</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => handleInput(text, 'email')}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
              <Text>Address</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => handleInput(text, 'address')}
                autoCapitalize="words"
                autoCorrect={false}
              />
              <Text>Website</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => handleInput(text, 'link1')}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="https://example.com"
              />
            </View>
            <Text>
              In 500 characters or fewer, tell us why you would recommend this
              business. (* required)
            </Text>
            <TextInput
              style={styles.inputMultiLine}
              multiline
              autoCapitalize="sentences"
              numberOfLines={5}
              maxLength={500}
              onChangeText={(text) => handleInput(text, 'comments')}
            />
            {/* /////////imported category/subcategory selectors///////// */}
            <NewReferralFormCategories
              referralInput={referralInput}
              setReferralInput={setReferralInput}
            />
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      {/* MODAL FOOTER */}
      <View style={[styles.modalFooter, customStyles.horizontalLineTop]}>
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
  container: {
    flex: 1,
  },
  modalBody: {
    paddingBottom: 24,
    flex: 1,
  },
  input: {
    height: 40,
    marginBottom: 24,
    borderWidth: 1,
    padding: 10,
  },
  inputMultiLine: {
    marginBottom: 24,
    borderWidth: 1,
    padding: 10,
  },

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

export default NewReferralFormInputs;
