import { Alert, Button, Keyboard, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { ButtonGame, Card, Input } from '../../components/index';

import Colors from '../../constants/colors';
import { styles } from './styles';
import { useState } from 'react';

const StartGame = () => {
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
						<ButtonGame title={'Limpiar'} onPress={onHandleCleanInput} color={Colors.secondary}></ButtonGame>
						<ButtonGame title={'Confirmar'} onPress={onHandleConfirm} color={Colors.primary}></ButtonGame>
					</View>
				</Card>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default StartGame;
