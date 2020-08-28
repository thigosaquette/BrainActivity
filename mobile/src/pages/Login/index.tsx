import React from 'react';
import { View } from 'react-native';
import PageHeader from '../../components/PageHeader';
import FormRegister from '../../components/FormRegister';

import styles from './styles';

function Login() {

    return (
        <View style={styles.container}>
            <PageHeader title='Entre e coloque suas ideias em uma lista.' />
            <FormRegister buttonWord='Entrar' />
        </View>
    );
}

export default Login;