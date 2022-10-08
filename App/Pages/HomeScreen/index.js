import * as React from 'react';
import {View,
  Text, 
  SafeAreaView, 
  StyleSheet,
  TextInput , 
  StatusBar, 
  Image,
  Button,
  Pressable,
  TouchableOpacity} from 'react-native';
  import {
    IconKemen,
    IconKomin,
    IconKpcpen,
    IconBumn,
    IconTop,
    IconMail,
    IconLock,
    Iconhqr,
    IconArw,
    IconSc,
    IconNoti,
    IconUser
} from '../../assets'

const onPress=()=>{
  alert('asdf')
}

export default HomeScreen = () => {
const CekButton=()=>{
  return(
    <View style={{  alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    marginStart:50,
    marginTop:8,
    width:130,
    height:40,
    borderRadius:30,
    backgroundColor:'#EAF5F9'}}>
            
            <Image source={IconSc} style={{marginHorizontal:10,width:21,height:20}}/>
            <Text style={{fontFamily:'Poppins-Bold',color:'#259AD5'}}>Check-In</Text>
            
          </View>
  )
}  
  return (
    <SafeAreaView style={styles.container}>
            
      <StatusBar
        barStyle="dark-content"
        animated={true}
        backgroundColor='#FFFFFF' />
        <SafeAreaView style={styles.container1}>
          <View style={styles.vup}>
            <Image source={IconUser} style={{width:22,height:22,alignSelf:'flex-start'}}/>
            <Text style={{fontFamily:'Poppins-SemiBold',fontSize:16,marginStart:10,alignSelf:'flex-start'}}>Hi, </Text>
            <Text style={{fontFamily:'Poppins-SemiBold',fontSize:16,textDecorationLine:'underline',textDecorationColor:'#000',alignSelf:'flex-start'}}>Arief Muhammad</Text>
            <Image source={IconNoti} style={{width:22,height:25,alignSelf:'flex-start',position:'absolute',right:0}}/>
          </View>
        <View style={styles.vall}>
          <View style={styles.vhal}>
          <View style={styles.vtext}>
          <Text style={styles.text}>Entering A Public Space?</Text>
          <Text style={styles.smalltext}>Stay Alert To Stay Safe</Text>
          
          </View>
          <Image source={Iconhqr} style={styles.imageStyle}></Image>
          </View>
          <View style={styles.vhal2}>
          <Image source={IconArw} style={{margin:10,width:20,height:20}}></Image>
          <Text style={styles.text2}>Check-In-Preference</Text>
          <TouchableOpacity onPress={onPress}>
          <CekButton/>
          </TouchableOpacity>
          </View>
        </View>
        </SafeAreaView>
        <View style={{marginVertical:15,width:'100%',height:15,backgroundColor:'#DFDFDF'}}>

        </View>
        
        </SafeAreaView >
        
    
  );
};
const styles = StyleSheet.create({
  container:{
      flex: 1,
      
      alignContent:'center',
      backgroundColor:"#FFFFFF"
  },
  vup:{
    flexDirection:'row',
    alignItems:'center'
  },
  container1:{
   height:230,
   padding:15,
    alignContent:'center',
    backgroundColor:"#FFFFFF"
},
  vhal:{
    flexDirection:'row',
    height:'65%',
   
    backgroundColor:'#239BD8',
    borderTopStartRadius:15,
    borderTopEndRadius:15

  },
  
  vhal2:{
    flexDirection:'row',
    height:'35%',
    backgroundColor:'#FFFFFF',
    borderBottomStartRadius:15,
    borderBottomEndRadius:15

  },
  text2:{
    fontFamily:'Poppins-Bold',
    marginTop:10,

  },
  vall:{
    marginTop:20,
    backgroundColor:'white',
    borderColor:'grey',
    borderRadius:15,
    borderWidth:1,
    width:'100%',
    height:150
  },
  
  vtext:{
    margin:20,
  },
  text: {
      fontFamily:'Poppins-Medium',
      fontSize:18,
      
      color:'white'

      
    },
    smalltext: {
      fontFamily:'Poppins-Light',
      fontSize:14,
      
      color:'white'

      
    },
  logo:{
      marginTop:40,
      justifyContent:'center',
      alignItems:'center'
  },
  inputStyle:{
      flex: 1,
      height: 50,
      marginTop: 12,
      borderWidth: 1,
      paddingLeft:30,
      borderRadius:10,
      borderColor:'#695D91',
      fontSize:16,
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'#695D91'
  },
  btnLoginStyle:{
      marginTop:20,
      fontFamily:'Poppins-Bold',fontSize:15
  },
  sectionStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#006175',
      height: 50,
      borderRadius: 10,
      margin: 10,
    },
    imageStyle: {
      marginTop:21.5,
      marginStart:23,
      height: 80,
      width: 90,
      resizeMode:'stretch'
     
      
    },
  smallTextCenter:{
      fontFamily:'Roboto-Light',
      fontSize:14,
      marginTop:50,
      color:'white',
      textAlign:'center'
  },
  loginOption:{
      justifyContent:'center',
      flexDirection:'row'
  },
  imgLoginIcon:{
    margin:10
  },
  footherText:{
      flexDirection:'row',
      justifyContent:'center',
      marginTop:50
  },
  smallFootherText:{
      fontFamily:'Roboto-Light',
      fontSize:12,
      color:'white',
  },
  
  kpc:{
      width:100,
      height:35,
      marginEnd:10
    },
    komin:{
      width:39,
      height:43,
      marginEnd:10
    },
    kemen:{
      width:78,
      height:41,
      marginEnd:10
    },
    bumn:{
      width:77,
      height:36,
      marginEnd:10}
});