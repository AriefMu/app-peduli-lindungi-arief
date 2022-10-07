import * as React from 'react';
import {
    Text, 
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

export const PrimaryButton = (props)=>{
    return (
        <TouchableOpacity onPress={props.onPress} style={[style.btnPrimary, props.customeStyle]}>
            <Text style={{ color:'white',fontFamily:'Poppins-Bold',fontSize:20}}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export const SuccessButton = (props)=>{
    return (
        <TouchableOpacity onPress={props.onPress} style={[style.btnSuccess, props.customeStyle]}>
            <Text style={{ color:'white',fontFamily:'Poppins-Bold',fontSize:15}}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    btnPrimary:{
        borderRadius:10,
        marginHorizontal:10,
        marginTop:5,
        padding:10,
        alignItems:'center',
        backgroundColor:'#006175',
        
    },
    btnSuccess:{
        borderRadius:10,
        marginTop:5,
        padding:15,
        alignItems:'center',
        backgroundColor:'#006175'
    }
})