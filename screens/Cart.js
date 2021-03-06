import React from 'react';
import { FlatList, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import EmptyData from '../components/EmptyData';
import CoursesInCart from '../components/CoursesInCart';
import globalStyles from '../styles/globalStyles';
import { addPayment } from '../redux/actions/payment.action';
import { removeCourseToCart } from '../redux/actions/removeCourseToCart.action';

const Cart = () => {
    const cartCourses = useSelector((state) => state.cart.cartCourses);
    const totalCourses = useSelector((state) => state.cart.total);
    const dispatch = useDispatch();

    // Paiement
    const handlePayment = (cartCourses, total) => {
        dispatch(addPayment(cartCourses, total));
        alert('Paiement effectué !');
    };

    // Si pas de cours dans le Panier, return un message
    if (!cartCourses.length) {
        return <EmptyData text="Panier Vide" />;
    }

    return (
        <View style={styles.cartContainer}>
            <View>
                <FlatList
                    data={cartCourses}
                    renderItem={({ item }) => (
                        <CoursesInCart
                            title={item.title}
                            price={item.price}
                            onDelete={() => dispatch(removeCourseToCart(item.id))}
                        />
                    )}
                />
                <View style={styles.totalContainer}>
                    <Text style={styles.totalText}>
                        Total :<Text style={styles.totalPrice}>{totalCourses.toFixed(2)} €</Text>
                    </Text>
                    <TouchableOpacity onPress={() => handlePayment(cartCourses, totalCourses)}>
                        <View style={styles.btnAddPayment}>
                            <Text style={styles.btnAddPaymentText}>Payer</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cartContainer: {
        margin: 20,
    },
    totalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 19,
    },
    totalText: {
        fontWeight: 'bold',
        fontSize: 19,
    },
    totalPrice: {
        color: globalStyles.green,
    },
    btnAddPayment: {
        borderRadius: 6,
        paddingVertical: 9,
        paddingHorizontal: 25,
        backgroundColor: globalStyles.orange,
    },
    btnAddPaymentText: {
        fontSize: 17,
    },
});

export default Cart;
