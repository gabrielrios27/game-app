import { ButtonGame, Card, NumberContainer } from '../../components';
import { Text, View } from 'react-native';

import colors from '../../constants/colors';
import { styles } from './styles';
import { useState } from 'react';

const generateRandomNumber = (min, max, current) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	const randomNumber = Math.floor(Math.random() * (max - min) + min);
	if (randomNumber === current) {
		return generateRandomNumber(min, max, current);
	} else {
		return randomNumber;
	}
};
const Game = ({ userNumber }) => {
	const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, userNumber));
	const onHandleLower = () => {
		setCurrentGuess(generateRandomNumber(1, 100, userNumber));
	};
	return (
		<View style={styles.container}>
			<Card style={styles.card}>
				<Text style={styles.title}>Número del Oponente</Text>
				<NumberContainer number={currentGuess} />
				<View style={styles.containerButtons}>
					<ButtonGame title={'Menor'} onPress={onHandleLower} color={colors.coolGrey} />
					<ButtonGame title={'Mayor'} onPress={onHandleLower} color={colors.burntOrange} />
				</View>
			</Card>
		</View>
	);
};
export default Game;
