import { Colors } from 'react-native/Libraries/NewAppScreen';
import { StyleSheet } from 'react-native';
import colors from './../../constants/colors';

export const styles = StyleSheet.create({
	container: {
		width: '100%',
		alignItems: 'center',
		marginVertical: 20,
	},
	title: {
		fontSize: 22,
		color: Colors.black,
	},
	card: {
		paddingVertical: 30,
		marginVertical: 20,
		alignItems: 'center',
	},
	cardTitle: { fontSize: 18, color: Colors.black },
	input: {
		fontSize: 18,
		width: 60,
		height: 40,
	},
	buttonContainer: {
		flexDirection: 'row',
		width: '80%',
		justifyContent: 'space-evenly',
	},
	button: {
		width: 130,
		borderRadius: 30,
		overflow: 'hidden',
	},
	confirmedContainer: {
		paddingVertical: 30,
		paddingHorizontal: 50,
		marginVertical: 20,
		alignItems: 'center',
	},
	confirmedTitle: {
		fontSize: 18,
		color: colors.grey,
	},
	containerNumber: {
		marginVertical: 20,
		padding: 10,
		backgroundColor: colors.primary,
		borderRadius: 5,
	},
	selectedNumber: {
		fontSize: 22,
		color: colors.white,
	},
});
