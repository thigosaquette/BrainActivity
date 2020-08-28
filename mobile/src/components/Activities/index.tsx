import React from 'react';
import { View, Text } from 'react-native';
import { useHistory } from 'react-router-dom';
import { BorderlessButton } from 'react-native-gesture-handler'
import {useNavigation} from '@react-navigation/native';

import {Feather} from '@expo/vector-icons';

import styles from './styles';

function Activities() {
    const navigation = useNavigation();
    const history = useHistory();
    
    const userName = localStorage.getItem('userName');

    function handleNavigateToEditActivityPage() {
        navigation.navigate('EditActivity');
    };

    function handleDeleteActivity() {
        //inserir Função para deletar atividade
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.label}>
                    Título
                </Text>
                <Text style={styles.containerWords}>
                    Refazer as tarefas das telas “Nova” e “Login”.
                </Text>

                <Text style={styles.label}>
                    Descrição
                </Text>
                <Text style={styles.containerWords}>
                Insertir o icone de arrow-left com uma margin-left de 18px ao invés de 22px, podendo assim deixar o espaço de sobra para o botão disfunction-button.
                </Text>
            </View>

            <View style={styles.footer}>
                <View style={styles.buttonsContainer}>
                    <BorderlessButton rippleColor="#24231F" style={styles.deleteButton}>
                        <Feather 
                            style={styles.trashIcon}
                            size={30}
                            name="trash-2" 
                        />
                    </BorderlessButton>

                    <BorderlessButton rippleColor="#24231F" style={styles.editButton} onPress={handleNavigateToEditActivityPage}>
                        <Feather 
                            style={styles.editIcon}
                            size={30}
                            name="edit" 
                        />
                    </BorderlessButton>
                </View>
            </View>
        </View>
    );
}

export default Activities;