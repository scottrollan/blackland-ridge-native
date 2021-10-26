import React, { useState, useEffect } from 'react';
import {
  View,
  Modal,
  Alert,
  TextInput,
  Picker,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { referralCategories } from '../data/referralCategories';
import customStyles from '../data/customStyles';
import { ScrollView } from 'react-native-gesture-handler';
import { referralsCollection } from '../firestore';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const NewReferralForm = ({
  newReferral,
  referralModalVisible,
  setReferralModalVisible,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('General');
  const [selectedSubCategory, setSelectedSubCategory] = useState('General');
  const [subCategories, setSubCategories] = useState([]);
  // const [dimensions, setDimensions] = useState({ window, screen });
  const selectCategory = (cat) => {
    setSelectedCategory(cat);
    const catObj = referralCategories.find(({ category }) => category === cat);
    let subCats = [];
    catObj.subcategories.forEach((sc) => {
      subCats = [...subCats, sc];
    });
    console.log(`subCats: ${subCats}`);
    setSubCategories([...subCats]);
  };
  // useEffect(() => {
  //   const subscription = Dimensions.addEventListener(
  //     'change',
  //     ({ window, screen }) => {
  //       setDimensions({ window, screen });
  //     }
  //   );
  //   return () => subscription?.remove();
  // }, []);

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
          <View style={styles.modalView}>
            {/* MODAL HEADER */}
            <View
              style={[styles.modalHeader, customStyles.horizontalLineBottom]}
            >
              <Text style={[styles.headerText, styles.text]}>
                Refer a New Person or Business
              </Text>
              <Text style={{ fontStyle: 'italic', textAlign: 'center' }}>
                Please fill in as much info as possible
              </Text>
            </View>
            {/* MODAL BODY */}
            <ScrollView style={[styles.modalBody]}>
              <Text>Business or Person's Name (*required)</Text>
              <TextInput style={styles.input} />
              <Text>
                In 500 characters or fewer, tell us why you would recommend this
                business. (* required)
              </Text>
              <TextInput
                style={styles.inputMultiLine}
                multiline
                numberOfLines={5}
                maxLength={500}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <View style={{}}>
                  <Text>Select Category (*required)</Text>
                  <Picker
                    selectedValue={selectedCategory}
                    onValueChange={(itemValue) => selectCategory(itemValue)}
                  >
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
                <View>
                  <Text>Subcategory(ies)</Text>
                  <Picker
                    selectedValue={selectedSubCategory}
                    onValueChange={(itemValue) =>
                      setSelectedSubCategory(itemValue)
                    }
                  >
                    {subCategories.map((sub) => {
                      return <Picker.Item label={sub} value={sub} key={sub} />;
                    })}
                  </Picker>
                </View>
              </View>
            </ScrollView>
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
                onPress={() => setReferralModalVisible(false)}
              >
                <Text>Submit</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: customStyles.centeredView,
  modalView: {
    backgroundColor: 'white',
    alignSelf: 'center',
    display: 'flex',
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
  modalHeader: {
    fontSize: 20,
    fontWeight: '400',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
  },
  input: {
    height: 40,
    marginBottom: 24,
    borderWidth: 1,
    padding: 10,
  },
  inputMultiLine: {
    // height: 200,
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

export default NewReferralForm;
