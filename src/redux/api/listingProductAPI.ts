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
      //   providesTags: [tagTypes.availableService],
    }),
    addListingReview: builder.mutation({
      query: (data) => ({
        url: `${LISTINGPRODUCT}`,
        method: "POST",
        data,
      }),

      // invalidatesTags: [tagTypes.availableService],
    }),
    // get single by id
    getSingleReview: builder.query({
      query: (id) => ({
        url: `${LISTINGPRODUCT}/${id}`,
        method: "GET",
      }),
      // providesTags: [tagTypes.availableService],
    }),
  }),
});

export const { useGetListingProductQuery, useGetSingleReviewQuery } =
  listingProductAPi;
