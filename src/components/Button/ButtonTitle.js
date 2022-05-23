import React from 'react';
import {Text} from 'react-native';

const ButtonTitle = props => {
  return <Text {...props}>{props.children}</Text>;
};

export default ButtonTitle;
