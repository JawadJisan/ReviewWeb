import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const LISTINGPRODUCT = "/listingProduct";

export const listingProductAPi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getListingProduct: builder.query({
      query: (arg: Record<string, any>) => ({
        url: LISTINGPRODUCT,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: any) => {
        return {
          listingProducts: response.data,
          meta: response.meta,
        };
      },
      providesTags: [tagTypes.getlistingProduct],
    }),
    addListingProductReview: builder.mutation({
      query: (data) => ({
        url: `${LISTINGPRODUCT}`,
        method: "POST",
        data,
      }),

      // invalidatesTags: [tagTypes.availableService],
    }),
    postReview: builder.mutation({
      query: (data) => ({
        url: "/reviewAndRating",
        method: "POST",
        data,
      }),

      // invalidatesTags: [tagTypes.availableService],
    }),
    updateListingProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `${LISTINGPRODUCT}/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [tagTypes.getlistingProduct],
    }),
    updateListingStatus: builder.mutation({
      query: ({ id, data }) => ({
        url: `${LISTINGPRODUCT}/${id}/status`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [tagTypes.getlistingProduct],
    }),
    // get single by id
    getSingleReview: builder.query({
      query: (id) => ({
        url: `${LISTINGPRODUCT}/${id}`,
        method: "GET",
      }),
      // providesTags: [tagTypes.availableService],
    }),
    // get single by id
    getAllReviews: builder.query({
      query: () => ({
        url: `/reviewAndRating`,
        method: "GET",
      }),
      // providesTags: [tagTypes.availableService],
    }),
    getSingleListingProduct: builder.query({
      query: (id) => ({
        url: `/listingProduct/${id}`,
        method: "GET",
      }),
      // providesTags: [tagTypes.availableService],
    }),
    deleteListingProduct: builder.mutation({
      query: (id) => ({
        url: `${LISTINGPRODUCT}/${id}`,
        method: "DELETE",
      }),
      //   invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useGetListingProductQuery,
  useGetSingleReviewQuery,
  useAddListingProductReviewMutation,
  useGetAllReviewsQuery,
  usePostReviewMutation,
  useDeleteListingProductMutation,
  useUpdateListingProductMutation,
  useUpdateListingStatusMutation,
  useGetSingleListingProductQuery,
} = listingProductAPi;
