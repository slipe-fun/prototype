import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../components/Theme';

const PublishScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Publish</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.light,
  },
});

export default PublishScreen; 