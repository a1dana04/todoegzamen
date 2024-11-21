import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (built) => ({
    uploadFile: built.mutation<FILE.uploadFileResponse, FILE.uploadFileRequest>({
      query: (data) => ({
        url: "https://api.elchocrud.pro/api/v1/upload/file",
        method: "POST",
        body: data,
      }),
      invalidatesTags:["todo"]
    }),
  }),
});

export const { useUploadFileMutation } = api;