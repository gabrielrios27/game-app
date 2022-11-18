import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
	container: {
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
