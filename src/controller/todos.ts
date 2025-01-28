import { RequestHandler } from "express";
import { Todo } from "../model/todo";

const TODOS :Todo [] = [];

export const CreateTodo: RequestHandler = (request,response) => {
    const text =(request.body as {text:string}).text;
    const newTodo = new Todo(Math.random().toString(),text)

    TODOS.push(newTodo);

    response.status(201).json({message:"todo added succesfully"})
}