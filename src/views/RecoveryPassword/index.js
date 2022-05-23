import React from 'react';
import Heading from '../../components/Heading';
import {Pressable, View} from 'react-native';
import MainStyle from '../../constants/MainStyle';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/Button/Button';
import OutlineTextInput from '../../components/TextInput/OutlineTextInput';
import Theme from '../../constants/theme';

const Recovery = () => {
  const navigation = useNavigation();

  return (
    <View style={[MainStyle.flex, MainStyle.center]}>
      <Heading name={'Recover password'} size={'lg'} variant={'primary'} />
      <OutlineTextInput
        placeholder={'Email'}
        containerStyle={{marginTop: 24}}
      />
      <Button
        title={'Send rest link'}
        variant={'secondary'}
        containerStyle={{marginTop: 24}}
      />

      <View
        style={{
          width: '100%',
          paddingRight: 16,
          flexDirection: 'row',
          marginTop: 24,
          justifyContent: 'center',
        }}>
        <Heading
          name={'Remember your password?'}
          style={{textAlign: 'right', color: Theme.textDarkColor}}
          variant={'outline'}
        />
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Heading
            name={' Log in'}
            style={{textAlign: 'right', color: Theme.textSecondaryColor}}
            variant={'outline'}
            containerStyle={{width: '25%'}}
          />
        </Pressable>
      </View>
      {/*<Button*/}
      {/*  title={'Log in'}*/}
      {/*  variant={'outline'}*/}
      {/*  containerStyle={{marginTop: 24}}*/}
      {/*  onPress={() => navigation.navigate('Login')}*/}
      {/*/>*/}
    </View>
  );
};

export default Recovery;
