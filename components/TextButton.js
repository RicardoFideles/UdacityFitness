import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function TextButton({ children, onPres }) {
  return (
    <TouchableOpacity onPress={onPres}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
}
