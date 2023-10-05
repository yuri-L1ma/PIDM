import { useEffect, useState } from 'react';
import {View, Text, Button, Image} from 'react-native';

const Resultado = ({route, navigation}) => {
    const {peso, altura} = route.params
    const [imc, setImc] = useState('')
    const [resultado, setResultado] = useState('')

    useEffect(() => {
        setImc(Number(peso) / (Number(altura) * Number(altura)))
    }, [])

    useEffect(() => {
        handleIMC()
    }, [imc])

    const handleIMC = () => {
        if(imc < 17){
            setResultado("Muito abaixo do peso")
        }else if(imc >= 17 && imc <= 18.49){
            setResultado("Abaixo do peso")
        }else if(imc >= 18.5 && imc <= 24.99){
            setResultado("Peso normal")
        }else if(imc >= 25 && imc <= 29.99){
            setResultado("Acima do peso")
        }else if(imc >= 30 && imc <= 34.99){
            setResultado("Obesidade I")
        }else if(imc >= 35 && imc <= 39.99){
            setResultado("Obesidade II (severa)")
        }else if(imc >= 40){
            setResultado("Obesidade III (mórbida)")
        }
    }
    return (
        <View>
            <Text>Resultados</Text>
            
            <Text>Seu IMC é: {imc}</Text>
            <Text>Resultado: {resultado}</Text>

            <Button
                title="HOME"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

export default Resultado