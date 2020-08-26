import React from 'react';
import { Text, View, ImageBackground} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation} from '@react-navigation/native';
import PageHeader from '../../components/PageHeader';

import styles from './styles';

function Home() {

    const navigation = useNavigation();

    function handleNavigateToListPage() {
        navigation.navigate('ListTabs');
    };

    function handleNavigateToCreateActivityPage() {
        navigation.navigate('CreateActivity');
    };

    return (
        <View style={styles.container}>
            <PageHeader title='Bem vindo, Brain.' />
            <View style={styles.content}> 
                <RectButton onPress={handleNavigateToListPage} style={styles.listButton}>
                    <Text style={styles.listButtonText}>Ver listas</Text>
                </RectButton>

                <RectButton onPress={handleNavigateToCreateActivityPage} style={styles.createButton}>
                    <Text style={styles.createButtonText}>Criar</Text>
                </RectButton>
            </View>
        </View>
    );
}

export default Home;