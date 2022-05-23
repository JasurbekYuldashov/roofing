import React from 'react';
import Heading from '../../components/Heading';
import {Pressable, View} from 'react-native';
import MainStyle from '../../constants/MainStyle';
import {useNavigation} from '@react-navigation/native';
import Theme from '../../constants/theme';
import Button from '../../components/Button/Button';
import OutlineTextInput from '../../components/TextInput/OutlineTextInput';

const Register = () => {
  const navigation = useNavigation();

  return (
    <View style={[MainStyle.flex, MainStyle.center]}>
      <Heading name={'Sign up'} size={'lg'} variant={'primary'} />
      <OutlineTextInput
        placeholder={'Email'}
        containerStyle={{marginTop: 24}}
      />
      <OutlineTextInput
        placeholder={'Password'}
        containerStyle={{marginTop: 24}}
        isSecure
      />
      <Button
        title={'Sign up'}
        variant={'secondary'}
        containerStyle={{marginTop: 24}}
      />
      <Button
        title={'Log in'}
        variant={'outline'}
        containerStyle={{marginTop: 24}}
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default Register;
