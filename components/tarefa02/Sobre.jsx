import {View, Text, Button, Image} from 'react-native';

const Sobre = ({navigation}) => {
    return (
        <View>
            <Button
                title="HOME"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

export default Sobre