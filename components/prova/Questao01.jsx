import { View, Text, SectionList, Pressable } from "react-native"
import { PaperProvider, IconButton, MD3Colors } from "react-native-paper"
import dados from "./dados"
import styles from "./styles"

const Questao01 = ({navigation}) => {
    return (
        <PaperProvider>
            <View style={styles.container}>
                <SectionList
                    sections={dados}
                    keyExtractor={(item) => "KSMKSKDNDKN" + item.id}
                    renderItem={
                        ({ item }) => {
                            return (
                                <View style={styles.item}>
                                    <View style={styles.itemHeader}>
                                        <IconButton
                                            icon={item.icon}
                                            iconColor={MD3Colors.tertiary0}
                                            size={30}
                                            onPress={() => navigation.navigate("telaModal", {
                                                nome: item.nome,
                                                valor: item.valor,
                                                hora: item.hora,
                                                title: item.title,
                                                icon: item.icon
                                            })}
                                            mode="contained"
                                        />
                                        <View style={styles.itemDetails}>
                                            <Text style={styles.itemName}>{item.nome}</Text>
                                            <Text style={styles.itemHour}>{item.hora}</Text>
                                        </View>
                                    </View>
                                    <Text style={styles.itemPrice}>R$ {item.valor}</Text>
                                </View>
                            )
                        }
                    }
                    renderSectionHeader={
                        ({ section }) => {
                            return (
                                <Text style={styles.itemSection}>{section.title}</Text>
                            )
                        }
                    }
                />
            </View>
        </PaperProvider>
    )
}
export default Questao01