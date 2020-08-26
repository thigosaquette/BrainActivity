import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#000',
    },

    content : {
        marginTop: 130,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 24
    },

    listButton : {
        backgroundColor: '#BCB99A',
        width: '80%',
        minWidth: 260,
        height:50,
        borderRadius: 5,
        marginTop: 20,
        padding: 5,
        alignItems: 'center',
        alignSelf: 'center'
    },

    listButtonText : {
        fontFamily: 'Roboto_400Regular',
        color: '#000',
        fontSize: 24,
    },

    createButton : {
        backgroundColor: '#832E61',
        width: '80%',
        minWidth: 260,
        height:50,
        borderRadius: 5,
        marginTop: 40,
        padding: 5,
        alignItems: 'center',
        alignSelf: 'center'
    },

    createButtonText : {
        fontFamily: 'Roboto_400Regular',
        color: '#BCB99A',
        fontSize: 24,
    },
});

export default styles;