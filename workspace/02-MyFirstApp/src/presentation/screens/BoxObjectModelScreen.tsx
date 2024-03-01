import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

export const BoxObjectModelScreen = () => {

  return (
    <View style={ styles.container }>
      {/* <Text style={ styles.title }>
        BoxObjectScreen
      </Text> */}

      <View style={styles.purpleBox}>
        <Text style={{color: 'white'}}>Hola mundo</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  title: {
    fontSize: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderWidth: 10
  },
  purpleBox: {
    height: 30,
    backgroundColor: 'purple',
    marginHorizontal: 20,
    marginVertical: 50,
    padding: 5
  }
} );