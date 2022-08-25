import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {QueryClient, QueryClientProvider} from 'react-query';
import {providers} from './src/constate';
import Compose from './src/utils/compose';
import {AppNavigator} from './src/navigation/MainNavigator';
import {colors} from './src/utils';

const queryClient = new QueryClient();

const App = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <QueryClientProvider client={queryClient}>
        <Compose components={providers}>
          <AppNavigator />
        </Compose>
      </QueryClientProvider>
    </SafeAreaView>
  );
};

// const Home = () => {
//   const {isLoading, list, refetch} = useList();
//   const {mutate} = useUserData();

//   return (
//     <View style={styles.main}>
//       <ActivityIndicator animating={isLoading} size={'large'} color={'#fff'} />
//       <Button title={'Get data'} onPress={refetch} />
//       <Button title={'Push data'} onPress={() => mutate()} />
//     </View>
//   );
// };

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.lightPink,
  },
});

export default App;
