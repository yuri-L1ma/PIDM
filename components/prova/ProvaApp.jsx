import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Questao01 from "./Questao01"
import Questao02 from "./Questao02"

const NativeStack = createNativeStackNavigator()

const ProvaApp = () => {
    return (
        <NavigationContainer>
            <NativeStack.Navigator screenOptions={{headerShown: false}}>
                {/*GRUPO DAS TELAS PRINCIPAIS*/}
                <NativeStack.Group>
                    <NativeStack.Screen name="tela1" component={Questao01} />
                </NativeStack.Group>
                {/*GRUPO DAS TELAS MODAIS*/}
                <NativeStack.Group screenOptions={{ presentation: "modal" }}>
                    <NativeStack.Screen name="telaModal" component={Questao02} />
                </NativeStack.Group>
            </NativeStack.Navigator>

        </NavigationContainer>
    )
}

export default ProvaApp