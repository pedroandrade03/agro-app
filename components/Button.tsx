import React, { ComponentProps, forwardRef } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import FontAwesomeIcon from '@expo/vector-icons/FontAwesome';

type ButtonProps = {
  title: string;
  icon: FontAwesomeIcons;
} & TouchableOpacityProps;

export const Button = forwardRef<TouchableOpacity, ButtonProps>(
  ({ title, icon, ...touchableProps }, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        {...touchableProps}
        className={`${styles.button} ${touchableProps.className}`}>
        <View className="flex-row items-center">
          <Text className={styles.buttonText}>{title}</Text>
          {icon && <FontAwesomeIcon name={icon} size={32} color="white" style={{ margin: 10 }} />}
        </View>
      </TouchableOpacity>
    );
  }
);

const styles = {
  button: 'items-center bg-green-500 rounded-[28px] shadow-md p-4',
  buttonText: 'text-white text-2xl font-semibold text-center',
};
