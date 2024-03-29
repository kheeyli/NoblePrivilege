// GameInterface.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import SettingsPopup from './Prompts/SettingsPopup';
import FAQsPopup from './Prompts/FAQsPopup';
import IntegralPopup from './Prompts/IntegralPopup';
import WelfarePopup from './Prompts/WelfarePopup';
import ExtraButtonPopup from './Prompts/ExtraButtonPopup';
import ChatPopup from './Prompts/ChatPopup';
import BadgePopup from './Prompts/BadgePopup';
import FramePopup from './Prompts/FramePopup';
import styles from './GameInterfaceStyles'; // Import the styles from the separate file

const settingsIcon = require('./images/settingsIcon.png'); 

const GameInterface = () => {
  const [settingsVisible, setSettingsVisible] = useState(false);
  const [faqsVisible, setFaqsVisible] = useState(false);
  const [welfareVisible, setWelfareVisible] = useState(false);
  const [integralVisible, setIntegralVisible] = useState(false);
  const [extraVisible, setExtraVisible] = useState(false);
  const [chatVisible, setChatVisible] = useState(false);
  const [frameVisible, setFrameVisible] = useState(false);
  const [badgeVisible, setBadgeVisible] = useState(false);

  const handleButtonPress = (buttonName) => {
    switch (buttonName) {
      case 'Settings': 
        setSettingsVisible(true);
        break;
      case 'Welfare':
        setWelfareVisible(true);
        break;
      case 'Integral':
        setIntegralVisible(true);
        break;
      case 'Extra':
        setExtraVisible(true);
        break;
      case 'FAQs': 
        setFaqsVisible(true);
        break;
        case 'Chat': 
        setChatVisible(true);
        break;
      case 'Badge': 
        setBadgeVisible(true);
        break;
      case 'Frame': 
        setFrameVisible(true);
        break;
      default:
        break;
    } 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.noblePrivilegeText}>Noble Privilege</Text>

      <TouchableOpacity onPress={() => handleButtonPress('FAQs')}>
        <Image source={require('./images/faqsIcon.png')} style={styles.image} />
      </TouchableOpacity>



      <View style={styles.upperContainer}>
        <Text style={styles.PrivilageText}>Spend points to upgrade to Noble 1</Text>

        <View style={styles.logoContainer}>
          <Image source={require('./images/logo.png')} style={styles.logo} />
        </View>

        <TouchableOpacity onPress={() => handleButtonPress('Welfare')} style={styles.button}>
          <Text style={styles.buttonText}>Welfare</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleButtonPress('Integral')} style={styles.button}>
          <Text style={styles.buttonText}>Integral</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleButtonPress('Extra')} style={styles.button}>
          <Text style={styles.buttonText}>Extra</Text>
        </TouchableOpacity>
      </View>


      {/* Second horizontal container */}
      <View style={styles.SecondContainer}>

      <Text style={styles.Secondtext}>Noble Privilages</Text>

        <TouchableOpacity onPress={() => handleButtonPress('Settings')} style={styles.settingsIcon}>
          <Image source={settingsIcon} style={{ width: 26, height: 25 }} />
        </TouchableOpacity>
      </View>

    

        <View style={styles.verticalContainer}>
          {/* Container 1 */}
          
          <View style={styles.verticalItem}>

            <TouchableOpacity onPress={() => handleButtonPress('Chat')}>
            <View style={styles.innerVerticalContainer}>
          {/* Add your components here */}
        </View>
              <View style={styles.logoContainer}>
                <Image source={require('./images/chatIcon.png')} style={styles.chat} />
              </View>
            </TouchableOpacity>
            <Text style={styles.PrivilageInfoText1}>Privilege 1</Text>

          </View>

          {/* Container 2 */}
          <View style={styles.verticalItem}>
            <TouchableOpacity onPress={() => handleButtonPress('Badge')}>
            <View style={styles.innerVerticalContainer}>
          {/* Add your components here */}
        </View>

              <View style={styles.logoContainer}>
                <Image source={require('./images/BadgeIcon.png')} style={styles.badge} />
              </View>
            </TouchableOpacity>
            <Text style={styles.PrivilageInfoText1}>Privilege 2</Text>
          </View>

          {/* Container 3 */}
          <View style={styles.verticalItem}>
            <TouchableOpacity onPress={() => handleButtonPress('Frame')}>

              <View style={styles.logoContainer}>
                <Image source={require('./images/AvatarFrame.png')} style={styles.frame} />
              </View>
            </TouchableOpacity>
            <Text style={styles.PrivilageInfoText1}>Privilege 3</Text>
          </View>
        </View>



   {/* Standby chatroom container */}
   <View style={styles.chatroomContainer}>
        <Text style={styles.chatroomTitle}>Standby Chatroom</Text>

        <View style={styles.innerContainer}>
          {/* Add your components here */}
        </View>
      </View>




      <View style={styles.mainContent}>

      </View>
      
      {/* Popups */}
      <SettingsPopup isVisible={settingsVisible} onClose={() => setSettingsVisible(false)} />
      <FAQsPopup isVisible={faqsVisible} onClose={() => setFaqsVisible(false)} />
      <WelfarePopup isVisible={welfareVisible} onClose={() => setWelfareVisible(false)} />
      <IntegralPopup isVisible={integralVisible} onClose={() => setIntegralVisible(false)} />
      <ExtraButtonPopup isVisible={extraVisible} onClose={() => setExtraVisible(false)} />

      <ChatPopup isVisible={chatVisible} onClose={() => setChatVisible(false)} />
      <BadgePopup isVisible={badgeVisible} onClose={() => setBadgeVisible(false)} />
      <FramePopup isVisible={frameVisible} onClose={() => setFrameVisible(false)} />


    </View>
  );
};

export default GameInterface;



