import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

export default function Animation({animation,width,height}) {
  return (
    <View style={{ alignItems: 'center' }}>
      <LottieView
        source={{uri:animation}}
        autoPlay
        loop
        style={{width: width,
    height: height}}
      />
    </View>
  );
}


