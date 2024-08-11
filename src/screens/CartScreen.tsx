import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';

interface Product {
    id: string;
    name: string;
    price: number;
    image: any;
}

const products: Product[] = [
    { id: '1', name: 'Computadora', price: 1000 , image: require('../../assets/images/computer.png') },
    { id: '2', name: 'Celular', price: 500, image: require('../../assets/images/phone.png') },
    { id: '3', name: 'Laptop', price: 1200, image: require('../../assets/images/laptop.png') },
    { id: '4', name: 'Impresora', price: 200, image: require('../../assets/images/printer.png') },
    { id: '5', name: 'Accesorios', price: 50, image: require('../../assets/images/accessory.png') },
];

export const CartScreen = () => {
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (id: string) => {
        setCart(cart.filter(product => product.id !== id));
    };

    const calculateTotal = () => {
        return cart.reduce((total, product) => total + product.price, 0);
    };

    const handlePurchase = () => {
        if (cart.length === 0) {
            Alert.alert('Carrito Vacío', 'No hay productos en el carrito para comprar.');
            return;
        }

        Alert.alert(
            'Compra Realizada',
            `Gracias por su compra. Total: $${calculateTotal()}`,
            [{ text: 'Aceptar', onPress: () => setCart([]) }] 
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Carrito de Compras</Text>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.productContainer}>
                        <Image source={item.image} style={styles.productImage} />
                        <Text style={styles.productName}>{item.name}</Text>
                        <Text style={styles.productPrice}>${item.price}</Text>
                        <TouchableOpacity style={styles.button} onPress={() => addToCart(item)}>
                            <Text style={styles.buttonText}>Agregar al Carrito</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
            <View style={styles.cartContainer}>
                <Text style={styles.cartTitle}>Productos en el Carrito:</Text>
                <FlatList
                    data={cart}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.cartItemContainer}>
                            <Image source={item.image} style={styles.cartItemImage} />
                            <Text style={styles.cartItemName}>{item.name}</Text>
                            <Text style={styles.cartItemPrice}>${item.price}</Text>
                            <TouchableOpacity style={styles.removeButton} onPress={() => removeFromCart(item.id)}>
                                <Text style={styles.removeButtonText}>Eliminar</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
                <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
                <TouchableOpacity style={styles.purchaseButton} onPress={handlePurchase}>
                    <Text style={styles.purchaseButtonText}>Realizar Compra</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
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
        flexDirection: 'row',
        alignItems: 'center',
    },
    productImage: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    productPrice: {
        fontSize: 16,
        color: '#888',
    },
    button: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#007bff',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
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
        flexDirection: 'row',
        alignItems: 'center',
    },
    cartItemImage: {
        width: 50,
        height: 50,
        marginRight: 10,
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
    purchaseButton: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#28a745',
        borderRadius: 5,
    },
    purchaseButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default CartScreen;
