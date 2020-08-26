import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: "center",
        padding: 20
    },

    title : {
        fontFamily: 'Roboto_400Regular',
        fontSize: 48,
        lineHeight: 56,
        textAlign: 'center',
        marginBottom: 20,
        color: '#BCB99A',
        textShadowColor: 'rgba(255, 223, 140, 0.4)',
        shadowOffset: {
            width: 20,
            height: -40
        },
        textShadowRadius: 30
    },

    subTitle : {
        fontFamily: 'Roboto_400Regular',
        fontSize: 20,
        lineHeight: 23,
        textAlign: 'center',
        marginHorizontal: 60,
        color: '#BCB99A',
        textShadowColor: 'rgba(255, 223, 140, 0.6)',
        shadowOffset: {
            width: 4,
            height: -4
        },
        textShadowRadius: 20
    },

    banner : {
        width: '100%',
        height: '50%',
        resizeMode: 'contain',
    },

    buttonsContainer : {
        flexDirection: 'column',
    },

    buttonPrimary : {
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

    buttonPrimaryText : {
        fontFamily: 'Roboto_400Regular',
        color: '#000',
        fontSize: 24,
    },
     
    buttonRegister : {
        alignSelf: 'center',
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },

    buttonRegisterText :{
        fontFamily: 'Roboto_400Regular',
        color: '#BCB99A',
        textAlign: 'center',
        marginLeft: 40
    },

    enterIcon : {
        marginLeft: 20,
        color: '#832E61',
        textShadowColor: 'rgba(217, 93, 167, 0.80)',
        shadowOffset: {
            width: 4,
            height: -4
        },
        textShadowRadius: 20
    }
});

export default styles;