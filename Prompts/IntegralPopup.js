import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, Image } from 'react-native';

const closeIcon = require('../images/close.png'); 
const badge = require('../images/badge.png'); 
const badge1 = require('../images/badge1.png'); 
const badge2 = require('../images/badge2.png'); 
const badge3 = require('../images/badge3.png'); 



const IntegralPopup = ({ isVisible, onClose }) => {
  return (
    <Modal animationType="slide" transparent visible={isVisible} onRequestClose={onClose}>
      <View style={styles.popupContainer}>
        <View style={styles.popupContent}>
          <Text>Integral Information</Text>
          <Image source={badge} style={styles.badge} />
          <Image source={badge1} style={styles.badge1} />
          <Image source={badge2} style={styles.badge2} />
          <Image source={badge3} style={styles.badge3} />
          <Text style={styles.Noble1}>Noble I</Text>
          <Text style={styles.Noble2}>Noble II</Text>
          <Text style={styles.Noble3}>Noble III</Text>
          <Text style={styles.Noble4}>Noble IV</Text>

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
    backgroundColor: '#122653', 
    padding: 20,
    alignItems: 'center',
    width: '90%',
    height: 250,
    borderRadius: 2,
    borderColor: 'rgba(255, 255, 255, 0.5)', 
    borderWidth: 0.1, 
    shadowColor: 'gray',
    shadowOpacity: 1, 

    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 60,
    elevation: 5, 
  },
  
  closeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'transparent',
    tintColor: 'white',
  },

  badge: {
    position: 'absolute',
    top: 70,
    right: 290,
    width: 70,
    height: 70,
  },
  badge1: {

    position: 'absolute',
    top: 70,
    right: 205,
    width: 70,
    height: 70,
  },

  badge2: {

    position: 'absolute',
    top: 60,
    right: 110,
    width: 84,
    height: 84,
  },

  badge3: {

    position: 'absolute',
    top: 60,
    right: 10,
    width: 84,
    height: 84,
  },

  Noble1 :{
    fontSize: 15,
    fontWeight:'bold',
    position: 'absolute',
    top: 150,
    right: 305,
  },
  
  Noble2 :{
    fontSize: 15,
    fontWeight:'bold',
    position: 'absolute',
    top: 150,
    right: 220,
  },
  
  Noble3 :{
    fontSize: 15,
    fontWeight:'bold',
    position: 'absolute',
    top: 150,
    right: 130,
  },
  
  Noble4 :{
    fontSize: 15,
    fontWeight:'bold',
    position: 'absolute',
    top: 150,
    right: 30,
  },


});

export default IntegralPopup;
