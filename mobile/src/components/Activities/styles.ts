import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#000',
        flex: 0,
        borderWidth: 1,
        borderColor: '#832E61',
        borderRadius: 8,
        marginBottom: 16,
        overflow: "hidden"
    },
    
    content : {
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 24
    },

    label : {
        fontFamily: 'Roboto_400Regular',
        color: '#832E61',
        fontSize: 16
    },

    containerWords : {
        fontFamily: 'Roboto_400Regular',
        color: '#BCB99A',
        marginTop: 5,
        marginBottom: 10
    },

    footer : {
        backgroundColor: '#000',
        padding: 24,
        marginTop: 24,
        alignItems: 'center'
    },

    buttonsContainer : {
        flexDirection: 'row',
        marginLeft: '60%'
    },

    deleteButton : {
        backgroundColor: '#000',
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 28
    },

    trashIcon : {
        color: '#832E61'
    },

    editButton : {
        backgroundColor: '#000',
        flexDirection: 'row',
        width: 56,
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8
    },

    editIcon : {
        color: '#832E61'
    },

    contactButtonText : {
        color: '#fff',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
        marginLeft: 16
    }
    
});

export default styles;