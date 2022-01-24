import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList, StyleSheet, View } from 'react-native';
import CourseItem from '../components/CourseItem';
import EmptyData from '../components/EmptyData';
import { addToCart } from '../redux/actions/addToCart.action';
import CartCourse from '../data/CartCourseModel';

const Landing = ({ navigation }) => {
    const dispatch = useDispatch();
    const existingCourses = useSelector((state) => state.courses.existingCourses);

    const handleAddToCart = (course) => {
        dispatch(addToCart(course));
        alert('Article ajouté au panier');
    };

    // Si pas de cours dans le store, return un message
    if (!existingCourses.length) {
        return <EmptyData text="Pas de cours à afficher" />;
    }

    // Sinon on afficher les cours
    return (
        <View>
            <FlatList
                data={existingCourses}
                renderItem={({ item }) => (
                    <CourseItem
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        viewDetails={() =>
                            navigation.navigate('Details', { courseId: item.id, title: item.title })
                        }
                        onAddToCart={() => handleAddToCart(item)}
                    />
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default Landing;
