import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
	container: {
		width: '100%',
		padding: 20,
	},
	card: {
		paddingVertical: 30,
		marginVertical: 20,
		alignItems: 'center',
	},
	title: {
		fontSize: 18,
		color: colors.black,
		fontFamily: 'MPlusBold',
	},
	containerButtons: {
		flexDirection: 'row',
		width: '80%',
		justifyContent: 'space-evenly',
	},
});
