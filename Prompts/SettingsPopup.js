import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, Image } from 'react-native';

const closeIcon = require('vertics/images/close.png'); 

const SettingsPopup = ({ isVisible, onClose }) => {
  return (
    <Modal animationType="slide" transparent visible={isVisible} onRequestClose={onClose}>
      <View style={styles.popupContainer}>
        <View style={styles.popupContent}>
          <Text>Settings</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
           
            <Image source={closeIcon} style={{ width: 22, height: 22  }}  />

          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  popupContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupContent: {
    backgroundColor: '#122653', // ahint of #0B234A
    padding: 20,
    alignItems: 'center',
    width: '90%',
    height: 250,
    borderRadius: 2,
  },
  
  closeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'transparent',
    tintColor: 'white',
  },

});

export default SettingsPopup;
