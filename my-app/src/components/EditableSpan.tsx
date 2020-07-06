import React, {ChangeEvent, useState} from 'react';
import {TextField} from "@material-ui/core";


type EditableSpanPropsType = {
    title: string
    onChangeTitle: (title: string) => void
}

function EditableSpan(props: EditableSpanPropsType) {
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState('');

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
    const onSpanDblClick = () => {
        setTitle(props.title);
        setEditMode(true);
    }
    const onInputBlur = () => {
        setEditMode(false);
        props.onChangeTitle(title);
    }

    return (
        <>
            {
                editMode ?
                    <TextField autoFocus value={title} onChange={onInputChange} onBlur={onInputBlur}/>
                    :
                    <span onDoubleClick={onSpanDblClick}>{props.title}</span>
            }
        </>
    )
}


export default EditableSpan;