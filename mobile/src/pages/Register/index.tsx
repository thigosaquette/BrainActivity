import React from 'react';
import {View} from 'react-native';
import PageHeader from '../../components/PageHeader';
import FormRegister from '../../components/FormRegister';

import styles from './styles';

function Register() {
    return (
        <View style={styles.container}>
            <PageHeader title='Realize o cadastro e seja um Brain.' />
            <FormRegister buttonWord='Criar conta' />
        </View>
    );
}

export default Register;