import {View, StyleSheet} from 'react-native';
import Questao01e02e04 from "./components/tarefa01/Questao01e02e04"
import Questao03 from "./components/tarefa01/Questao03"
import MainScreen from './components/tarefa02/MainScreen';

export default function App() {
  return (
    <MainScreen/>
    // <View style={styles.container}>
    //    <Questao01e02e04/> 
      
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});





