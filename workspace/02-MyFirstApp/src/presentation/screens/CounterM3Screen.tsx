import { useState } from 'react';
import { Text, View } from 'react-native';
import { FAB } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import { globalStyles } from '../theme/global.styles';




export const CounterM3Screen = () => {

  const [ counter, setCounter ] = useState( 10 );

  return (
    <View style={ globalStyles.centerContainer }>

      <Text style={ globalStyles.title }>
        { counter }
      </Text>

      <FAB
        onPress={ () => setCounter( counter + 1 ) }
        onLongPress={ () => setCounter( 0 ) }
        style={ globalStyles.fab }
        icon="add-outline"
      />

    </View>
  );
};


