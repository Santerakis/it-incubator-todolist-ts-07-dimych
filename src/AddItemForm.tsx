import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Button, IconButton, TextField} from "@mui/material";
import {AddBox} from "@mui/icons-material";

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export function AddItemForm(props: AddItemFormPropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addItem = () => {
        if (title.trim() !== "") {
            props.addItem(title);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addItem();
        }
    }

    return <div>
        {/*<input value={title}*/}
        {/*       onChange={onChangeHandler}*/}
        {/*       onKeyPress={onKeyPressHandler}*/}
        {/*       className={error ? "error" : ""}*/}
        {/*/>*/}
        <TextField  value={title}
                    onChange={onChangeHandler}
                    onKeyPress={onKeyPressHandler}
                    // className={error ? "error" : ""}
                    variant='outlined'  //default
                    label='Title'
                    error={!!error}
                    helperText={error}
        />
        {/*<button onClick={addItem}>+</button>*/}
        {/*<Button onClick={addItem} variant='contained' color='primary'*/}
        {/*        sx={{maxWidth:'30px', maxHeight:'30px', minWidth:'30px', minHeight:'30px'}}*/}
        {/*>+</Button>*/}
        <IconButton onClick={addItem} color='primary'>
        <AddBox/></IconButton>

        {/*{error && <div className="error-message">{error}</div>}*/}
    </div>
}
