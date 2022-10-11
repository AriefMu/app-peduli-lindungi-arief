import * as React from 'react';
import {
    View,
    Text, 
    SafeAreaView, 
    StyleSheet,
    TextInput , 
    StatusBar, 
    Image,
    TouchableOpacity,Dimensions, Platform, PixelRatio
} from 'react-native';
import {
    IconKemen,
    IconKomin,
    IconKpcpen,
    IconBumn,
    IconTop,
    IconMail,
    IconLock,
    IconCov,
    IconCek,
    IconChi,
    IconBg,
    IconCre,
    IconMy,
    IconEm
} from '../../assets';
import {
    PrimaryButton
} from '../../Componets';
import { AntDesign } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  } = Dimensions.get('window');
  
  // based on iphone 5s's scale
  const scale = SCREEN_WIDTH / 430;
  
  export function normalize(size) {
    const newSize = size * scale 
    if (Platform.OS === 'android') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
  }
export default CovidTestScreen = ({navigation}) =>{
return(
<SafeAreaView style={styles.container}>
<View style={{flexDirection:'row'}}>
    <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}>
      <AntDesign name="arrowleft" size={24} color="#000000" style={{opacity:0.5}} />
      </TouchableOpacity>
        <Text style={styles.Up} >COVID-19 Test Result</Text>
      </View>
      <View style={{justifyContent:'center',alignSelf:'center',alignItems:'center',marginHorizontal:10,marginTop:100}}>
        <View>
        <Image source={IconEm} style={{width:normalize(234),height:normalize(237),resizeMode:'contain'}}></Image>
        </View >
        <View style={{alignItems:'center',marginTop:50}}>
            
        <Text style={styles.baseText}>You do not have a history of COVID-19 test</Text>
<Text style={styles.baseText}>results. Make sure you do a COVID-19 tes at a laboratory</Text>
<Text style={styles.baseText}>affiliated with the Ministry of Health:<Text style={{color:'#54B9ED',}}> PCR test lab</Text> or</Text>
<Text style={{color:'#54B9ED',fontFamily:'Inter-Regular', fontSize:normalize(12)}}>Antigen test lab</Text>
      </View>
      </View>
</SafeAreaView>
);};
const styles = StyleSheet.create({
    baseText:{fontFamily:'Inter-Regular',fontSize:normalize(12)},
    container:{
        flex:1,
    padding:15,
    backgroundColor:'white'
    },
    Up:{
        fontFamily:'Inter-Bold',
        fontSize:normalize(18),
        marginStart:15
        },
});