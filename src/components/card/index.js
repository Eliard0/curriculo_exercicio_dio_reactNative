import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Card = () => {
    return (
        <>
            <View style={styles.card}>
                <View style={styles.card_header}>
                    <Text>Experiencia proficinal</Text>
                </View>
                <View style={styles.card_content}>
                    <Text style={styles.card_content_text}>* LocService : Atualmente</Text>
                    <Text style={styles.card_content_text}>- Desenvolvedor web junior</Text>
                </View>
                <View style={styles.card_content}>
                    <Text style={styles.card_content_text}>* Iqnus Tecnologia : Estagiario</Text>
                    <Text style={styles.card_content_text}>- Estagiario de desenvolvimento web</Text>
                </View>
            </View>
            <View style={styles.card}>
                <View style={styles.card_header}>
                    <Text>Formação</Text>
                </View>
                <View style={styles.card_content}>
                    <Text style={styles.card_content_text}>* Analise e desenvolvimento de sistemas</Text>
                    <Text style={styles.card_content_text}>- Unifor: universidade de fortaleza</Text>
                </View>
            </View>
        </>
    )
}
export default Card