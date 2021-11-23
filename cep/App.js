import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [cep, setCep] = useState('');
  const [error, setError] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [street, setStreet] = useState('');

  async function requestAddress() {
    console.log(cep)
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    if(response.status === 200) {
      const data = await response.json();
      setState(data.uf);
      setCity(data.localidade);
      setNeighborhood(data.bairro);
      setStreet(data.logradouro);

    } else {
      setError('CEP inválido');
    }
  }

  return (
    <View style={styles.container}>
      <Text>Consulta CEP</Text>
      <TextInput onChangeText={setCep} onBlur={requestAddress} style={styles.input} placeholder="99700000" keyboardType="numeric" />
      <Text>{error}</Text>

      <TextInput style={styles.input} value={state}  placeholder="Estado" />
      <TextInput style={styles.input} value={city}  placeholder="Cidade" />
      <TextInput style={styles.input} value={neighborhood}  placeholder="Bairro" />
      <TextInput style={styles.input} value={street} placeholder="Rua" />

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
  input: {
    borderWidth: 1,
    borderColor: '#000',
    width: 200,
    height: 40,
    marginTop: 20,
    borderRadius: 5,
  }
});
