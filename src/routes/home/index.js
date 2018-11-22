import { h, Component } from 'preact';
import styled from 'styled-components';
import dayjs from 'dayjs';

import { Connect } from 'redux-zero/preact';
import actions from '../../stores/actions';

const T = styled.div`
	font-size: 40px;
	padding-top: 60px;
`;

const mapToProps = (count) => (count);

class Home extends Component {
	componentDidMount() {
		console.log('Home here');
	}

	render() {
		return (
			<Connect mapToProps={mapToProps} actions={actions}>
				{({ testStore, increment, decrement }) => (
					<div>
						<T>{JSON.stringify(testStore)}</T>
						<T onClick={increment}>Click here to Add 1</T>
						<T onClick={decrement}>Click here to Minus 1</T>
						<T>Count Here: {testStore.count}</T>
						{testStore.count > 9 && 'THIS IS MORE THAN 9'}
						{dayjs().format()}
					</div>
				)}
			</Connect>
		);
	}
}

export default Home;
