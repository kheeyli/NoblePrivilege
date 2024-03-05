import { StyleSheet } from 'react-native';

const GameInterfaceStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#092A4B',
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      mainContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      button: {
        margin: 5,
        marginTop:50,
        backgroundColor: 'rgba(0, 0, 0, 0.6)', 
        paddingVertical: 6,
        paddingHorizontal: 22,
        borderColor: 'rgba(255, 255, 255, 0.7)', 
        borderWidth: 0.5, 
        shadowColor: 'white', 
        shadowOpacity: 1, 
    
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowRadius: 100, 
        elevation: 15, 
      },
    
      buttonText: {
        color: 'white',
        fontSize: 14,
      },
    
      noblePrivilegeText: {
        color: 'white',
        fontSize: 25,
        fontWeight:'bold',
        position: 'absolute',
        left: 22, 
        top: 22, 
      },
    
      PrivilageText: {
        color: 'white',
        fontSize: 15,
        position: 'absolute',
        left: 125, 
        top: 9, 
      },
    
      Secondtext : {
        color: 'white',
        fontSize: 19,
        marginLeft:20,
      },
    
    
      PrivilageInfoText1 :{
        fontSize: 15,
        fontWeight: 'bold',
        position: 'absolute',
        left: 38, 
        top: 210, 
    
      },
      
      horizontalButtons: {
        flexDirection: 'row',
        justifyContent: 'flex-start', 
        alignItems: 'center',
        paddingTop: 10,
      },
    
      settingsIcon: {
        position: 'absolute',
        top: 1,
        right: 10,
        zIndex: 1,
  
      },
    
      chat: {
        position: 'absolute',
        top: 96,
        right: 7,
        zIndex: 1,
        width:113,
        height:112
      },


      badge: {
        position: 'absolute',
        top: 83.5,
        right: 2,
        zIndex: 1,
        width:125,
        height:125,
      },
    
      frame: {
        position: 'absolute',
        top: 88,
        right: 3,
        zIndex: 1,
        width:122,
        height:122,
      },
    
      logo: {
        width: 100, 
        height: 100,
        marginRight:8,
      },
    
      image: {
        position: 'absolute',
        right: 27, 
        top: 43, 
        width: 14,
        height: 14, 
        
        tintColor:'lightgray',
        backgroundColor: "transparent"
    },
      // first container
      upperContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        marginTop: 70, 
        backgroundColor: 'rgba(255, 255, 255, 0.2)', 
        width: '100%', 
        height: 90, 
        paddingLeft:10,
      },
    // 2nd container
      SecondContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.2)', // Transparent with a hint of white
        width: '100%',
        height: 30,
      },
    
      // 3 vertical
      verticalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 4,
        width: '100%',
        paddingHorizontal: 5,
    },
    
    verticalItem: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        width: '32%', 
        height: 370, 
        margin:2, 
    },

    innerVerticalContainer: {
      backgroundColor: 'white', 
      borderColor: 'rgba(255, 255, 255, 0.8)', 
      borderWidth: 1, 
      borderRadius: 90,
      marginLeft:12,
      position: 'absolute',
      top: 98,
      right: 11.5,
      zIndex: 1,
      width: '82%',
      height: 104,
    },

    innerVerticalContainerFrame: {
      backgroundColor: 'transparent', 
      borderColor: 'rgba(255, 255, 255, 0.8)', 
      borderWidth: 2, 
      borderRadius: 90,
      marginLeft:12,
      position: 'absolute',
      top: 98.5,
      right: 6,
      zIndex: 1,
      width: '82%',
      height: 114,
      shadowColor: 'white', 
      shadowOpacity: 1, 
  
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowRadius: 100, 
      elevation:1,
    },
    
    chatroomContainer: {
      backgroundColor: 'rgba(255, 255, 255, 0.3)', // Transparent with a hint of white
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 150, // Adjust as needed
      width: '95%', // Width of the container
      paddingVertical: 20, // Vertical padding
      paddingHorizontal: 20, // Horizontal padding
      height: 95, // Adjust the height as needed
    },
    
    
    chatroomTitle: {
      fontSize: 13,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 10, // Adjust margin as needed
      position: 'absolute',
      left: 13, // Adjust as needed
      top: 6, // Adjust as needed
    },
    
    innerContainer: {
      backgroundColor: 'rgba(255, 255, 255, 0.3)', // Adjust the background color as needed
      padding: 10,
      borderRadius: 5,
      marginTop: 5,
      width: '100%',
      height: 55,
    },



    

});

export default GameInterfaceStyles;
