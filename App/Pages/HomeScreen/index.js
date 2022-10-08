import * as React from 'react';
import {View,
  Text, 
  SafeAreaView, 
  StyleSheet,
  StatusBar, 
  Image,
  TouchableOpacity,
ScrollView} from 'react-native';
import { FlatList } from 'react-native-web';
  import {
    Iconhqr,
    IconArw,
    IconSc,
    IconNoti,
    IconUser,
    IconTrav,
    IconEhc,
    IconFac,
    IconHos,
    IconRes,
    IconStac,
    IconTele,
    IconVac
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
      <ScrollView removeClippedSubviews nestedScrollEnabled contentContainerStyle={{ flexGrow: 1 }}>
        
      <StatusBar
        barStyle="dark-content"
        animated={true}
        backgroundColor='#FFFFFF' />
        
        <View style={styles.container1}>
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
        </View>
        <View style={{marginVertical:15,width:'100%',height:15,backgroundColor:'#DFDFDF'}}>

        </View>
        
          <View style={{flex:1}}>
          
          <View style={styles.btsy}>
          <TouchableOpacity onPress={onPress}>
          <View style={{alignItems:'center'}}>
          <View style={{justifyContent:'center',alignItems:'center',width:79,height:83,backgroundColor:'#FFBF43',borderRadius:15,marginBottom:10}}>
          <Image source={IconVac} style={{width:73,height:74,borderRadius:15}}></Image>
          </View>
          
          <Text style={styles.textk}>Vaccine And</Text>
          <Text style={styles.textk}>Immunization</Text>
          
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress}>
          <View style={{alignItems:'center',marginTop:30}}>
          <View style={{justifyContent:'center',alignItems:'center',width:79,height:83,backgroundColor:'#1E9E61',borderRadius:15,marginBottom:10}}>
          <Image source={IconTrav} style={{width:64,height:72,resizeMode:'stretch',borderRadius:15}}></Image>
          </View>
          <Text style={styles.textk}>Travel</Text>
          <Text style={styles.textk}>Regulations</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress}>
          <View style={{alignItems:'center',marginTop:30}}>
          <View style={{justifyContent:'center',alignItems:'center',width:79,height:83,backgroundColor:'#D7574C',borderRadius:15,marginBottom:10}}>  
          <Image source={IconStac} style={{width:65,height:66,resizeMode:'stretch',borderRadius:15}}></Image>
          </View>
          <Text style={styles.textk}>Covid-19</Text>
          <Text style={styles.textk}>Statistic</Text>
          </View>
          </TouchableOpacity>
          </View>
          <View style={styles.btsy1}>
          <TouchableOpacity onPress={onPress}>
          <View style={{alignItems:'center'}}>
          <View style={{justifyContent:'center',alignItems:'center',width:79,height:83,backgroundColor:'#D34539',borderRadius:15,marginBottom:10}}>  
          <Image source={IconRes} style={{width:72,height:71,resizeMode:'stretch',borderRadius:15}}></Image>
          </View>
          <Text style={styles.textk}>Covid-19 Test</Text>
          <Text style={styles.textk}>Result</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress}>
          <View style={{alignItems:'center',marginTop:30}}>
          <View style={{justifyContent:'center',alignItems:'center',width:79,height:83,backgroundColor:'#FFC557',borderRadius:15,marginBottom:10}}>  
          <Image source={IconTele} style={{width:62,height:62,resizeMode:'stretch',borderRadius:15}}></Image>
          </View>
          <Text style={styles.textk}>Telemedicine</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress}>
          <View style={{alignItems:'center',marginTop:50}}>
          <View style={{justifyContent:'center',alignItems:'center',width:79,height:83,backgroundColor:'#FFC557',borderRadius:15,marginBottom:10}}>  
          <Image source={IconHos} style={{width:69,height:69,resizeMode:'stretch',borderRadius:15}}></Image>
          </View>
          <Text style={styles.textk}>Find Hospital</Text>
          <Text style={styles.textk}>Bed</Text>
          </View>
          </TouchableOpacity>
          </View>
          
          <View style={styles.btsy2}>
          <TouchableOpacity onPress={onPress}>
          <View style={{alignItems:'center'}}>
          <View style={{justifyContent:'center',alignItems:'center',width:79,height:83,backgroundColor:'#1E9E61',borderRadius:15,marginBottom:10}}>  
          <Image source={IconEhc} style={{width:68,height:69,resizeMode:'stretch',borderRadius:15}}></Image>
          </View>
          <Text style={styles.textk}>EHAC</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress}>
          <View style={{alignItems:'center',marginTop:50}}>
          <View style={{justifyContent:'center',alignItems:'center',width:79,height:83,backgroundColor:'#1E9E61',borderRadius:15,marginBottom:10}}>  
          <Image source={IconFac} style={{width:68,height:68,resizeMode:'stretch',borderRadius:15}}></Image>
          </View>
          <Text style={styles.textk}>Healthcare</Text>
          <Text style={styles.textk}>Facility</Text>
          </View>
          </TouchableOpacity>
          </View>
          </View>
        
          </ScrollView>
        </SafeAreaView >
        
    
  );
};
const styles = StyleSheet.create({
  btsy:{
    
    margin:15,
    marginStart:25,
    position:'absolute'
    
  },
  btsy1:{
    margin:15,
   
    alignSelf:'center',
   position:'absolute'
   ,alignContent:'stretch'
  },
  btsy2:{
    marginEnd:25,
    margin:15,
    position:'absolute',
    right:0
  },
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
  textk: {
    fontFamily:'Poppins-Medium',
    fontSize:12

    
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
  
    imageStyle: {
      marginTop:15,
      
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
  }

});