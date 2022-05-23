import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Theme from '../../constants/theme';

const OutlineTextInput = props => {
  const {style, placeholder, containerStyle,isSecure} = props;
  return (
    <View style={[{width: '100%'}, containerStyle]}>
      <TextInput
        placeholder={placeholder}
        {...props}
        style={[styles.input, style]}
        secureTextEntry={isSecure}
      />
    </View>
  );
};

export default OutlineTextInput;

const styles = StyleSheet.create({
  input: {
    borderColor: Theme.secondaryColor,
    borderWidth: 1,
    marginHorizontal: 16,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 18,
  },
});
