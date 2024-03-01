import { Pressable, StyleSheet, Text } from 'react-native';


interface Props {
  label: string;
  onPress?: () => void;
  onLongPres?: () => void;
}

export const PrimaryButton = ( { label, onPress, onLongPres }: Props ) => {

  return (
    <Pressable
      onPress={ () => onPress && onPress() }
      onLongPress={ () => onLongPres && onLongPres() }
      style={
        ( { pressed } ) => [
          styles.button,
          pressed && styles.buttonPress
        ]
      }
    >
      <Text
        style={ {
          color: 'white',
          fontSize: 20
        } }
      >
        { label }
      </Text>
    </Pressable>
  );
};


const styles = StyleSheet.create(
  {
    button: {
      backgroundColor: '#5856D6',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 10,
    },
    buttonPress: {
      backgroundColor: '#4746AB'
    }
  }
);