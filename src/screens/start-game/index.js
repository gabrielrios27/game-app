import { Alert, Button, Keyboard, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { ButtonGame, Card, Input, NumberContainer } from '../../components/index';

import colors from '../../constants/colors';
import { styles } from './styles';
import { useState } from 'react';

const StartGame = ({ onStart }) => {
	const [number, setNumber] = useState('');
	const [confirmed, setConfirmed] = useState(false);
	const [selectedNumber, setSelectedNumber] = useState(null);

	const onHandleChange = (value) => {
		setNumber(value.replace(/[^0-9]/g, ''));
	};

	const onHandleCleanInput = () => {
		setNumber('');
		setConfirmed(false);
	};

	const onHandleConfirm = () => {
		const chosenNumber = parseInt(number, 10);
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert('Número inválido', 'El número debe estar entre 1 y 99', [{ text: 'Ok', style: 'destructive', onPress: onHandleCleanInput }]);
		} else {
			setConfirmed(true);
			setSelectedNumber(chosenNumber);
			setNumber('');
		}
	};
	const confirmedNumber = confirmed ? (
		<Card style={styles.confirmedContainer}>
			<Text style={styles.confirmedTitle}>Número elejido</Text>
			<NumberContainer number={selectedNumber} />
			<ButtonGame title={'Empezar'} onPress={() => onStart(selectedNumber)} color={colors.persianOrange} />
		</Card>
	) : null;
	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<View style={styles.container}>
				<Text style={styles.title}>Empezar</Text>
				<Card style={styles.card}>
					<Text style={styles.cardTitle}>Elija un número</Text>
					<Input
						style={styles.input}
						placeholder="0"
						maxLength={2}
						keyboardType="number-pad"
						blurOnSubmit
						autoCapitalize="none"
						autoCorrect={false}
						value={number}
						onChangeText={onHandleChange}
					/>
					<View style={styles.buttonContainer}>
						<ButtonGame title={'Limpiar'} onPress={onHandleCleanInput} color={colors.secondary} />
						<ButtonGame title={'Confirmar'} onPress={onHandleConfirm} color={colors.primary} />
					</View>
				</Card>
				{confirmedNumber}
			</View>
		</TouchableWithoutFeedback>
	);
};

export default StartGame;
