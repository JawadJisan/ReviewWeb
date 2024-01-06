import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const AUTH_URL = "/auth";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    signIn: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/signIn`,
        method: "POST",
        data: loginData,
      }),
      //   invalidatesTags: [tagTypes.user],
    }),
    signUp: build.mutation({
      query: (signUpData) => ({
        url: `${AUTH_URL}/signUp`,
        method: "POST",
        data: signUpData,
      }),
      //   invalidatesTags: [tagTypes.user],
    }),
  }),
  overrideExisting: false,
});

export const { useSignInMutation, useSignUpMutation } = authApi;
