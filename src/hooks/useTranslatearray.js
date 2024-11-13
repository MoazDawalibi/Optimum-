import React from 'react'

function TranslateArray(
    array =[]  ,
    lang , 
    key
) {
 
    let obj =  array.find( arr => (
        arr.locale == lang
    ))


    if(obj){
        return obj[key]

    }

    return " "
}

export default TranslateArray