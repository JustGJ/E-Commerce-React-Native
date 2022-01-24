import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import React from 'react';

const Cart = () => {
    const cartCourses = useSelector((state) => state.cart.cartCourses);
    const totalCourses = useSelector((state) => state.cart.total);

    console.log(cartCourses, totalCourses);

    return (
        <View>
            <Text>Cart</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default Cart;
