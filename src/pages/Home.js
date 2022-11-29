import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';
import { readUserData } from '../utils/localStorageHelper';
import { insertJWT, updateProfile } from '../utils/userSlice';

function Home() {
    const user = readUserData();

    const dispatch = useDispatch();

    useEffect(() => {
        if(user !== null) {
            dispatch(insertJWT(user.jwt))
            dispatch(updateProfile(user.user))
        }
    }, [user]);
    return (
        <main>
            <Hero />
            <Features />
        </main>
    )
}

export default Home