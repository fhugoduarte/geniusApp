import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Svg, {Circle, G, Path} from 'react-native-svg';

const colors = ['red', 'green', 'yellow', 'blue'];

export default function App() {
  const [selectedColor, setSelectedColor] = useState('');

  return (
    <View style={styles.container}>
      <Svg
        width="100%"
        height="100%"
        viewBox="0 0 220 220"
        style={styles.genius}>
        <G transform="translate(110,110)" stroke="#000" strokeWidth="5">
          <Path
            d="M0 0-70 70A99 99 0 0 1-70-70Z"
            fill={`#ff0000${selectedColor === 'red' ? '50' : 'ff'}`}
            onPress={() => setSelectedColor('red')}
          />

          <Path
            d="M0 0-70-70A99 99 0 0 1 70-70Z"
            fill={`#008800${selectedColor === 'green' ? '50' : 'ff'}`}
            onPress={() => setSelectedColor('green')}
          />

          <Path
            d="M0 0 70-70A99 99 0 0 1 70 70Z"
            fill={`#dddd00${selectedColor === 'yellow' ? '50' : 'ff'}`}
            onPress={() => setSelectedColor('yellow')}
          />

          <Path
            d="M0 0 70 70A99 99 0 0 1-70 70Z"
            fill={`#0044ee${selectedColor === 'blue' ? '50' : 'ff'}`}
            onPress={() => setSelectedColor('blue')}
          />
        </G>
      </Svg>

      <Svg width="202" height="202" style={styles.circleContainer}>
        <Circle
          cy="101"
          cx="101"
          r="80"
          stroke="#000"
          strokeWidth="10"
          fill="#fff"
        />
      </Svg>

      <Text style={styles.geniusTitle} numberOfLines={1}>
        Genius
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  genius: {
    transform: [{rotate: '45deg'}],
  },
  circleContainer: {
    position: 'absolute',
  },
  geniusTitle: {
    position: 'absolute',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
