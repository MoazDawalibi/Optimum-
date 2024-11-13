import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

function useLang() {


    const {i18n} = useTranslation()
 

    return i18n.language 
}

export default useLang