import { useQueryClient, useMutation } from "react-query";
import { toast } from "react-toastify";
import { useAxios } from "./useAxios";
import { useTranslation } from "react-i18next";

export const useAddMutation = (key, url , toast_notification =true) => {
  const axios = useAxios();
  const queryClient = useQueryClient();
  const {t} = useTranslation();

  return useMutation(
    async (dataToSend) => {
      const { data } = await axios.post(url, dataToSend);
      return data;
    },
    {
      onSuccess: ({ message }) => {
        if(toast_notification){
          toast.success(message || t("added_successfully"));

        }

      },
      onError: (err) => {
        const message = err?.response?.data?.message || t("toggle_failed");
        toast.error(message);
      },
      
    },
    
  );
};
