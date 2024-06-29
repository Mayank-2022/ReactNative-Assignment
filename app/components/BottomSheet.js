/**
 * The function `CustomBottomSheet` creates a custom bottom sheet component in React Native using the
 * @gorhom/bottom-sheet library.
 * @returns The `CustomBottomSheet` component is being returned. It is a functional component that
 * renders a `BottomSheet` component from the '@gorhom/bottom-sheet' library. Inside the `BottomSheet`,
 * there is a `View` containing a title "Bottom Sheet" and a `FlatList` component displaying a list of
 * items from the `data` array. Each item in the list is rendered
 */
import React, { useMemo, useRef } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

const CustomBottomSheet = ({ isVisible, onClose }) => {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);

  const data = [
    { key: 'Enter Name' },
    { key: 'Age' },
    { key: 'Gender' },
    { key: 'Location' },
    { key: 'Work' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.key}</Text>
    </View>
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={isVisible ? 1 : -1}
      snapPoints={snapPoints}
      onClose={onClose}
    >
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Bottom Sheet</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.key}
        />
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    width: '100%',
    alignItems: 'center',
  },
});

export default CustomBottomSheet;
