import { View, Text, Button, Image } from "react-native"
import { PaperProvider, IconButton, MD3Colors } from "react-native-paper"
import styles from "./styles"


const Questao02 = ({ navigation, route }) => {
    const { nome, valor, title, hora, icon } = route.params

    return (
        <PaperProvider>
            <View style = {styles.container2}>
                <IconButton
                    icon={icon}
                    iconColor={MD3Colors.tertiary0}
                    size={100}
                    onPress={() => navigation.goBack()}
                    mode="contained"
                />
                <Text style={styles.itemBold}>{nome}</Text>
                <Text style={styles.itemBold}>R$ {valor}</Text>
                <Text style={styles.itemSemibold}>{title}</Text>
                <Text style={styles.itemSemibold}>{hora}</Text>
            </View>
        </PaperProvider>
    )
}

export default Questao02