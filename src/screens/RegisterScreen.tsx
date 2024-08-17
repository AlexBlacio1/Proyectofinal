import React, { useState } from 'react';
import { StatusBar, View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { TitleComponent } from '../components/TitleComponent';
import { PRIMARY_COLOR } from '../commons/constants';
import { BodyComponent } from '../components/BodyComponent';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';

interface FormRegister {
    email: string;
    user: string;
    password: string;
    telefono: string;
}

export const RegisterScreen = ({ navigation }: { navigation: any }) => {
    const [formRegister, setFormRegister] = useState<FormRegister>({
        email: '',
        user: '',
        password: '',
        telefono: ''
    });
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const handleSetValues = (name: string, value: string) => {
        setFormRegister({ ...formRegister, [name]: value });
    };

    const checkUserExists = async (email: string, user: string) => {
        const storedUsers = await AsyncStorage.getItem('users');
        if (storedUsers) {
            const users = JSON.parse(storedUsers);
            return users.some((existingUser: any) => existingUser.email === email || existingUser.user === user);
        }
        return false;
    };

    const handleSignUp = async () => {
        if (!formRegister.email || !formRegister.user || !formRegister.password || !formRegister.telefono) {
            Alert.alert('Registro Fallido', 'Por favor, llene todos los campos.');
            return;
        }

        const userExists = await checkUserExists(formRegister.email, formRegister.user);
        if (userExists) {
            Alert.alert('Registro Fallido', 'Usuario ya se encuentra registrado.');
            return;
        }

        const storedUsers = await AsyncStorage.getItem('users');
        let users = storedUsers ? JSON.parse(storedUsers) : [];

        users.push(formRegister);
        await AsyncStorage.setItem('users', JSON.stringify(users));

        Alert.alert('Registro Exitoso', 'Usuario registrado correctamente');
        navigation.navigate('Login');
    };

    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponent title='Regístrate' />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <BodyComponent>
                    <View>
                        <Text style={styles.titleBody}>Bienvenido</Text>
                        <Text style={styles.descriptionBody}>Registra tu cuenta</Text>
                    </View>
                    <View style={styles.contentInputs}>
                        <InputComponent
                            placeholder='Correo'
                            handleSetValues={handleSetValues}
                            name='email'
                        />
                        <InputComponent
                            placeholder='Usuario'
                            handleSetValues={handleSetValues}
                            name='user'
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
                        <InputComponent
                            placeholder='Teléfono'
                            handleSetValues={handleSetValues}
                            name='telefono'
                        />
                    </View>
                    <ButtonComponent textButton='Registrar' onPress={handleSignUp} />
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.textBody}>¿Ya tienes una cuenta? Inicia sesión.</Text>
                    </TouchableOpacity>
                </BodyComponent>
            </ScrollView>
        </View>
    );
};

export default RegisterScreen;