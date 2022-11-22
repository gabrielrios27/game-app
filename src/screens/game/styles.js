import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
	container: {
		width: '100%',
		padding: 20,
		height: '100%',
	},
	card: {
		paddingVertical: 30,
		marginTop: 20,
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
	containerGoBack: {
		alignSelf: 'flex-start',
		position: 'absolute',
		bottom: 0,
		paddingBottom: 10,
	},
	goBack: {
		width: 70,
		height: 70,
	},
});
