import { useState, useCallback } from 'react';
import { ScrollView, View, StyleSheet, RefreshControl } from 'react-native';
import Header from './components/Header/index';
import Balance from './components/Balance/index';
import Actions from './components/Actions/index';
import LoadingAnimation from '../../Components/Loading/index';
import { primary } from '../../colors';

export default function Home() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {refreshing ? 
        <View style={styles.loadingAnimation}>
          <LoadingAnimation />
        </View>
       : 
        <View style={styles.container}>
          <View>
            <Header />
          </View>

          <View>
            <Balance />
          </View>

          <View>
            <Actions />
          </View>
        </View>
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary,
  },
  loadingAnimation: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:60
  },
});
