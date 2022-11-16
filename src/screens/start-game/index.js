import { Button, Keyboard, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';

import Colors from '../../constants/colors';
import { styles } from './styles';

const StartGame = () => {
	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<View style={styles.container}>
				<Text style={styles.title}>Empezar</Text>
				<View style={styles.card}>
					<Text style={styles.cardTitle}>Elija un número</Text>
					<TextInput style={styles.input} placeholder="0" />
					<View style={styles.buttonContainer}>
						<Button title={'Limpiar'} onPress={() => {}} color={Colors.primary} />
						<Button title={'Confirmar'} onPress={() => {}} color={Colors.persianOrange} />
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default StartGame;
