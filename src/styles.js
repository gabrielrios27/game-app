import Colors from './constants/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.white,
		alignItems: 'center',
	},
	spinnerContainer: {
		height: '100%',
		justifyContent: 'center',
	},
});
