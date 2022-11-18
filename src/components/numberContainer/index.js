import { Text, View } from 'react-native';

import { styles } from './styles';

const NumberContainer = ({ number }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.selectedNumber}>{number}</Text>
		</View>
	);
};
export default NumberContainer;
