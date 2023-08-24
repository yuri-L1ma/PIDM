import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useState } from 'react';

const Questao01e02e04 = () => {
  const source1 = 'https://lh3.googleusercontent.com/a/AAcHTtcQUF9eRsLO6CV5uyjabj8JEvuypNkMtAwWFyAQa1bjqZQ=s96-c-rg-br100';
  const source2 = 'https://www.lance.com.br/galerias/wp-content/uploads/2020/10/1-14-741x474.jpg'
  const [source, setSource] = useState(source1)

  const toggleImage = () => {
    if (source === source1) {
      setSource(source2)
    } else {
      setSource(source1)
    }
  }

  return (
    <View style={styles.container}>
      <Image
        style={{ width: 200, height: 200, borderRadius: 100 }}
        source={{ uri: source }}
      />
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>Yuri Silva de Lima</Text>
      <Text>Maracanaú</Text>
      <Text style={{ color: 'red' }}>Design Digital | 6º Semestre</Text>
      <Button
        onPress={toggleImage}
        title="Clica em mim"
        color="red"
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
    backgroundColor: '#C0C0C0',
  },
});

export default Questao01e02e04;
