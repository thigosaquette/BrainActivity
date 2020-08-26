import React, { ReactNode } from 'react';
import { Text, View, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

import skullHeaderImg from '../../assets/images/skull-top-right.png';
import {Feather} from '@expo/vector-icons';

import styles from './styles';

interface PageHeaderProps {
    title : string;
}

const PageHeader: React.FC<PageHeaderProps> = ({title}) => {
    const { navigate } = useNavigation();

    function handleGoBack() {
        navigate('Landing');
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton 
                    onPress={handleGoBack}
                    rippleColor="#24231F"
                    style={styles.arrowButton}
                >
                    <Feather 
                        style={styles.backIcon}
                        size={50}
                        name="corner-up-left" 
                        color="white"
                    />
                </BorderlessButton>

                <Image 
                    source={skullHeaderImg} 
                    style={styles.skullHeaderImg}
                />
            </View>

            <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    );
}

export default PageHeader;