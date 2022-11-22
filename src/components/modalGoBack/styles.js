import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
	modalContainer: {
		height: '100%',
		justifyContent: 'center',
	},
	modalGoBack: {
		backgroundColor: colors.grey,
		paddingTop: 20,
		paddingBottom: 30,
		paddingLeft: 20,
		paddingRight: 20,
		justifyContent: 'center',
		margin: 20,
		borderRadius: 5,
	},
	modalMessage: {
		marginTop: 10,
		marginBottom: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalMessageTextValue: {
		fontSize: 16,
		color: colors.white,
	},
	modalMessageTextQuestion: {
		fontSize: 16,
		color: colors.white,
	},
	modalButtonContainer: {
		marginTop: 10,
		flexDirection: 'row-reverse',
		justifyContent: 'space-evenly',
	},
});
