import React from 'react';
import Heading from '../../components/Heading';
import {View} from 'react-native';
import MainStyle from '../../constants/MainStyle';

const Register = () => {
  return (
    <View style={[MainStyle.center, MainStyle.flex]}>
      <Heading name={'Register'} />
    </View>
  );
};

export default Register;
