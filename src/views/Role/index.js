import React from 'react';
import {View} from 'react-native';
import MainStyle from '../../constants/MainStyle';
import OutlineButton from '../../components/Button/OutlineButton';
import Heading from '../../components/Heading';
import {useNavigation} from '@react-navigation/native';
import userRole from '../../constants/userRole';

const Role = () => {
  const navigation = useNavigation();
  const handlePress = role => {
    navigation.navigate('Login', {state: {role: role}});
  };
  return (
    <View style={[MainStyle.flex, MainStyle.center]}>
      <Heading name={'What is your role?'} size={'lg'} variant={'primary'} />
      <OutlineButton
        title={'Member'}
        onPress={() => handlePress(userRole.member)}
        containerStyle={{marginTop: 24}}
      />
      <OutlineButton
        title={'Distributor'}
        onPress={() => handlePress(userRole.worker)}
        containerStyle={{marginTop: 24}}
      />
    </View>
  );
};

export default Role;
