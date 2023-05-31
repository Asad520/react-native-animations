import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('List')}
        style={styles.button}>
        <Text style={styles.text}>Shared Transition Tag Example</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E4053',
    paddingTop: 16,
  },
  button: {
    margin: 16,
    padding: 16,
    backgroundColor: 'coral',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#fff',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
