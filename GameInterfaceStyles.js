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
        fontSize: 22,
        position: 'absolute',
        left: 18, 
        top: 25, 
      },
    
      PrivilageText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        position: 'absolute',
        left: 120, 
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
        left: 30, 
        top: 180, 
    
      },
    
      PrivilageInfoText2 :{
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
        top: 110,
        right: 20,
        zIndex: 1,
        width:90,
        height:85
      },
      badge: {
        position: 'absolute',
        top: 110,
        right: 20,
        zIndex: 1,
        width:90,
        height:85
      },
    
      frame: {
        position: 'absolute',
        top: 110,
        right: 20,
        zIndex: 1,
        width:90,
        height:85
      },
    
      logo: {
        width: 87, 
        marginRight:20,
      },
    
      image: {
        position: 'absolute',
        right: 40, 
        top: 35, 
        width: 18,
        height: 18, 
        
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
        marginTop: 10, // Adjust as needed
        backgroundColor: 'rgba(255, 255, 255, 0.2)', // Transparent with a hint of white
        width: '100%',
        height: 30, // Adjust as needed
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
        width: '32%', // Adjust the width as needed
        height: 370, // Adjust the height as needed
        margin:2, 
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
