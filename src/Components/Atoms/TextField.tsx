import React, { FC } from 'react'
import { View, Text, StyleProp, TextStyle, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface TextFieldProps {
  label: string;
  style?: StyleProp<TextStyle>
}

const TextField: FC<TextFieldProps> = ({ label, style }) => {
  return (
    <Text style={[styles.labelStyles, style]} >{label}</Text>
  )
}

export default TextField;

const styles = StyleSheet.create({
  labelStyles: {
    color: 'black',
    fontSize: wp('4%')
  }
})