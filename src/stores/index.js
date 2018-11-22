import createStore from 'redux-zero';
import testStore from './testStore';

const initialState = {
	testStore
};
const store = createStore(initialState);

export default store;