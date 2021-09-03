import React from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';

const DirectoryScreen = () => {
  return (
    <View style={styles.viewStyles}>
      <Text style={styles.textStyles}>This is the Neighbor Directory</Text>
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

export default DirectoryScreen;
