const actions = store => ({
	increment: state => {
		console.log('Increment');
		return {
			testStore: {
				count: state.testStore.count + 1
			}
		};
	},
	decrement: state => {
		console.log('Decrement');
		return {
			testStore: {
				count: state.testStore.count - 1
			}
		};
	}
});

export default actions;
