import React from 'react';
import { Text, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import skullImg from '../../assets/images/skull.png';
import {Feather} from '@expo/vector-icons'
import styles from './styles';



function Landing() {
    const navigation = useNavigation();

    function handleNavigateToRegisterPage() {
        navigation.navigate('Register');
    };

    function handleNavigateToLoginPage() {
        navigation.navigate('Login');
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                BrainActivity
            </Text>

            <Text style={styles.subTitle}>
                Não sobrecarregue seu cérebro, liste suas atividades no BA
            </Text>

            <Image source={skullImg} style={styles.banner}/>

            <View style={styles.buttonsContainer}>
                <RectButton 
                    onPress={handleNavigateToLoginPage} 
                    style={styles.buttonPrimary}
                >
                    <Text style={styles.buttonPrimaryText}>Entrar</Text>
                </RectButton>
                
                <RectButton 
                    onPress={handleNavigateToRegisterPage} 
                    style={styles.buttonRegister}
                >
                    <Text style={styles.buttonRegisterText}>Não tem cadastro?{'\n'}Cola aqui!</Text>
                    <Feather 
                        style={styles.enterIcon}
                        name="log-in" 
                        size={20} 
                    />
                </RectButton>
            </View>    
        </View>    
    );
}

export default Landing;