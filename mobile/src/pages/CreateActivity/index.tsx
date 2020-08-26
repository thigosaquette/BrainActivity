import React from 'react';
import { Text, View, ImageBackground} from 'react-native';
import { useNavigation} from '@react-navigation/native';
import PageHeader from '../../components/PageHeader';
import FormActivity from '../../components/FormActivity';

import styles from './styles';

function CreateActivity() {

    const navigation = useNavigation();

    function handleNavigateToListPage() {
        // integrar função de get
        navigation.navigate('ListTabs');
    };

    return (
        <View style={styles.container}>
            <PageHeader title='Liste como nunca.' />
            <FormActivity buttonWord='Criar' />
        </View>
    );
}

export default CreateActivity;