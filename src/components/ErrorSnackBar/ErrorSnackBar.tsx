import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert';
import {useDispatch, useSelector} from "react-redux";
import {AppRootType} from "../../state/store";
import {SetErrorAC} from "../../state/appReducer";

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


export function ErrorSnackBar() {
    // const [open, setOpen] = React.useState(true);
    const error = useSelector<AppRootType, string | null>(state => state.app.error)
    const dispatch = useDispatch();

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(SetErrorAC(null))
        // setOpen(false);
    };


    const isOpen = error !== null;

    return (

        <Snackbar open={isOpen} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
                {error}
            </Alert>
        </Snackbar>

    );
}