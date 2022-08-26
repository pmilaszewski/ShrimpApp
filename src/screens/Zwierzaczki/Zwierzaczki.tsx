/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useStyles} from './zwierzaczki.styles';
import {useCats, useDogs} from '../../constate';
import {colors} from '../../utils';

export const Zwierzaczki = () => {
  const [isDogs, setIsDogs] = useState(true);
  const styles = useStyles();
  const {cats, loading: isLoadingCats, refetch: refetchCats} = useCats();
  const {dogs, loading: isLoadingDogs, refetch: refetchDogs} = useDogs();

  const valid = !!dogs[0]?.url && !!cats[0]?.url;

  useEffect(() => {
    isDogs ? refetchDogs() : refetchCats();
  }, [isDogs]);

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Pressable
          style={isDogs ? styles.pressableChecked : styles.pressable}
          onPress={() => setIsDogs(true)}>
          <Text
            style={isDogs ? styles.pressableTextChecked : styles.pressableText}>
            Pjeski
          </Text>
        </Pressable>
        <Pressable
          style={!isDogs ? styles.pressableChecked : styles.pressable}
          onPress={() => setIsDogs(false)}>
          <Text
            style={
              !isDogs ? styles.pressableTextChecked : styles.pressableText
            }>
            Kotły
          </Text>
        </Pressable>
      </View>
      <View style={styles.container}>
        {(isLoadingCats || isLoadingDogs) && valid ? (
          <View style={styles.image}>
            <ActivityIndicator
              size={'large'}
              color={colors.lightPink}
              animating={true}
            />
          </View>
        ) : (
          <Image
            source={{uri: isDogs ? dogs[0]?.url : cats[0]?.url}}
            style={styles.image}
          />
        )}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => (isDogs ? refetchDogs() : refetchCats())}>
          <Text style={styles.buttonText}>
            Kolejny {isDogs ? 'Pjeseczek' : 'Kocioł'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
