import { Colors } from 'react-native/Libraries/NewAppScreen';
import { StyleSheet } from 'react-native';
import colors from './../../constants/colors';

export const styles = StyleSheet.create({
	container: {
		width: '100%',
		alignItems: 'center',
		marginVertical: 20,
	},
	title: { fontSize: 22, color: Colors.black },
	card: { marginVertical: 20, alignItems: 'center' },
	cardTitle: { fontSize: 18, color: Colors.black },
	input: { fontSize: 18, marginVertical: 10 },
	buttonContainer: { flexDirection: 'row', width: '80%', justifyContent: 'space-evenly' },
});
