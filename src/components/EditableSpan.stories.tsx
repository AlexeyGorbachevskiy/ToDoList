import React from 'react';

import {action} from "@storybook/addon-actions";
import EditableSpan from "./EditableSpan";


export default {
    title: 'EditableSpan Component',
    component: EditableSpan,
};

const changeTitle = action('Title is changed ');


export const TaskBaseExample = () => {
    return (
        <EditableSpan title={'JS'} onChangeTitle={changeTitle}/>
    )
}

