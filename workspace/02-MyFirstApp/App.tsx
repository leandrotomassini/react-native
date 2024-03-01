import { SafeAreaView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';

import {  DimensionScreen } from './src/presentation';


export const App = () => {


  return (
    <PaperProvider
      settings={ {
        icon: ( props ) => <IonIcon { ...props } />
      } }
    >
      <SafeAreaView style={ { flex: 1 } }>
        <DimensionScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};