import React from 'react';
import {action} from "@storybook/addon-actions";
import {Task} from "./Task";
import {TaskPriorities, TaskStatuses} from "../../../../api/todoListsAPI";

export default {
    title: 'Task Component',
    component: Task,
};

const changeTaskStatus = action('Status is changed ');
const changeTaskTitle = action('Title is changed ');
const removeTask = action('Task is removed ');


export const TaskBaseExample = () => {
    return (
        <>
            <Task task={
                {
                    id: '1', status: TaskStatuses.Completed, title: 'CSS',
                    description: '',
                    priority: TaskPriorities.Low,
                    startDate: '',
                    deadline: '',
                    todoListId: '',
                    order: 0,
                    addedDate: '',
                }
            }
                  todoListId={'todoList1'}
                  removeTask={removeTask}
                  changeTaskTitle={changeTaskTitle}
                  changeTaskStatus={changeTaskStatus}
                  filter={'all'}
            />
            <Task task={
                {
                    id: '2', status: TaskStatuses.New, title: 'Html',
                    description: '',
                    priority: TaskPriorities.Low,
                    startDate: '',
                    deadline: '',
                    todoListId: '',
                    order: 0,
                    addedDate: '',
                }
            }
                  todoListId={'todoList2'}
                  removeTask={removeTask}
                  changeTaskTitle={changeTaskTitle}
                  changeTaskStatus={changeTaskStatus}
                  filter={'all'}
            />
        </>
    )
}

