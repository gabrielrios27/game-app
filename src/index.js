import { ActivityIndicator, Text, View } from 'react-native';
import { Game, StartGame } from './screens/index';

import { Header } from './components/index';
import colors from './constants/colors';
import { styles } from './styles';
import { useFonts } from 'expo-font';
import { useState } from 'react';

export default function App() {
	const [loaded] = useFonts({
		MPlus: require('../assets/fonts/MPLUSRounded1c-Regular.ttf'),
		MPlusBold: require('../assets/fonts/MPLUSRounded1c-Bold.ttf'),
		MPlusBlack: require('../assets/fonts/MPLUSRounded1c-Black.ttf'),
	});

	const [userNumber, setUserNumber] = useState(null);
	const onStart = (selectedNumber) => {
		setUserNumber(selectedNumber);
	};
	const headerTitle = userNumber ? 'A jugar!' : 'Bienvenido';
	let content = <StartGame onStart={onStart} />;
	if (userNumber) content = <Game userNumber={userNumber} />;

	if (!loaded)
		return (
			<View style={styles.spinnerContainer}>
				<ActivityIndicator size="large" color={colors.primary} />
			</View>
		);

	return (
		<View style={styles.container}>
			<Header title={headerTitle} />
			{content}
		</View>
	);
}
