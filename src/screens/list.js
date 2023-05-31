import React from 'react';
import {
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View,
} from 'react-native';
import {cityData} from '../data/cities';
import Animated from 'react-native-reanimated';

const GridItem = ({city, navigation, index}) => (
  <TouchableOpacity
    style={styles.gridItem}
    onPress={() => navigation.navigate('Detail', {city})}>
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
  </TouchableOpacity>
);

export const CityList = ({navigation}) => (
  <View style={styles.wrapper}>
    <FlatList
      data={cityData}
      numColumns={2}
      renderItem={({item, index}) => (
        <GridItem city={item} navigation={navigation} index={index} />
      )}
      keyExtractor={(item, index) => String(index)}
      contentContainerStyle={styles.container}
    />
  </View>
);

const styles = StyleSheet.create({
  wrapper: {backgroundColor: '#2E4053'},
  container: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    backgroundColor: '#2E4053',
  },
  gridItem: {
    flex: 1,
    margin: 8,
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width / 2 - 24, // Adjust width based on your desired layout
    height: 150, // Adjust height as needed
    resizeMode: 'cover',
  },
  cityName: {
    marginTop: 8,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
