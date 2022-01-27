import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View, Text, FlatList, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { deleteCourse } from '../redux/actions/deleteCourse.action';
import EmptyData from '../components/EmptyData';
import globalStyles from '../styles/globalStyles';
import { TouchableOpacity } from 'react-native';

const UserCourses = ({ navigation }) => {
    const loggedInMemberCourses = useSelector((state) => state.courses.loggedInMemberCourses);
    const dispatch = useDispatch();

    // Delete Course
    const handleDeleteCourse = (id) => {
        Alert.alert('ATTENTION', 'Voulez-vous supprimer ce cours ?', [
            { text: 'NON' },
            { text: 'Oui', onPress: () => dispatch(deleteCourse(id)) },
        ]);
    };

    // Si pas de data, return un message
    if (!loggedInMemberCourses.length) {
        return <EmptyData text="Pas de cours à afficher" />;
    }

    return (
        <FlatList
            data={loggedInMemberCourses}
            renderItem={({ item }) => (
                <View style={styles.courseContainer}>
                    <View style={styles.courseInfo}>
                        <Text style={styles.courseTitle}>{item.title}</Text>
                        <Text style={styles.coursePrice}>{item.price} €</Text>
                    </View>
                    <View style={styles.btnIcons}>
                        <TouchableOpacity style={styles.touchableIcon}>
                            <AntDesign
                                name="edit"
                                size={24}
                                color={globalStyles.green}
                                onPress={() => navigation.navigate('Edit', { courseId: item.id })}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.touchableIcon}
                            onPress={() => handleDeleteCourse(item.id)}>
                            <AntDesign name="delete" size={24} color={globalStyles.green} />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    courseContainer: {
        backgroundColor: globalStyles.white,
        borderRadius: 10,
        marginVertical: 9,
        marginHorizontal: 17,
        paddingVertical: 15,
        paddingHorizontal: 9,
    },
    courseInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 9,
        paddingHorizontal: 9,
    },
    coursePrice: {
        color: globalStyles.green,
    },
    btnIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    touchableIcon: {
        padding: 9,
    },
});

export default UserCourses;
