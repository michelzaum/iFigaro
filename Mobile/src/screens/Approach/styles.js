import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },
    logoContainer: {
        backgroundColor: '#651E0B',
        borderColor: '#000',
        borderWidth: 5,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 200,
        top: 80
    },
    phraseContainer: {
        top: 40,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    phrase: {
        color: '#F2AD94',
        fontSize: 25,
        fontStyle: "italic"
    },
    btnsContainer: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
        width: 400,
    },
    btnSignIn: {
        backgroundColor: '#651E0B',
        borderRadius: 50,
        borderWidth: 4,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: '15%'
    },
    btnSignUp: {
        top: 5,
        backgroundColor: 'transparent',
        borderRadius: 50,
        borderWidth: 4,
        borderColor: '#651E0B',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: '15%'
    },
    signInText: {
        color: '#fff',
        fontSize: 25,
    },
    signUpText: {
        color: '#fff',
        fontSize: 25
    }
});