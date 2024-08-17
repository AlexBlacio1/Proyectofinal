import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR, SECUNDARY_COLOR } from '../commons/constants';

interface Props {
    placeholder: string;
    handleSetValues: (name: string, value: string) => void;
    name: string;
    isPassword?: boolean;
    rightIcon?: React.ReactNode;
}

export const InputComponent: React.FC<Props> = ({
    placeholder,
    handleSetValues,
    name,
    isPassword = false,
    rightIcon
}) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                keyboardType='default'
                onChangeText={(value) => handleSetValues(name, value)}
                secureTextEntry={isPassword}
                style={styles.inputText}
            />
            {rightIcon && <View style={styles.iconContainer}>{rightIcon}</View>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 20,
    },
    inputText: {
        flex: 1,
        fontSize: 16,
        padding: 10,
    },
    iconContainer: {
        padding: 10,
    },
});