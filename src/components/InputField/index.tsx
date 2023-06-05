import React from 'react';
import {TextInput, KeyboardTypeOptions} from 'react-native';

interface InputFieldProps {
  styles: {};
  placeholder: string;
  value: string;
  onChange: () => void;
  keyboardType: KeyboardTypeOptions;
}

function InputField({
  styles,
  placeholder,
  value,
  onChange,
  keyboardType,
}: InputFieldProps) {
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
