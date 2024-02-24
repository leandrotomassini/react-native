import { useState, useRef, useEffect } from 'react';
import axios from 'axios';

import { User, ReqResUserListResponse } from '../interfaces';


const loadUsers = async (page: number = 1): Promise<User[]> => {
    try {
        const { data } = await axios.get<ReqResUserListResponse>('http://reqres.in/api/users', {
            params: {
                page
            }
        });

        return data.data;
    } catch (error) {
        console.log({ error });
        return [];
    }
};


export const useUser = () => {

    const [users, setusers] = useState<User[]>([]);
    const currentPageRef = useRef(1);

    useEffect(() => {
        loadUsers(currentPageRef.current)
            .then(setusers);
    }, []);

    const nextPage = async () => {
        currentPageRef.current++;
        const users = await loadUsers(currentPageRef.current);
        if (users.length > 0) {
            setusers(users)
        } else {
            currentPageRef.current--;
        }
    }

    const prevPage = async () => {
        if (currentPageRef.current < 1) return;
        currentPageRef.current--;
        const users = await loadUsers(currentPageRef.current);
        setusers(users)
    }

    return {
        // Properties
        users,
        nextPage,
        prevPage,

        // Methods
        loadUsers
    }
}
