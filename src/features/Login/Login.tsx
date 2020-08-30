import React from 'react'
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Grid,
    TextField
} from "@material-ui/core";
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {loginThunkCreator} from "../../state/authReducer";
import {AppRootType} from "../../state/store";
import {Redirect} from 'react-router-dom';

export const Login = () => {

    const dispatch = useDispatch();

    const isLoggedIn = useSelector<AppRootType, boolean>(state => state.login.isLoggedIn);


    const formik = useFormik({


        validate: (values) => {
            if (!values.email) {
                return {
                    email: 'Email is required'
                }
            }

            if (!values.password) {
                return {
                    password: 'Password is required'
                }
            }


        },
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        onSubmit: values => {
            dispatch(loginThunkCreator(values))
        },
    });

    if (isLoggedIn) {
        return <Redirect to={'/'}/>
    }

    return (
        <Grid container justify={'center'}>
            <Grid item xs={4}>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl>
                        <FormLabel>
                            <p>
                                To log in get registered <a href={'https://social-network.samuraijs.com/'}
                                                            target={'_blank'}>here</a>
                            </p>
                            <p>
                                Or ask me for my own credentials...
                            </p>
                            {/*<p>*/}
                            {/*    or use common test account credentials:*/}
                            {/*</p>*/}
                            {/*<p> Email: free@samuraijs.com*/}
                            {/*</p>*/}
                            {/*<p>*/}
                            {/*    Password: free*/}
                            {/*</p>*/}
                        </FormLabel>
                        <FormGroup>
                            <TextField
                                label="Email"
                                margin="normal"
                                {...formik.getFieldProps('email')}
                            />
                            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                            <TextField
                                type="password"
                                label="Password"
                                margin="normal"
                                {...formik.getFieldProps('password')}
                            />
                            {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                            <FormControlLabel
                                label={'Remember me'}
                                control={<Checkbox/>}
                                {...formik.getFieldProps('rememberMe')}
                                checked={formik.values.rememberMe}
                            />
                            <Button type={'submit'} variant={'contained'} color={'primary'}>Login</Button>
                        </FormGroup>
                    </FormControl>
                </form>
            </Grid>
        </Grid>

    )
}