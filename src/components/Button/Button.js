import React from 'react';
import AnimatedButton from './AnimatedButton';
import ButtonTitle from './ButtonTitle';
import Theme from '../../constants/theme';
import {StyleSheet, View} from 'react-native';

const Button = props => {
  const {title, containerStyle, variant} = props;
  return (
    <View style={[{width: '100%'}, containerStyle]}>
      <AnimatedButton
        style={[
          styles.button,
          {
            backgroundColor:
              variant === 'primary'
                ? Theme.primaryColor
                : variant === 'secondary'
                ? Theme.secondaryColor
                : variant === 'outline'
                ? 'transparent'
                : Theme.secondaryColor,
          },
        ]}
        {...props}>
        <ButtonTitle
          style={{
            textAlign: 'center',
            fontFamily: Theme.fontBold,
            color:
              variant === 'outline'
                ? Theme.secondaryColor
                : Theme.textWhiteColor,
          }}>
          {title}
        </ButtonTitle>
      </AnimatedButton>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    // width: '100%',
    // borderWidth: 1,
    backgroundColor: Theme.secondaryColor,
    height: 48,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
});
