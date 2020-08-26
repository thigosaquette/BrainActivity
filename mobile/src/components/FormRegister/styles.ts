import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    createForm : {
        backgroundColor: '#000',
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 24,
        marginTop: -40
    },

    inputBlock : {
        marginTop: 15,
        width: '100%'
    },

    label : {
        fontFamily: 'Roboto_700Bold',
        color: '#832E61',
        fontSize: 18
    },

    input : {
        marginTop: 15,
        borderWidth: 3,
        borderRadius: 5,
        borderColor: '#832E61',
        backgroundColor: '#DFDED6',
        paddingHorizontal: 10,
        width: '100%',
        minWidth: 10,
        height: 50
    },

    inputArea : {
        marginTop: 15,
        borderWidth: 3,
        borderRadius: 5,
        borderColor: '#832E61',
        backgroundColor: '#DFDED6',
        paddingHorizontal: 10,
        paddingVertical: 15,
        width: '100%',
        minWidth: 10,
        height: 70,
        textAlignVertical: 'top'
        
    },

    select : {
        marginTop: 15,
        borderWidth: 3,
        borderRadius: 5,
        borderColor: '#832E61',
        backgroundColor: '#DFDED6',
        paddingHorizontal: 10,
        width: '100%',
        minWidth: 10,
        height: 50
    },

    submitButton : {
        marginTop: 50,
        width: '100%',
        height: 50,
        borderRadius: 5,
        backgroundColor: '#832E61',
        alignItems: 'center',
        padding: 12
    },

    submitButtonText : {
        fontFamily: 'Roboto_400Regular',
        color: '#BCB99A',
        fontSize: 16,
    },
});

export default styles;