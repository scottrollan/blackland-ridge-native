import React from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';

const PayScreen = () => {
  return (
    <View style={styles.viewStyles}>
      <Text style={styles.textStyles}>Pay Dues</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyles: {
    minHeight: '100%',
    backgroundColor: '#b9d453',
    alignItems: 'center',
  },
  textStyles: {
    fontSize: 20,
    color: 'white',
  },
});

export default PayScreen;
