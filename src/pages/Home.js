import React from 'react';
import TextField from '@material-ui/core/TextField';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Home Screen</h1>
                <form>
                    <TextField label="Name"/>
                    <TextField label="Email Address"/>
                </form>
            </div>
        )
    }
}