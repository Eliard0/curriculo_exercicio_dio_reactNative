import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native';
import Card from './components/card';
import Icon from 'react-native-vector-icons/Feather';
import foto from './assets_proje/foto.jpg';

export default function App() {

  function handleRedeSociais(rede_social) {
    switch (rede_social) {
      case 'linkedin':
        Alert.alert('Meu Linkedin: ','https://www.linkedin.com/in/eliardo-silva-6b8541187/')
        break;

      case 'instagram':
        Alert.alert('Meu Instagram: ','https://www.instagram.com/eliardo_venancio')
        break;

      case 'github':
        Alert.alert('Meu github: ','https://github.com/Eliard0/')
        break;
    }
  }
  return (
    <>
      <View style={styles.page}>
        <View style={styles.container}>
          <Image source={foto} style={styles.imagem} />
          <Text style={styles.nome}>Eliardo Venancio</Text>
          <Text style={styles.cargo}>Desenvolvedor junior</Text>
          <Text>Ola mundo</Text>

          <View style={styles.redes_sociais}>
            <TouchableOpacity onPress={()=>handleRedeSociais('linkedin')}>
              <Icon name="linkedin" size={28} color='blue' />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>handleRedeSociais('instagram')}>
              <Icon name="instagram" size={28} color='blue' />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>handleRedeSociais('github')}>
              <Icon name="github" size={28} color='blue' />
            </TouchableOpacity>

          </View>

         <Card/>

          <StatusBar style="auto" />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#E7E7E7',
  },

  container: {
    flex: 1,
    backgroundColor: '#E7E7E7',
    alignItems: 'center',
    marginTop: 100
  },

  imagem: {
    width: 240,
    height: 240,
    borderRadius: 125
  },

  nome: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },

  cargo: {
    color: '#939393',
    marginBottom: 10,
  },

  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '55%',
    marginTop: 20,
  },
});
