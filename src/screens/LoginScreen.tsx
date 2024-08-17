import React, { useState } from 'react';
import { StatusBar, View, Text, TouchableOpacity, Alert } from 'react-native';
import { TitleComponent } from '../components/TitleComponent';
import { PRIMARY_COLOR } from '../commons/constants';
import { BodyComponent } from '../components/BodyComponent';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface FormLogin {
    email: string;
    password: string;
}

interface Props extends StackScreenProps<any, any> {}

export const LoginScreen = ({ navigation }: Props) => {
    const [formLogin, setFormLogin] = useState<FormLogin>({ email: '', password: '' });
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const handleSetValues = (name: string, value: string) => {
        setFormLogin({ ...formLogin, [name]: value });
    };

    const handleSignIn = async () => {
        const storedUsers = await AsyncStorage.getItem('users');
        if (storedUsers) {
            const users = JSON.parse(storedUsers);
            const user = users.find((user: any) => user.email === formLogin.email && user.password === formLogin.password);
            if (user) {
                navigation.navigate('Home');
            } else {
                Alert.alert('Error', 'Usuario o clave incorrectos.');
            }
        }
    };

    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponent title='Inicio de Sesión' />
            <BodyComponent>
                <View>
                    <Text style={styles.titleBody}>Bienvenido</Text>
                    <Text style={styles.descriptionBody}>Realiza tus compras de manera fácil, rápida y segura</Text>
                </View>
                <View style={styles.contentInputs}>
                    <InputComponent
                        placeholder='Correo'
                        handleSetValues={handleSetValues}
                        name='email'
                    />
                    <InputComponent
                        placeholder='Contraseña'
                        handleSetValues={handleSetValues}
                        name='password'
                        isPassword={!isPasswordVisible}
                        rightIcon={
                            <TouchableOpacity onPress={() => setPasswordVisible(!isPasswordVisible)}>
                                <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} size={20} color="gray" />
                            </TouchableOpacity>
                        }
                    />
                </View>
                <ButtonComponent textButton='Iniciar' onPress={handleSignIn} />
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.textBody}>No tienes una cuenta?, Crea tu cuenta aquí.</Text>
                </TouchableOpacity>
            </BodyComponent>
        </View>
    );
};

export default LoginScreen;
