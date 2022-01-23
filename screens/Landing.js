import React from 'react';
import { useSelector } from 'react-redux';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import CourseItem from '../components/CourseItem';
import EmptyData from '../components/EmptyData';

const Landing = ({ navigation }) => {
    const existingCourses = useSelector((state) => state.courses.existingCourses);

    // Si pas de cours afficher, return un message
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
                        onAddToCart={() => navigation.navigate('Cart')}
                    />
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default Landing;
