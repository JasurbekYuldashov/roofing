import React from 'react';
import AnimatedButton from './AnimatedButton';
import ButtonTitle from './ButtonTitle';
import Theme from '../../constants/theme';
import {StyleSheet, View} from 'react-native';

const OutlineButton = props => {
  const {title, containerStyle} = props;
  return (
    <View style={[{width: '100%'}, containerStyle]}>
      <AnimatedButton style={styles.button} {...props}>
        <ButtonTitle
          style={{
            textAlign: 'center',
            fontFamily: Theme.fontBold,
            color: Theme.secondaryColor,
          }}>
          {title}
        </ButtonTitle>
      </AnimatedButton>
    </View>
  );
};

export default OutlineButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    // width: '100%',
    borderWidth: 1,
    borderColor: Theme.secondaryColor,
    height: 48,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
});
