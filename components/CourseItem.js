import React from 'react';
import { Animated, Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import globalStyles from '../styles/globalStyles';

// Affiche un cours
const CourseItem = ({ image, title, price, viewDetails, onAddToCart }) => {
    return (
        // Le cours est cliquable : TouchableHightMight ne peut avoir qu'un enfant
        <TouchableHighlight underlayColor={globalStyles.green} onPress={viewDetails}>
            <View style={styles.courseContainer}>
                {/* Image */}
                <View style={styles.imageContainer}>
                    <Image source={{ uri: image }} style={styles.image} />
                </View>
                {/* Details (title, price)  */}
                <View style={styles.courseContainerDetails}>
                    <Text style={styles.courseTitle}>{title}</Text>
                    <Text style={styles.coursePrice}>{price.toFixed(2)}</Text>
                </View>
                {/* Icons (eye, basket) */}
                <View style={styles.iconsContainer}>
                    <TouchableOpacity onPress={viewDetails}>
                        <MaterialIcons name="remove-red-eye" size={35} color={globalStyles.green} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onAddToCart}>
                        <MaterialIcons name="shopping-basket" size={35} color={globalStyles.green} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    courseContainer: {
        height: 300,
        margin: 25,
        backgroundColor: globalStyles.white,
        borderRadius: 10,
        borderColor: globalStyles.lightGrey,
        borderWidth: 1,
    },
    imageContainer: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    courseContainerDetails: {
        alignItems: 'center',
        height: '20%',
        padding: 10,
    },
    courseTitle: {
        fontSize: 18,
        marginVertical: 4,
        color: globalStyles.green,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    coursePrice: {
        color: globalStyles.darkGrey,
        fontSize: 16,
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '20%',
        paddingHorizontal: 30,
    },
});

export default CourseItem;
