import { Button, View } from 'react-native';

import { styles } from './styles';

const ButtonGame = ({ style, ...props }) => {
	return (
		<View style={{ ...styles.container, ...style }}>
			<Button {...props} />
		</View>
	);
};
export default ButtonGame;
