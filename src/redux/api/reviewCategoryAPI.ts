import { baseApi } from "./baseApi";

const REVIEWCATEGORY = "/reviewCategory";

export const reviewCategoryAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => ({
        url: REVIEWCATEGORY,
        method: "GET",
        // params: arg,
      }),
      //   providesTags: [tagTypes.availableService],
    }),
    addListingReview: builder.mutation({
      query: (data) => ({
        url: `${REVIEWCATEGORY}`,
        method: "POST",
        data,
      }),

      // invalidatesTags: [tagTypes.availableService],
    }),
    // get single by id
    getSingleReview: builder.query({
      query: (id) => ({
        url: `${REVIEWCATEGORY}/${id}`,
        method: "GET",
      }),
      // providesTags: [tagTypes.availableService],
    }),
  }),
});

export const { useGetCategoryQuery } = reviewCategoryAPI;
