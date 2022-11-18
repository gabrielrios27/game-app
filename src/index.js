import { Game, StartGame } from './screens/index';
import { Text, View } from 'react-native';

import { Header } from './components/index';
import { styles } from './styles';
import { useState } from 'react';

export default function App() {
	const [userNumber, setUserNumber] = useState(null);
	const onStart = (selectedNumber) => {
		setUserNumber(selectedNumber);
	};

	let content = <StartGame onStart={onStart} />;
	if (userNumber) content = <Game userNumber={userNumber} />;
	return (
		<View style={styles.container}>
			<Header title={'Bienvenido'} />
			{content}
		</View>
	);
}
