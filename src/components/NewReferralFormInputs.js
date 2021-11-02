import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import NewReferralFormCategories from './NewReferralFormCategories';
import { formatPhoneNumber } from '../functions/FormatPhoneNumber';
import customStyles from '../data/customStyles';

const NewReferralFormInputs = ({ referralInput, setReferralInput }) => {
  const handleInput = (val, el) => {
    switch (el) {
      case 'phone':
        let num = formatPhoneNumber(val);
        setReferralInput({ ...referralInput, phone: num });
        break;
      default:
        setReferralInput({ ...referralInput, [el]: val });
        break;
    }
  };
  return (
    <View>
      {/* MODAL BODY */}

      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <Text>
            Business or Person's Name (
            <Text style={{ color: customStyles.googleRed }}>*required</Text>)
          </Text>
        </View>
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
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
        <Text>
          In 500 characters or fewer, tell us why you would recommend this
          business. (
          <Text style={{ color: customStyles.googleRed }}>*required</Text>)
        </Text>
      </View>
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
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default NewReferralFormInputs;
