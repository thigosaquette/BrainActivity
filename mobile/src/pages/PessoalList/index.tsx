import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';

import PageHeader from '../../components/PageHeader';
import Activities from '../../components/Activities';

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