import axios from 'axios';
import { getCoursesFromApi } from '../api';

// Tests
describe('getCourses', () => {
    beforeEach(() => {
        // Efface la base de données et ajoute des données de test.
        // Jest attendra que cette promesse soit résolue avant d'exécuter des tests.
        axios.get = jest.fn();
    });

    describe('getCourses', () => {
        it('httpClient is called as expected', () => {
            getCoursesFromApi();
            expect(axios.get).toHaveBeenCalledWith(
                'https://e-courses-coder-default-rtdb.firebaseio.com/courses.json'
            );
        });
    });
});
