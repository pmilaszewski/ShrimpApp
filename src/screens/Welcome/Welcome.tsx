import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {useAppNavigation} from '../../navigation/useAppNavigation';
import {useStyles} from './welcome.styles';

export const Welcome = () => {
  const styles = useStyles();
  const {navigate} = useAppNavigation();

  useEffect(() => {
    setTimeout(() => navigate('Tab', {screen: 'Zwierzaczki'}), 2000);
  }, [navigate]);

  return (
    <View style={styles.main}>
      <Image
        style={styles.image}
        source={require('../../assets/ShrimpApp.png')}
      />
    </View>
  );
};
