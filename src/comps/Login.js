import React, { useState } from 'react';
import { Stack,
    Button, 
    FormControl, 
    FormLabel, 
    FormHelperText, 
    Input 
    } from '@chakra-ui/core';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShow] = useState(false);
    const isInvalid = password === '' || email === '';

    const handleSignIn = (e) => {
        e.preventDefault();
    };

    return (
        <form method="POST" onSubmit={handleSignIn}>
            <Stack maxWidth={600} margin="auto" spacing={5} marginTop={5}>
                <FormControl>
                    <FormLabel htmlFor="email">
                        e-mail
                    </FormLabel>
                    <Input isRequired
                        type="email"
                        id="email"
                        aria-describedby="email-helper-text"
                        value={email}
                        onChange={({target}) => setEmail(target.value)}/>
                    <FormHelperText id="email-helper-text">
                        your registered e-mail address
                    </FormHelperText>
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="password">
                        password
                    </FormLabel>
                    <Input isRequired
                        type={showPass ? 'text' : 'password'}
                        id="password"
                        aria-describedby="password-helper-text"
                        value={password}
                        autoComplete="off"
                        onChange={({target}) => setPassword(target.value)}/>
                    <FormHelperText id="email-helper-text">
                        the password you signed up with
                    </FormHelperText>
                </FormControl>
                <FormControl>
                    <Button type="submit" disabled={isInvalid}>sign in</Button>
                </FormControl>
            </Stack>
        </form>
    )
    //     <form method="POST" onSubmit={handleSignIn}>
    //         <input required
    //         type="text"
    //         placeholder="e-mail address"
    //         value={email}
    //         onChange={({target}) => setEmail(target.value)}/>

    //         <input required
    //         type="password"
    //         placeholder="password"
    //         value={password}
    //         autoComplete="off"
    //         onChange={({target}) => setPassword(target.value)}/>
            
    //         <button type="submit" disabled={isInvalid}>sign in</button>
    //     </form>
    //
}