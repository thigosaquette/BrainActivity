import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container : {
        paddingHorizontal: 40,
        backgroundColor: '#000'
    },

    topBar : {
        height: '30%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },

    skullHeaderImg : {
        width: 200,
        height: 300,
        resizeMode: 'contain',
        position: 'absolute',
        top: -50,
        right: -40
    },

    arrowButton : {
        width: 60,
        height: 50,
        marginTop: 50,
        justifyContent: 'center'
    },

    backIcon : {
        color: '#BCB99A',
        height: 35,
        textShadowColor: 'rgba(255, 223, 140, 0.6)',
        shadowOffset: {
            width: 4,
            height: -4
        },
        textShadowRadius: 5
    },

    header : {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },

    title : {
        fontFamily: 'Roboto_400Regular',
        color: '#BCB99A',
        textAlign: 'left',
        fontSize: 24,
        lineHeight: 28,
        marginTop: '30%',
        textShadowColor: 'rgba(255, 223, 140, 0.6)',
        shadowOffset: {
            width: 4,
            height: -4
        },
        textShadowRadius: 5
    },
});

export default styles;