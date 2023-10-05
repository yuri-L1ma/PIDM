import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    container2: {
        flex: 1,
        backgroundColor: 'black',
        // alignItems: 'center',
        // justifyContent: 'center',
        padding: 40,
        paddingTop: 80,
    },
    item:{
        flexDirection: 'row',
        justifyContent: "space-between",
        width: "85%",
        height: 60,
        marginTop: 15,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
    },
    itemSection:{
        color: 'gray',
        fontSize: 22,
        marginTop: 25
    },
    itemHeader: {
        flexDirection:'row',
        gap: 10, 
    },
    itemName:{
        color: "white",
        fontSize: 18,
    },
    itemHour:{
        color: "gray",
        fontSize: 16,
    },
    itemPrice:{
        color: "white",
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemBold:{
        fontSize: 50,
        color: 'white',
        fontWeight: 'bold'
    },
    itemSemibold:{
        fontSize: 25,
        color: 'white',
    }
});

export default styles;
