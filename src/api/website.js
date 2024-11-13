import { useAddMutation } from './helpers/useAddMutation';
import {useGetQuery} from './helpers/useGetQuery'
  
  const API = {
  
    GET: `/api/all-static`,
    SERVICE:`/api/service`,
    SEND_MESSAGE: `/api/send`,
   
    
  };
  
  const KEY = "WEBSITE";
  export const useGetALlStatics= () => useGetQuery(KEY, API.GET);
 
  export const  useGetSingleService= (params) => useGetQuery(KEY, API.SERVICE , params);


  export const useSendMessage = ()=> useAddMutation(KEY , API.SEND_MESSAGE)