import React from 'react';
import { View } from 'react-native';
import PageHeader from '../../components/PageHeader';
import FormActivity from '../../components/FormActivity';

import styles from './styles';

function EditActivity() {

    return (
        <View style={styles.container}>
            <PageHeader title='Quem nunca precisou adaptar uma atividade?' />
            <FormActivity buttonWord='Editar' />
        </View>
    );
}

export default EditActivity;