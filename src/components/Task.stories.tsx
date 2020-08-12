import React from 'react';

import AddItemForm from "./AddItemForm";
import {action} from "@storybook/addon-actions";
import {Task} from "./Task";

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
        <Task task={{id: '1', isDone: true, title: 'CSS'}}
              todoListId={'todoList1'}
              removeTask={removeTask}
              changeTaskTitle={changeTaskTitle}
              changeTaskStatus={changeTaskStatus}
              filter={'all'}
        />
            <Task task={{id: '2', isDone: false, title: 'Html'}}
                  todoListId={'todoList2'}
                  removeTask={removeTask}
                  changeTaskTitle={changeTaskTitle}
                  changeTaskStatus={changeTaskStatus}
                  filter={'all'}
            />
        </>
    )
}

