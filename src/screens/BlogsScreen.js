import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../constants/Theme';

const BlogsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Blogs</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
});

export default BlogsScreen; 