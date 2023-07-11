import React from 'react'
import { View, Text } from 'react-native'
import { InputField } from '../Atoms'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const TodoListScreen = () => {
    return (
        <View>
            <InputField />
        </View>
    )
}

export default TodoListScreen;