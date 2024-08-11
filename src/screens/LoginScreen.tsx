import React, { useState } from 'react';
import { StatusBar, View, Text, TouchableOpacity } from 'react-native';
import { TitleComponent } from '../components/TitleComponent';
import { PRIMARY_COLOR, SECUNDARY_COLOR } from '../commons/constants';
import { BodyComponent } from '../components/BodyComponent';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { StackScreenProps } from '@react-navigation/stack';

interface FormLogin {
    email: string;
    password: string;
}


interface Props extends StackScreenProps<any, any> {}

export const LoginScreen = ({ navigation }: Props) => {

    const [formLogin, setFormLogin] = useState<FormLogin>({
        email: '',
        password: ''
    });


    const handleSetValues = (name: string, value: string) => {
        setFormLogin({ ...formLogin, [name]: value })
    }


    const handleSignIn = () => {
        console.log(formLogin);
    }

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
                        name={'email'} />
                    <InputComponent
                        placeholder='Contraseña'
                        handleSetValues={handleSetValues}
                        name={'password'}
                        isPassword={true} />
                </View>
                <ButtonComponent textButton='Iniciar' onPress={handleSignIn} />
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.textBody}>No tienes una cuenta?, Crea tu cuenta aquí.</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                    <Text style={styles.textBody}>Ir al carrito</Text>
                </TouchableOpacity>
            </BodyComponent>
        </View>
    )
}

export default LoginScreen
