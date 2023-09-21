import {View, Text, TextInput, Button} from 'react-native';
import {useState} from 'react';

const IMC = ({navigation}) => {
    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')

    return (
        <View>
            <TextInput
                // style={styles.input}
                onChangeText={text => setPeso(text)}
                placeholder="Digite seu peso, meu queride"
                value={peso}
                keyboardType='numeric'
            />
            <TextInput
                // style={styles.input}
                onChangeText={text => setAltura(text)}
                placeholder="Digite sua altura, meu queride"
                value={altura}
                keyboardType='numeric'
            />
            <Button
                title="OK"
                onPress={() => navigation.navigate('Resultado', { peso, altura })}
            />
        </View>
    )
}

export default IMC;