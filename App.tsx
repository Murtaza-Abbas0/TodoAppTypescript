import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const App = () => {
  return (
    <View style={styles.mainContainer} >
      <Text>App</Text>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center'
  }
})