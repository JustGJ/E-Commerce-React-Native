import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ScrollView, StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { addToCart } from '../redux/actions/addToCart.action';
import globalStyles from '../styles/globalStyles';

// Details
const CourseInfos = ({ navigation, route }) => {
    const courseId = route.params.courseId; // id du cours passé en param via FlatList
    const dispatch = useDispatch();

    // On return le cours dont l'id transmit est égal à celui qui est parcouru dans notre store
    // On pouvait aussi passer par les props ...
    const selectedCourse = useSelector((state) =>
        state.courses.existingCourses.find((course) => course.id === courseId)
    );

    // Ajout dans panier, et retour page précédent
    const handleAddToCart = () => {
        dispatch(addToCart(selectedCourse));
        navigation.goBack();
        alert('Article ajouté au panier');
    };

    return (
        <View>
            {/* ScrollView */}
            <ScrollView style={styles.scroll}>
                {/* Image */}
                <Image source={{ uri: selectedCourse.image }} style={styles.courseImage} />
                {/* Details */}
                <View style={styles.courseDetails}>
                    <Text style={styles.courseDescription}>{selectedCourse.description}</Text>
                    <Text style={styles.courseDescription}>{selectedCourse.description}</Text>
                    <Text style={styles.courseDescription}>{selectedCourse.description}</Text>
                    <Text style={styles.courseDescription}>{selectedCourse.description}</Text>
                    <Text style={styles.courseDescription}>{selectedCourse.description}</Text>
                </View>
            </ScrollView>

            {/* Footer */}
            <View style={styles.footerContainer}>
                {/* Price */}
                <View style={styles.footerTop}>
                    <View style={styles.coursePriceWrapper}>
                        <Text style={styles.coursePrice}>{selectedCourse.price.toFixed(2)} €</Text>
                    </View>
                </View>
                {/* Buttons actions goBack() and addCart */}
                <View style={styles.footerBottom}>
                    <MaterialIcons
                        name="arrow-back-ios"
                        size={24}
                        color={globalStyles.white}
                        onPress={() => navigation.goBack()}
                    />
                    <TouchableOpacity onPress={handleAddToCart}>
                        <View style={styles.btnAddTocart}>
                            <Text style={styles.btnAddToCartText}>Ajouter au panier</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: globalStyles.white,
        height: '80%',
    },
    courseImage: {
        width: '100%',
        height: 250,
    },
    courseDetails: {
        padding: 20,
        alignItems: 'center',
    },
    courseDescription: {
        color: globalStyles.dimGray,
        fontSize: 17,
        marginHorizontal: 20,
        marginVertical: 10,
    },
    footerContainer: {
        height: '20%',
    },
    footerTop: {
        height: '40%',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    coursePriceWrapper: {
        paddingRight: 40,
    },
    coursePrice: {
        fontSize: 24,
        color: globalStyles.green,
    },
    footerBottom: {
        backgroundColor: globalStyles.green,
        height: '60%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
    },
    btnAddTocart: {
        borderRadius: 6,
        paddingVertical: 9,
        paddingHorizontal: 25,
        backgroundColor: globalStyles.lightOrange,
    },
    btnAddToCartText: {
        fontSize: 19,
    },
});

export default CourseInfos;
