import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import {useStyles} from './pimpek.styles';

export const Pimpek = () => {
  const styles = useStyles();

  const open1Photo = () =>
    Linking.openURL(
      'https://www.instagram.com/p/CfkZYa5sLPhXgE3wERKC9D3EuyPu92eGGhvJoE0/',
    );

  const open2Photo = () =>
    Linking.openURL(
      'https://www.instagram.com/p/CRr2VegJMVGp61aMXUUkRpp13C0ZphOn4WElQQ0/',
    );

  const open3Photo = () =>
    Linking.openURL(
      'https://www.instagram.com/p/Bm5K2SblTDkhMCE4hIoV28zKCN5MbgAj8cBYIo0/',
    );

  return (
    <View style={styles.main}>
      <Text style={styles.text}>A oto twórca tej przezajebistej apki</Text>
      <Text style={styles.title}>TWOJA BARYŁA!</Text>
      <Image style={styles.image} source={require('../../assets/pimpek.png')} />
      <View style={styles.bottomContainer}>
        <Text style={styles.text}>
          Obyśmy zawsze się tak kochali i wspominali najlepsze momenty naszego
          wspólnego związku tak jak{' '}
          <Text onPress={open1Photo} style={styles.link}>
            tutaj
          </Text>
          ,{' '}
          <Text onPress={open2Photo} style={styles.link}>
            tutaj
          </Text>{' '}
          i{' '}
          <Text onPress={open3Photo} style={styles.link}>
            tutaj
          </Text>
          {' <3'}
        </Text>
      </View>
    </View>
  );
};
