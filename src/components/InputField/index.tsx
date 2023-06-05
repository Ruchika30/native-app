import React from 'react';
import {TextInput} from 'react-native';

function InputField({styles, placeholder, value, onChange, keyboardType}) {
  return (
    <TextInput
      style={styles}
      placeholderTextColor="white"
      placeholder={placeholder}
      value={value}
      onChangeText={onChange}
      keyboardType={keyboardType}
    />
  );
}

export default InputField;
