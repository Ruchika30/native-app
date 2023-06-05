import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    padding: 30,
    backgroundColor: 'black',
  },
  button: {
    borderRadius: 5,
    paddingVertical: 6,
    paddingHorizontal: 20,
    minWidth: 100,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'red',
  },

  buttonOutlined: {
    borderWidth: 1,
    borderColor: 'red',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textOutlined: {
    color: 'red',
  },
  container: {
    height: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 0,
  },
  marginB: {
    marginBottom: 10,
  },
  imageStyle: {
    width: 'auto',
    height: 300,
    marginBottom: 15,
    alignItems: 'center',
  },
  buttonWrapper: {
    height: '60%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
});
