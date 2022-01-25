import { ADD_PAYMENT } from '../constants';
import PaymentModel from '../../data/PaymentModel';

// Si on utilise Date().toLocaleDateString..., la date sera affiché différemment entre android et ios, donc on utilise moment
import moment from 'moment';

const initialState = {
    payments: [],
};

const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PAYMENT:
            // {id, courses, total, date}
            const { courses, total } = action.orderInfos;
            const id = Date.now().toString();
            const date = moment(new Date()).format('DD MM YYYY hh:mm');

            const newPayment = new PaymentModel(id, courses, total, date);

            return {
                ...state,
                payments: state.payments.concat(newPayment),
            };
        default:
            return state;
    }
};

export default paymentReducer;
