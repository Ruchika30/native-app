import {Text, TouchableOpacity, StyleSheet} from 'react-native';
interface IButtonProps {
  onClick: () => void;
  title: string;
  variant: string;
  fullWidth: boolean;
}

function ButtonComponent({
  onClick,
  title,
  variant,
  fullWidth = true,
}: IButtonProps) {
  const styles = StyleSheet.create({
    button: {
      borderRadius: 5,
      paddingVertical: 6,
      paddingHorizontal: 20,
      width: fullWidth ? '100%' : '50%',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'red',
    },
    default: {
      borderWidth: 0,
    },
    buttonContained: {
      backgroundColor: 'red',
    },
    buttonOutlined: {
      borderWidth: 1,
      borderColor: 'red',
    },
    text: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    textContained: {
      color: 'white',
    },
    textOutlined: {
      color: 'red',
    },
  });

  const buttonStyles =
    variant === 'contained'
      ? [styles.button, styles.buttonContained]
      : variant === 'outlined'
      ? [styles.button, styles.buttonOutlined]
      : [styles.button, styles.default];

  const textStyles =
    variant === 'contained'
      ? [styles.text, styles.textContained]
      : variant === 'outlined'
      ? [styles.text, styles.textOutlined]
      : [styles.text];

  return (
    <TouchableOpacity onPress={onClick} style={[buttonStyles]}>
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
}

export default ButtonComponent;
