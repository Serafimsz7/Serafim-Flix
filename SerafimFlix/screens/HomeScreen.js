import { View, Text } from 'expo-status-bar'
import React from 'react'
import { View, Text, Platform, TouchOpacity, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { BarsBottomLeftIcon, MagnifygGlassIcon } from 'react-native-heroicons/'
import { styles } from '../theme'

const ios = Platform.os == 'ios';

export default function HomeScreen() {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}