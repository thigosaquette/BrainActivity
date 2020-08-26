import React from 'react';
import { Text, View, ImageBackground} from 'react-native';
import { useNavigation} from '@react-navigation/native';
import PageHeader from '../../components/PageHeader';
import FormActivity from '../../components/FormActivity';

import styles from './styles';

function EditActivity() {

    return (
        <View style={styles.container}>
            <PageHeader title='Quem nunca precisou adaptar um atividade?' />
            <FormActivity buttonWord='Editar' />
        </View>
    );
}

export default EditActivity;