import React from 'react';
import {
  View,
  FlatList,
  Pressable,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const buttons = [
    {
      nav: 'Message',
      buttonText: 'Message Board',
      icon1: <FontAwesome5 name="comment-alt" size={24} color="black" />,
      icon2: <FontAwesome5 name="comment-alt" size={24} color="black" />,
    },
    {
      nav: 'Business',
      buttonText: 'Business Referrals',
      icon1: <FontAwesome name="handshake-o" size={24} color="black" />,
      icon2: <FontAwesome name="handshake-o" size={24} color="black" />,
    },
    {
      nav: 'Directory',
      buttonText: 'Neighbor Directory',
      icon1: <FontAwesome5 name="address-book" size={24} color="black" />,
      icon2: <FontAwesome5 name="address-book" size={24} color="black" />,
    },
    {
      nav: 'Kids',
      buttonText: 'Kids for Hire',
      icon1: <FontAwesome5 name="baby" size={24} color="black" />,
      icon2: (
        <FontAwesome5 name="canadian-maple-leaf" size={24} color="black" />
      ),
    },
    {
      nav: 'Pets',
      buttonText: 'Pet Registry',
      icon1: <FontAwesome5 name="dog" size={24} color="black" />,
      icon2: <FontAwesome5 name="cat" size={24} color="black" />,
    },
    {
      nav: 'Photo',
      buttonText: 'Photo Albums',
      icon1: <FontAwesome name="photo" size={24} color="black" />,
      icon2: <FontAwesome name="photo" size={24} color="black" />,
    },
    {
      nav: 'Pay',
      buttonText: 'Pay Dues',
      icon1: <FontAwesome name="paypal" size={24} color="black" />,
      icon2: <FontAwesome name="paypal" size={24} color="black" />,
    },
  ];

  return (
    <View style={styles.viewStyles}>
      <Image
        source={require('../../assets/walkingInBR.jpg')}
        style={styles.imageStyles}
      />
      <FlatList
        style={styles.flatListStyles}
        data={buttons}
        keyExtractor={(button) => button.nav}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() => navigation.navigate(item.nav)}
              style={styles.buttonStyles}
            >
              {item.icon1}
              <Text style={styles.textStyles}>{item.buttonText}</Text>
              {item.icon2}
            </Pressable>
          );
        }}
      />
    </View>
  );
};
const imageHeight = 100;

const styles = StyleSheet.create({
  viewStyles: {
    minHeight: '100%',
    width: '100%',
    backgroundColor: '#94eff5',
    alignItems: 'center',
    margin: 0,
    padding: 0,
  },
  headingStyles: {
    fontSize: 25,
    color: 'black',
  },
  flatListStyles: {
    paddingBottom: 0,
    alignSelf: 'flex-start',
    width: '100%',
  },
  buttonStyles: {
    backgroundColor: '#b9d453',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyles: {
    fontSize: 20,
    color: 'black',
  },
  imageStyles: {
    width: '100%',
    height: imageHeight,
  },
});

export default HomeScreen;
