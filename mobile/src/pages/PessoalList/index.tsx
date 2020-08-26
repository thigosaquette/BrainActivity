import React, { useState } from 'react';
import { Text, View, ScrollView, TextInput} from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';
import Activities from '../../components/Activities';

import { Feather } from '@expo/vector-icons';
import styles from './styles';

function PessoalList() {
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);

    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible);
    }

    return (
        <View style={styles.container}>
            <PageHeader title="Estas são suas atividades pessoais." />

            
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                <Activities />
                <Activities />
                <Activities />
                <Activities />
            </ScrollView>
        </View>
    );
}

export default PessoalList;