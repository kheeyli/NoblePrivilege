import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, Image } from 'react-native';

const closeIcon = require('../images/close.png');
const badgeImage = require('../images/BadgeIcon.png');
const userImage = require('../images/userIcon.png'); 

const BadgePopup = ({ isVisible, onClose }) => {
  return (
    <Modal animationType="slide" transparent visible={isVisible} onRequestClose={onClose}>
      <View style={styles.popupContainer}>
        <View style={styles.popupContent}>
          <Image source={userImage} style={styles.userImage} />
          <Image source={badgeImage} style={styles.badgeImage} />
          <Text style={styles.popupText}>BADGE</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Image source={closeIcon} style={{ width: 22, height: 22 }} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  popupContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end', 
    alignItems: 'center',
    width: '100%', 
    height: '38%', 
  },
  popupContent: {
    backgroundColor: '#092A4B',
    padding: 20,
    alignItems: 'center',
    width: '95%',
    height: '95%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 'auto', 
    borderColor: 'rgba(255, 255, 255, 0.8)',
    borderWidth: 0.3,
    shadowColor: 'white',
    shadowOpacity: 1, 

    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 100, 
    elevation: 15, 
  },
  closeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'transparent',
    tintColor: 'white',
  },
  popupText: {
    color: 'white',
    fontSize: 18,
    marginTop: 10,
  },
  badgeImage: {
    width: 70, 
    height: 65, 
    marginBottom: 20,
    position: 'absolute',
    top: 65,
    right: 220,
    zIndex: 1,
  },
  userImage: {
    width: 180, 
    height: 180, 
    marginBottom: 20,
    position: 'absolute',
    top: 75,
    right: 100,
    zIndex: 1,
  },
});

export default BadgePopup;
