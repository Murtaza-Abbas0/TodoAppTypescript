import React, { FC, ReactNode } from 'react';
import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface ButtonProps {
    title?: string;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
    children?: ReactNode;
}

const Button: FC<ButtonProps> = ({ title, onPress, style, children }) => {
    return (
        <TouchableOpacity
            style={[styles.button, style]}
            onPress={onPress}
        >
            {children ? (
                children
            ) : (
                <Text style={styles.buttonText}>{title}</Text>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#007AFF',
        borderRadius: wp('5%'),
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: wp('4%'),
        fontWeight: 'bold',
    },
});

export default Button;
