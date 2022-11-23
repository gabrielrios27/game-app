import { Modal, Text, View } from 'react-native';

import ButtonGame from '../buttonGame';
import colors from '../../constants/colors';
import { styles } from './styles';

const ModalGoBack = ({ modalVisible, onHandlerModalGoBack }) => {
	return (
		<Modal animationType="fade" visible={modalVisible} transparent={true}>
			<View style={styles.modalContainer}>
				<View style={styles.modalGoBack}>
					<View style={styles.modalMessage}>
						<Text style={styles.modalMessageTextQuestion}>¿Está seguro que desea volver a empezar?</Text>
					</View>
					<View style={styles.modalButtonContainer}>
						<ButtonGame title="Confirmar" color={colors.primary} onPress={() => onHandlerModalGoBack(true)} style={styles.modalButton} />
						<ButtonGame title="Cancelar" color={colors.secondary} onPress={() => onHandlerModalGoBack(false)} style={styles.modalButton} />
					</View>
				</View>
			</View>
		</Modal>
	);
};
export default ModalGoBack;
