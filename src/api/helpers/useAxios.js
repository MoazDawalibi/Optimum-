import axios from "axios";
// import { useTranslation } from "react-i18next";
// import languageConfig from "../../config/langConfig";
import { baseURL } from "../config";
export const useAxios = () => {
  
  // const {t , i18n} = useTranslation()


  // const languageCode = languageConfig[i18n.language].headerCode;

  return axios.create({
    headers: {
      // language: languageCode
    },
    baseURL,
  });
};
