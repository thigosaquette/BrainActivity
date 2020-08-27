import React, { useState } from 'react';
import { View, TextInput, Text,  } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import {useHistory} from 'react-router-dom';
import { RectButton } from 'react-native-gesture-handler';

import api from '../../services/api';

import styles from './styles';


interface CreateActivityProps {
    buttonWord : string;
}

const FormRegister: React.FC<CreateActivityProps> = ({buttonWord}) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    async function handleIdentifyOperation() {
        //Define a ação pelo tipo de palavra inserida
        const data = {
            name,
            password
        }

        if (buttonWord === 'Criar conta') {
            //Cria um usuário
            try {
                await api.post('/users', data);
                navigation.navigate('Landing');
                alert(`Sucesso, ao criar sua conta ${data.name}`);
            } catch (error) {
                alert('Erro ao criar a conta, tente novamente.');
            }
        }

        if (buttonWord === 'Entrar') {
            localStorage.clear();
            const history = useHistory();
            //Realiza Login
            try {
                const response = await api.post('sessions', {name});
                
                localStorage.setItem('userName', response.data.name);
    
                history.push('/Home');
            } catch (error) {
                alert('Falha no login, tente novamente.')
            }
            navigation.navigate('Home');
        }

    };

    return (
        <View style={styles.createForm}>
            <View style={styles.inputBlock}>
                <Text style={styles.label}>Nome</Text>
                <TextInput
                    value={name}
                    onChangeText={text => setName(text)}
                    style={styles.input}
                    placeholder="Insira seu nome"
                    placeholderTextColor="#BC8A9F"
                />
            </View>

            <View style={styles.inputBlock}>
                <Text style={styles.label}>Senha</Text>
                <TextInput
                value={password}
                onChangeText={text => setPassword(text)}
                style={styles.select}
                placeholder="insira sua senha"
                secureTextEntry={true}
                placeholderTextColor="#BC8A9F"
                />
            </View>

            <RectButton style={styles.submitButton} onPress={handleIdentifyOperation}>
                <Text style={styles.submitButtonText}>{buttonWord}</Text>
            </RectButton>
        </View>
    );
}

export default FormRegister;