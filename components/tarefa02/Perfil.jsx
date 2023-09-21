import {View, Text, Button, Image} from 'react-native';

const Perfil = ({route, navigation}) => {
    const {nome, idade, email} = route.params
    return (
        <View>
            <Text>Perfil</Text>
            
            <Image
                style={{width: 200, height: 200, borderRadius: 100}}
                source={{uri: 'https://avatars.githubusercontent.com/u/2007006?v=4'}}
            />
            
            <Text>Nome: {nome}</Text>
            <Text>Idade: {idade}</Text>
            <Text>Email: {email}</Text>

            <Button
                title="HOME"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

export default Perfil