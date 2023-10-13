import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { FontAwesome5 } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { quaternary, quinternary, terciary } from '../../../../../colors';
export default function Profile() {
  const [image, setImage] = useState(null);

  const openImagePicker = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access media library denied');
      return;
    }

    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      if (!result.cancelled) {
        setImage(result.uri);
      }
    } catch (error) {
      console.log('Error selecting image: ', error);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openImagePicker}>
        {image == null ? (
          <View style={styles.icon}>
            <FontAwesome5 name="user-edit" size={40} color={quinternary} />
          </View>
        ) : (
          <Image source={{ uri: image }} style={styles.image} />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 48,
  },
});
