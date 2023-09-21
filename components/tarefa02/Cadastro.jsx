import { View, Text, TextInput, Button } from 'react-native';
import { useState } from 'react';

const Cadastro = ({ navigation }) => {
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [email, setEmail] = useState('')

    return (
        <View>
            <TextInput
                // style={styles.input}
                onChangeText={text => setNome(text)}
                placeholder="Digite seu nome, meu queride"
                value={nome}
            />
            <TextInput
                // style={styles.input}
                onChangeText={text => setIdade(text)}
                placeholder="Digite sua idade, meu queride"
                value={idade}
            />
            <TextInput
                // style={styles.input}
                onChangeText={text => setEmail(text)}
                placeholder="Digite seu email-e, meu queride"
                value={email}
            />
            <Button
                title="OK"
                onPress={() => navigation.navigate('Perfil', { nome, idade, email })}
            />
        </View>
    )
}

export default Cadastro;