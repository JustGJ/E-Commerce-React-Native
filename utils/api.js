import axios from 'axios';

const API_URL = 'https://e-courses-coder-default-rtdb.firebaseio.com/courses.json';

export const getCourses = async () => {
    return await axios
        .get(API_URL)
        .then((res) => Object.values(res.data))
        .catch((error) => {
            console.log(error);
        });
};
