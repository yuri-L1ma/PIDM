import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Touchable, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 100, fontWeight: "bold", color: "blue" }}>Yuri lindo e triste</Text>
      <Button
        onPress={() => {
          console.log('You tapped the button!');
        }}
        title="Press Me"
      />
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
});
