import { useState } from 'react';
import { Login } from './Login';
import { Register } from './Register';
import { Welcome } from './Welcome';

export function Signin() {
    const [islogin, setIsLogin] = useState(true);
    const [newAccount, setNewAccount] = useState(false);

    return (
        <>
            {islogin ? <Login /> : newAccount ? <Register /> : <Welcome />}
        </>
    );
}