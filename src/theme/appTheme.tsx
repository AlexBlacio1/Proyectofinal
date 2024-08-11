// src/theme/appTheme.ts
import { StyleSheet } from 'react-native';
import { PRIMARY_COLOR, SECUNDARY_COLOR } from '../commons/constants';

export const styles = StyleSheet.create({
    globalTitle: {
        color: SECUNDARY_COLOR,
        fontSize: 27,
        paddingHorizontal: 30,
        paddingVertical: 30,
        fontWeight: 'bold'
    },
    contentBody: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingHorizontal: 20,
        paddingTop: 40
    },
    titleBody: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black'
    },
    descriptionBody: {
        fontSize: 15
    },
    inputText: {
        backgroundColor: '#B5B2B2',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
    },
    contentInputs: {
        marginTop: 40,
        gap: 10
    },
    button: {
        marginTop: 30,
        backgroundColor: PRIMARY_COLOR,
        paddingVertical: 15,
        borderRadius: 10
    },
    buttonText: {
        color: SECUNDARY_COLOR,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textBody: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginTop: 20
    },
    productContainer: {
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    productPrice: {
        fontSize: 16,
        color: '#888',
    },
    
    cartContainer: {
        marginTop: 30,
    },
    cartTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cartItemContainer: {
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    cartItemName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cartItemPrice: {
        fontSize: 16,
        color: '#888',
    },
    removeButton: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#dc3545',
        borderRadius: 5,
    },
    removeButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    totalText: {
        marginTop: 15,
        fontSize: 18,
        fontWeight: 'bold',
    },
    iconPassword:{
        position:'absolute',
        right:20,
        zIndex:1,
        marginTop:20,
        color: 'black'
    }
});
