import { Text, View } from 'react-native';

import { styles } from './styles';

const Game = ({ userNumber }) => {
	return (
		<View>
			<Text>Game </Text>
			<Text>{userNumber} </Text>
		</View>
	);
};
export default Game;
