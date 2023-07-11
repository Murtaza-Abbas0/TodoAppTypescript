import React, { FC, useState } from 'react';
import { TextInput, StyleSheet, TextInputProps, StyleProp } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface InputField extends TextInputProps {
    style?: StyleProp<TextInputProps>
}

const InputField: FC<InputField> = ({ ...props }) => {
    const [value, setValue] = useState('');

    const handleChangeText = (text: string) => {
        console.log(text);

        setValue(text);
    };

    return (
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={handleChangeText}
            {...props}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        height: wp('10%'),
        width: wp('90%'),
        alignSelf: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: wp('3%')
    },
});

export default InputField;
