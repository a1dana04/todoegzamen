import { api as index } from "..";

const ENDPOINT =
  "https://api.elchocrud.pro/api/v1/f164e0d77722d08007ee2a45850de596/ttodo1";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query<TODO.getTodosRes, TODO.getTodosReq>({
      query: () => ({
        url: `${ENDPOINT}`,
        method: "GET",
      }),
      providesTags: ["todo"],
    }),
    postTodo: builder.mutation<TODO.postTodoRes, TODO.postTodoReq>({
      query: (data) => ({
        url: `${ENDPOINT}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),

    deleteTodo: builder.mutation<TODO.deleteTodoRes, TODO.postTodoReq>({
      query: (_id) => ({
        url: `${ENDPOINT}/ ${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["todo"],
    }),
    editTodo: builder.mutation<TODO.editTodoRes, TODO.editTodoReq>({
      query: ({ data, _id }) => ({
        url: `${ENDPOINT}/ ${_id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  usePostTodoMutation,
  useDeleteTodoMutation,
  useEditTodoMutation,
} = api;
