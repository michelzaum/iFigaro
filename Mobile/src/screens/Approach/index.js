import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
    StatusBar
} from 'react-native';

import styles from './styles';
import backgroundImage from '../../../assets/men-working.jpg';
import logoImg from '../../../assets/mustache.png';

export default function Approach() {
    return (
        <>
            <StatusBar barStyle="light-content" translucent />
            <ImageBackground source={backgroundImage} style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={logoImg} width={2} />
                </View>
                <View style={styles.phraseContainer}>
                    <Text style={styles.phrase}>
                        iFigaro
                </Text>
                </View>
                <View style={styles.btnsContainer}>
                    <TouchableOpacity style={styles.btnSignIn}>
                        <Text style={styles.signInText}>Sign in</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnSignUp}>
                        <Text style={styles.signUpText}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </>
    )
};
