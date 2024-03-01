import { SafeAreaView } from 'react-native';

import { CounterScreen } from './src/presentation';




export const App = () => {


  return (
    <SafeAreaView style={ { flex: 1 } }>
      <CounterScreen />
    </SafeAreaView>
  );
};