import * as React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image, StatusBar, PixelRatio} from 'react-native';
import {IconSplash,IconBumn,IconKemen,IconKomin,IconKpcpen} from '../../assets';

export default SplashScreen = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace('LoginScreen')
     }, 3000)
    }, [navigation]);

    
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        animated={true}
        backgroundColor="#FFFFFF" />
        
      <View style={styles.content}>
        <Image source={IconSplash} style={styles.imgStyle} />
        
      </View>
      <View style={styles.viewbt}>
      <View>
      <Text style={styles.text}>Bekerjasama Dengan :</Text>
      </View>
      <View style={styles.imgOption}>
        <Image source={IconKpcpen}style={styles.kpc}></Image>
        <Image source={IconKomin}style={styles.komin}></Image>
        <Image source={IconKemen}style={styles.kemen}></Image>
        <Image source={IconBumn}style={styles.bumn}></Image>

      </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    
  },
  imgOption:{
    marginTop:10,
    justifyContent:'center',
    flexDirection:'row',
    marginBottom:10,
    alignItems:'center',
    
    
},
viewbt:{
    alignSelf:'center',
    
    marginBottom:40
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
    marginEnd:10
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    
    fontFamily:'Lato-Regular',
    fontSize:12,
    marginTop:10
    
  },
  imgStyle:{
    width:283,
    height:67,
    marginBottom:10
  }
});
