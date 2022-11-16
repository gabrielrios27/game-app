import { Text, View } from 'react-native';

import { Header } from './components/index';
import { StartGame } from './screens/index';
import { styles } from './styles';

export default function App() {
	return (
		<View style={styles.container}>
			<Header title={'Bienvenido'} />
			<StartGame />
		</View>
	);
}
