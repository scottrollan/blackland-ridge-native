import React, { useState } from 'react';
import { View, Text, Picker, Pressable, StyleSheet } from 'react-native';
import { referralCategories } from '../data/referralCategories';
import { FontAwesome } from '@expo/vector-icons';

const NewReferralFormCategories = ({ referralInput, setReferralInput }) => {
  const [selectedCategory, setSelectedCategory] = useState('General');
  const [subCategories, setSubCategories] = useState([
    { name: 'General', isSelected: false },
  ]);

  const selectCategory = (cat) => {
    setSelectedCategory(cat);
    setReferralInput({ ...referralInput, category: cat });
    const catObj = referralCategories.find(({ category }) => category === cat);
    let subCats = [];
    catObj.subcategories.forEach((sc) => {
      subCats = [...subCats, { name: sc, isSelected: false }];
    });
    setSubCategories([...subCats]);
  };

  const handleSubCheck = (i, currentVal) => {
    const newVal = !currentVal;
    let updatedSubs = [...subCategories];
    updatedSubs[i].isSelected = newVal;
    let subNamesOnly = [];
    updatedSubs.forEach((s) => {
      if (s.isSelected) {
        subNamesOnly = [...subNamesOnly, s.name];
      }
    });
    setReferralInput({ ...referralInput, subcategory: [...subNamesOnly] });
  };

  return (
    <View>
      <Text>Select Category (*required)</Text>
      <Picker
        selectedValue={selectedCategory}
        itemStyle={{ height: 100 }}
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

      <Text>Subcategory(ies)</Text>

      {subCategories.map((sub, index) => {
        return (
          <Pressable
            key={sub.name}
            style={styles.checkboxContainer}
            onPress={() => handleSubCheck(index, sub.isSelected)}
            // onPressIn={}
          >
            {sub.isSelected === true ? (
              <FontAwesome name="dot-circle-o" size={24} color="green" />
            ) : (
              <FontAwesome name="circle-o" size={24} color="black" />
            )}
            <Text style={styles.checkboxLabel}>{sub.name}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  checkbox: {
    alignSelf: 'center',
    height: 15,
    width: 15,
    marginHorizontal: 10,
  },
  checkboxLabel: {
    marginHorizontal: 10,
    fontSize: 20,
  },
});

export default NewReferralFormCategories;
