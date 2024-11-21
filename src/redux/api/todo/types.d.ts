namespace TODO {
  type getTodosRes = iTodo[];
  type getTodosReq = void;

  type postTodoRes = iTodo[];
  type postTodoReq = iTodo;

  type deleteTodoRes = iTodo[];
  type deleteTodoReq = number;

  type editTodoRes = iTodo[];
  type editTodoReq = {
    _id: number;
    data: iTodo;
  };
}