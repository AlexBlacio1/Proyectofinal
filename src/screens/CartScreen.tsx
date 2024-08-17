import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, Alert, TextInput } from 'react-native';
import { styles } from '../theme/appTheme';

interface Product {
    id: string;
    name: string;
    price: number;
    image: any;
    quantity?: number;
}

const products: Product[] = [
    { id: '1', name: 'Computadoras', price: 1000, image: require('../../assets/images/computer.png') },
    { id: '2', name: 'Celulares', price: 500, image: require('../../assets/images/phone.png') },
    { id: '3', name: 'Laptops', price: 1200, image: require('../../assets/images/laptop.png') },
    { id: '4', name: 'Impresoras', price: 200, image: require('../../assets/images/printer.png') },
    { id: '5', name: 'Accesorios', price: 50, image: require('../../assets/images/accessory.png') },
];

export const CartScreen = () => {
    const [cart, setCart] = useState<Product[]>([]);
    const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

    const addToCart = (product: Product) => {
        setCart([...cart, { ...product, quantity: quantities[product.id] || 1 }]);
        setQuantities({ ...quantities, [product.id]: 1 });
    };

    const removeFromCart = (id: string) => {
        setCart(cart.filter(product => product.id !== id));
    };

    const calculateTotal = () => {
        return cart.reduce((total, product) => total + (product.price * (product.quantity || 1)), 0);
    };

    const handlePurchase = () => {
        if (cart.length === 0) {
            Alert.alert('Carrito Vacío', 'No hay productos en el carrito para comprar.');
            return;
        }

        Alert.alert(
            'Compra Realizada',
            `Gracias por su compra. Total: $${calculateTotal().toFixed(2)}`,
            [{ text: 'Aceptar', onPress: () => setCart([]) }]
        );
    };

    const increaseQuantity = (id: string) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: (prevQuantities[id] || 1) + 1
        }));
    };

    const decreaseQuantity = (id: string) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: Math.max((prevQuantities[id] || 1) - 1, 1)
        }));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Productos</Text>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.productContainer}>
                        <Image source={item.image} style={styles.productImage} />
                        <Text style={styles.productName}>{item.name}</Text>
                        <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
                        <View style={styles.quantityContainer}>
                            <TouchableOpacity style={styles.quantityButton} onPress={() => decreaseQuantity(item.id)}>
                                <Text style={styles.quantityButtonText}>-</Text>
                            </TouchableOpacity>
                            <TextInput
                                style={styles.quantityInput}
                                value={(quantities[item.id] || 1).toString()}
                                keyboardType="numeric"
                                editable={false}
                            />
                            <TouchableOpacity style={styles.quantityButton} onPress={() => increaseQuantity(item.id)}>
                                <Text style={styles.quantityButtonText}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.button} onPress={() => addToCart(item)}>
                            <Text style={styles.buttonText}>Agregar al carrito</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
            <View style={styles.cartContainer}>
                <Text style={styles.cartTitle}>Productos en el Carrito:</Text>
                <FlatList
                    data={cart}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <View style={styles.cartItemContainer}>
                            <Image source={item.image} style={styles.cartItemImage} />
                            <Text style={styles.cartItemName}>{item.name}</Text>
                            <Text style={styles.cartItemPrice}>${item.price.toFixed(2)}</Text>
                            <Text style={styles.cartItemQuantity}>Cantidad: {item.quantity}</Text>
                            <TouchableOpacity style={styles.removeButton} onPress={() => removeFromCart(item.id)}>
                                <Text style={styles.removeButtonText}>Eliminar</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
                <Text style={styles.totalText}>Total: ${calculateTotal().toFixed(2)}</Text>
                <TouchableOpacity style={styles.purchaseButton} onPress={handlePurchase}>
                    <Text style={styles.purchaseButtonText}>Realizar Compra</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CartScreen;