import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [imc, setImc] = useState('');

  function calcular() {
    const heightM = height / 100;
    const imc = (weight / (heightM * heightM)).toFixed(2);
    setImc(imc);
  }

  return (
    <View style={styles.container}>
      <Text>Peso</Text>
      <TextInput 
        onChangeText={setWeight} 
        style={styles.form} 
        placeholder="Kg" 
        keyboardType="numeric" />
      
      <Text>Altura</Text>
      <TextInput 
        onChangeText={setHeight}
        style={styles.form} 
        placeholder="cm" 
        keyboardType="numeric" />
      
      
      <Button title="Calcular" onPress={() => calcular() } style={styles.btn} />
      <Text>Seu IMC é {imc}</Text>
      <StatusBar style="auto" />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    height: 40,
    width: 220,
    borderWidth: 1,
    borderColor: '#000',
    margin: 10,
    padding: 10,
  },
  btn: {
    height: 40,
    width: 220,
    borderWidth: 1,
    borderColor: '#000',
    textAlign: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginTop: 35,
  }
});
