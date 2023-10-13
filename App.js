import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './Routes';
import { terciary } from './colors';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor={terciary}
        translucent={true}
        networkActivityIndicatorVisible={true}
        animated={true}
        showHideTransition={'slide'}
      />
      <Routes />
    </NavigationContainer>
  );
}
