import React, {useRef} from 'react';
import {Animated, StyleSheet, Pressable} from 'react-native';
import Theme from "../../constants/theme";

const AnimatedButton = props => {
  const animated = useRef(new Animated.Value(1)).current;
  const fadeIn = () => {
    Animated.timing(animated, {
      toValue: 0.4,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const onPress = () => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 0,
      useNativeDriver: false,
    }).start();
    props.onPress();
  };

  return (
    <Pressable
      onPressIn={fadeIn}
      onPressOut={fadeOut}
      {...props}
      onPress={onPress}
      style={[{position: 'relative', overflow: 'hidden'}, props.style]}>
      {props.children}
      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: animated.interpolate({
            inputRange: [0, 1],
            outputRange: [Theme.secondaryColor, 'rgba(0,0,0,0)'],
          }),
        }}
      />
    </Pressable>
  );
};

export default AnimatedButton;

AnimatedButton.defaultProps = {
  onPress: () => {},
};
