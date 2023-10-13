import { useState } from 'react';
import { Text, View, TouchableOpacity, Platform, Image } from 'react-native';
import Animation from '../../Components/Animation/index';
import { Input } from 'react-native-elements';
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import {
  primary,
  secundary,
  terciary,
  quaternary,
  quinternary,
} from '../../colors';
import { styles } from './style';

export default function Login({ navigation }) {
  const [showPass, setShowPass] = useState(true);

  return (
    <LinearGradient colors={[secundary, primary]} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle1}>My</Text>
        <Text style={styles.headerTitle2}>Finances</Text>
      </View>
      <View style={styles.content}>
        {Platform.OS === 'web' ? (
          <Image
            source={require('../../assets/loginFinances.png')}
            style={{ width: 300, height: 260 }}
          />
        ) : (
          <Animation
            animation="https://assets2.lottiefiles.com/packages/lf20_vo0zbstd.json"
            width={400}
            height={320}
          />
        )}
        <Input
          style={{ color: quaternary }}
          placeholder="Usuário"
          leftIcon={{ type: 'font-awesome', name: 'user', color: quinternary }}
        />
        <Input
          style={{ color: quaternary }}
          placeholder="Senha"
          leftIcon={{ type: 'font-awesome', name: 'lock', color: quinternary }}
          secureTextEntry={showPass}
          rightIcon=<TouchableOpacity onPress={() => setShowPass(!showPass)}>
            <Entypo name="eye" size={24} color={quinternary} />
          </TouchableOpacity>
        />

        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.buttonLogin}>
          <Text style={styles.buttonTextLogin}> Login </Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity style={styles.buttonCreate}>
            <Text style={styles.buttonTextCreate}>Criar uma conta</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonCreate}>
            <Text style={styles.buttonTextCreate}>Esqueci senha</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}
