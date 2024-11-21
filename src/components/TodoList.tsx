 "use client";
import {
  useDeleteTodoMutation,
  useEditTodoMutation,
  useGetTodosQuery
} from "@/redux/api/todo";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import s from "./TodoList.module.scss";
import { useUploadFileMutation } from "@/redux/api/file";


const TodoList = () => {
  const [edit, setEdit] = useState<null | number>(null);
  const { data } = useGetTodosQuery();
  const [deleteTodo] = useDeleteTodoMutation();
  const [editTodo] = useEditTodoMutation();
  const [uploadFileMutation] = useUploadFileMutation();

  const { register, handleSubmit, setValue } = useForm<ITodo>();

  const onSubmit: SubmitHandler<ITodo> = async (data) => {
    let imgUrl = data.img || "";

    if (data.file && data.file[0]) {
      const file = data.file[0];
      const formData = new FormData();
      formData.append("file", file);

      const { data: responseImage } = await uploadFileMutation(formData);
      imgUrl = responseImage?.url!;
    }

    const updatedData = {
      title: data.title,
      img: imgUrl,
    };

    await editTodo({ _id: edit!, data: updatedData });
    setEdit(null);
  };

  return (
    <div className="">
      <div className="container">
        {data?.map((el) =>
          edit === el._id ? (
            <div key={el._id} className={s.list}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={s.list1}>
                <input type="text" {...register("title", { required: true })} />
                <input type="file" {...register("file")} />
                <input type="hidden" {...register("img")} value={el.img} />
                <button type="submit">send</button>
                </div>
                
              </form>
            </div>
          ) : (
            <div key={el._id} className="">
              <h1 >{el.title}</h1>
              <img src={el.img} alt=""className={s.img1} />
              <div className={s.btn}>
                <button onClick={() => deleteTodo(el._id!)}>delete</button>
                <button
                  onClick={() => {
                    setEdit(el._id!);
                    setValue("title", el.title);
                    setValue("img", el.img);
                  }}
                >
                  edit
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default TodoList;