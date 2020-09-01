import React, { useState, Component } from 'react';
import { View, TextInput, Text,  } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

interface FormActivityProps {
    buttonWord : string;
}

const FormActivity: React.FC<FormActivityProps> = ({buttonWord}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');

    const navigation = useNavigation();

    function handleIdentifyOperation() {
        //Define a ação pelo tipo de palavra inserida
        if (buttonWord === 'Criar') {
            //Cria um atividade
            //emitir mensagem
        }
        if (buttonWord === 'Editar') {
            //Edita atividade
        }
        navigation.navigate('ListTabs');
    }

    return (
        <View style={styles.createForm}>
            <View style={styles.inputBlock}>
                <Text style={styles.label}>Título</Text>
                <TextInput
                    value={title}
                    onChangeText={text => setTitle(text)}                    
                    style={styles.input}
                    placeholder="De um título a atividade"
                    placeholderTextColor="#BC8A9F"
                />
            </View>

            <View style={styles.inputBlock}>
                <Text style={styles.label}>Descrição</Text>
                <TextInput
                value={description}
                onChangeText={text => setDescription(text)}                
                style={styles.inputArea}
                placeholder="Descreva sua atividade"
                multiline = {true}
                numberOfLines = {4}
                placeholderTextColor="#BC8A9F"
                maxLength = {100}
                />
            </View>

            <View style={styles.inputBlock}>
                <Text style={styles.label}>Tipo</Text>
                <TextInput
                    value={type}
                    onChangeText={text => setType(text)}                    
                    style={styles.input}
                    placeholder="Escolha um tipo"
                    placeholderTextColor="#BC8A9F"   
                />
            </View>

            <RectButton onPress={handleIdentifyOperation} style={styles.submitButton}>
                <Text style={styles.submitButtonText}>{buttonWord}</Text>
            </RectButton>
        </View>
    );
}

export default FormActivity;