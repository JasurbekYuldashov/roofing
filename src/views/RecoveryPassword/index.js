import React from 'react';
import Heading from '../../components/Heading';
import {View} from 'react-native';
import MainStyle from '../../constants/MainStyle';

const Recovery = () => {
  return (
    <View style={[MainStyle.center, MainStyle.flex]}>
      <Heading name={'Recovery'} />
    </View>
  );
};

export default Recovery;
