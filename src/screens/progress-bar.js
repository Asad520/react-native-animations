/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  withSpring,
} from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';

export const ProgressBar = ({route}) => {
  const animatedProgress = useSharedValue(0);

  const changeProgress = () => {
    animatedProgress.value = withSpring(
      Math.random() * (Dimensions.get('window').width - 22 - 22) + 22,
      {overshootClamping: false, mass: 2},
    );
  };

  return (
    <SafeAreaView style={styles.wrapper} edges={['left', 'right', 'bottom']}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.bar}>
          <Text style={styles.progressText}>Progress Bar</Text>
          <Animated.View
            style={{
              ...styles.animatedBar,
              width: animatedProgress,
            }}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={changeProgress}>
          <Text style={styles.buttonText}>Change Progress</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    width: 200,
    padding: 8,
    backgroundColor: '#3399ff',
    alignSelf: 'center',
  },
  animatedBar: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '95%',
    backgroundColor: 'coral',
    borderRadius: 32,
  },
  bar: {
    width: Dimensions.get('window').width - 32,
    height: Dimensions.get('window').width * 0.15,
    borderRadius: 32,
    borderColor: '#fff',
    borderWidth: 2,
    justifyContent: 'center',
    padding: 4,
  },
  progressText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    position: 'absolute',
    zIndex: 1,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  wrapper: {
    backgroundColor: '#2E4053',
    flex: 1,
  },
  container: {
    backgroundColor: '#2E4053',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
});
