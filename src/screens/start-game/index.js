import { Button, Keyboard, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { Card, Input } from '../../components/index';

import Colors from '../../constants/colors';
import { styles } from './styles';
import { useState } from 'react';

const StartGame = () => {
	const [number, setNumber] = useState('');
	const onHandleChange = (value) => {
		setNumber(value.replace(/[^0-9]/g, ''));
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
						<View style={styles.button}>
							<Button title={'Limpiar'} onPress={() => {}} color={Colors.secondary} />
						</View>
						<View style={styles.button}>
							<Button title={'Confirmar'} onPress={() => {}} color={Colors.primary} />
						</View>
					</View>
				</Card>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default StartGame;
