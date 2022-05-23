import React from 'react';
import {Text} from 'react-native';
import Theme from '../../constants/theme';

const Heading = ({name, size, variant, style}) => {
  // const {name, size, variant, style} = props;
  return (
    <Text
      style={[
        {
          fontSize:
            size === 'xl'
              ? 64
              : size === 'lg'
              ? 32
              : size === 'md'
              ? 24
              : size === 'sm'
              ? 18
              : 12,
          color:
            variant === 'primary'
              ? Theme.textDarkColor
              : variant === 'secondary'
              ? Theme.primaryColor
              : variant === 'outline'
              ? Theme.textSecondaryColor
              : Theme.textDarkColor,
        },
        style,
      ]}>
      {name}
    </Text>
  );
};

export default Heading;
