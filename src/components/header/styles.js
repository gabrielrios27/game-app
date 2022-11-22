import Colors from '../../constants/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		left: 0,
		zIndex: 100,
		width: '100%',
		height: 90,
		backgroundColor: Colors.black,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	title: {
		color: Colors.white,
		marginBottom: 25,
		fontFamily: 'MPlusBlack',
	},
});
