import {
  useAddMutation,
    useGetQuery,
    // useAddMutation,
    // useUpdateMutation,
    // useDeleteMutation,
    // useToggleStatus,
  } from "./helpers";
import { useQueryWithUrlPagination } from "./helpers/useGetQueyWithPagination";
  
  const API = {
    GET: `/api/all_products`,
    GETSINGLE:`/api/get_product`,
    ADDTOVFIV:`/api/wishlist/add_product`,
    REMOVETOVFIV:`/api/wishlist/remove_product`
  };
  
  const KEY = "PRDUCTS";

  export const useGetProductPagination = (params) =>
  useQueryWithUrlPagination(KEY, API.GET, {
    params: {
      ...params,
      per_page:6,
    },
  });
  export const useGetProducts= (params, options) => useGetQuery(KEY, API.GET , params , options);
  export const useGetSingleProduct = (params, options) => useGetQuery(KEY, API.GETSINGLE , params , options);
  export const useAddProductToWishList= (params, options) => useAddMutation(KEY, API.ADDTOVFIV );
  export const useRemoveProductToWishList= (params, options) => useAddMutation(KEY, API.REMOVETOVFIV );





