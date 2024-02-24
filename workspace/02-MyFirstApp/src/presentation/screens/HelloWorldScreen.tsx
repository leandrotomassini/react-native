import { StyleSheet, Text, View } from 'react-native';

interface Props {
    name?: string;
}



export const HelloWorldScreen = ({ name = 'World' }: Props) => {

    return (
        <View style={styles.container}>
            <Text
                ellipsizeMode='tail'
                numberOfLines={1}
                style={styles.title}
            >
                Hello, {name}
            </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        color: 'black',
        fontSize: 45,
        padding: 20,
        textAlign: 'center'
    }
});
