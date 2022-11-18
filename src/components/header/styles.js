import Colors from '../../constants/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 90,
		backgroundColor: Colors.black,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	title: {
		color: Colors.white,
		marginBottom: 25,
	},
});
