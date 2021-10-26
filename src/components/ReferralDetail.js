import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { dialNumber, sendEmail, visitSite } from '../functions/FireLinking';
import customStyles from '../data/customStyles';

const ReferralDetail = ({ referral }) => {
  const subcat = [...referral.subcategory];
  return (
    <View style={styles.detailWrapper}>
      <Text style={styles.name}>{referral.name}</Text>
      <View style={{ paddingVertical: 10 }}>
        {subcat.map((s) => {
          return <Text key={s}>{s}</Text>;
        })}
      </View>
      <Text style={styles.comment}>{referral.comments}</Text>
      <Text style={{ alignSelf: 'flex-end', paddingVertical: 10 }}>
        -&nbsp;{referral.referrer}
      </Text>
      <View style={customStyles.horizontalLineTop} />
      {referral.phone ? (
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => dialNumber(referral.phone)}
        >
          <Text>{referral.phone}</Text>
        </TouchableOpacity>
      ) : null}
      {referral.email ? (
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => sendEmail(referral.email)}
        >
          <Text>{referral.email}</Text>
        </TouchableOpacity>
      ) : null}

      {referral.link1 ? (
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => visitSite(referral.link1)}
        >
          <Text>Visit their website here.</Text>
        </TouchableOpacity>
      ) : null}
      {referral.address ? <Text>{referral.address}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  detailWrapper: {
    minWidth: 100,
    backgroundColor: customStyles.colorPalletteAccent,
    margin: 10,
    padding: 12,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    textAlign: 'center',
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  comment: {
    fontStyle: 'italic',
  },
  touchable: {
    paddingBottom: 10,
    fontSize: 16,
  },
});

export default ReferralDetail;
