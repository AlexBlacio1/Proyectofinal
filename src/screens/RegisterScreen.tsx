import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { TitleComponent } from '../components/TitleComponent';
import { PRIMARY_COLOR } from '../commons/constants';
import { BodyComponent } from '../components/BodyComponent';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { View, Text, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { ScrollView } from 'react-native';

interface FormRegister {
    email: string;
    password: string;
}

interface Props extends StackScreenProps<any, any> { }

export const RegisterScreen = ({ navigation }: Props) => {
    const [formRegister, setFormRegister] = useState<FormRegister>({
        email: '',
        password: ''
    });

    const handleSetValues = (name: string, value: string) => {
        setFormRegister({ ...formRegister, [name]: value });
    }

    const handleSignUp = () => {
        console.log(formRegister);
    }

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
                            name={'email'} />
                        <InputComponent
                            placeholder='Contraseña'
                            handleSetValues={handleSetValues}
                            name={'password'}
                            isPassword={true} />
                        <InputComponent
                            placeholder='Confirma tu contraseña'
                            handleSetValues={handleSetValues}
                            name={'confirmPassword'}
                            isPassword={true} />
                    </View>
                    <ButtonComponent textButton='Registrar' onPress={handleSignUp} />
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.textBody}>¿Ya tienes una cuenta? Inicia sesión.</Text>
                    </TouchableOpacity>
                </BodyComponent>
            </ScrollView>
        </View>
    )
    
}

export default RegisterScreen;