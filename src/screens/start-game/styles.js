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
		fontFamily: 'MPlusBold',
	},
	card: {
		paddingVertical: 30,
		marginVertical: 20,
		alignItems: 'center',
	},
	cardTitle: { fontSize: 18, color: Colors.black, fontFamily: 'MPlus' },
	input: {
		fontSize: 18,
		width: 60,
		height: 40,
		fontFamily: 'MPlus',
	},
	buttonContainer: {
		flexDirection: 'row',
		width: '80%',
		justifyContent: 'space-evenly',
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
		fontFamily: 'MPlusBold',
	},
});
