import React from 'react';
import {Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import Animated from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';

export const CityDetail = ({route}) => {
  const {city} = route.params;
  return (
    <SafeAreaView style={styles.wrapper} edges={['left', 'right', 'bottom']}>
      <ScrollView contentContainerStyle={styles.container}>
        <Animated.Image
          sharedTransitionTag={`image-${city.id}`}
          source={{uri: city.image}}
          style={styles.image}
        />
        <Animated.Text
          style={styles.cityName}
          sharedTransitionTag={`text-${city.id}`}>
          {city.name}
        </Animated.Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          faucibus metus. Nulla facilisi. Aliquam tempus risus in diam feugiat,
          non tempor felis volutpat. Lorem non tempor felis volutpat ipsum dolor
          sit amet, consectetur adipiscing elit. Sed vitae faucibus metus. Nulla
          facilisi. Aliquam tempus risus in diam feugiat, non tempor felis
          volutpat. {'\n\n'}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          faucibus metus. Nulla facilisi. Aliquam tempus risus in diam feugiat,
          non tempor felis volutpat. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed vitae faucibus metus. Nulla facilisi. Aliquam
          tempus risus in diam feugiat, non tempor felis volutpat. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed vitae faucibus metus.
          Nulla facilisi. Aliquam tempus risus in diam feugiat, non tempor felis
          volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          vitae faucibus metus. Nulla facilisi. Aliquam tempus risus in diam
          feugiat, non tempor felis volutpat. {'\n'}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#2E4053',
    flex: 1,
  },
  container: {
    backgroundColor: '#2E4053',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  image: {
    width: Dimensions.get('window').width - 16,
    height: Dimensions.get('window').width * 0.6,
    resizeMode: 'cover',
    borderRadius: 8,
    alignSelf: 'center',
  },
  cityName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 16,
    color: '#fff',
  },
  description: {
    fontSize: 16,
    color: '#fff',
  },
});
