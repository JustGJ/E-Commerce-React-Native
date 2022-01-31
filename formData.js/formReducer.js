// Reducer Form via useReducer
export const formReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_VALIDATION':
            // Mise à jour input
            const updatedInputValues = {
                ...state.inputValues,
                [action.input]: action.value, // key : value
            };

            // Mise à jour false ou true validInput
            const updatedIsValidInput = {
                ...state.isValidInput,
                [action.input]: action.isValid,
            };

            // Vérifie si les 4 valeurs sont passées à true pour afficher le bouton Valider
            let updatedFormIsValid = true;
            for (const key in updatedIsValidInput) {
                updatedFormIsValid = updatedFormIsValid && updatedIsValidInput[key];
                // console.log(updatedFormIsValid);
            }

            return {
                ...state,
                inputValues: updatedInputValues,
                isValidInput: updatedIsValidInput,
                isValidForm: updatedFormIsValid,
            };

        default:
            return state;
    }
};
