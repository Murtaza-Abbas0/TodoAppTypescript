import React from 'react'
import { View, Text } from 'react-native'
import { Button, TextField } from '../Atoms'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const TodoListScreen = () => {
    return (
        <View>
            <TextField style={{ alignSelf: 'center', textAlignVertical: 'bottom' }} label='Testuing' />
        </View>
    )
}

export default TodoListScreen;