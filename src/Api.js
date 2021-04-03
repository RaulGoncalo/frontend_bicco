import AsyncStorage from '@react-native-community/async-storage';
import AsuncStorage from '@react-native-community/async-storage';

const BASE_API = 'http://192.168.0.5:3000';

export default {
    checkToken: async(token) => {
        const req = await fetch(`${BASE_API}/refresh`, {
            
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({token})
        })
        const json = await req.json();

        return json;
    },

    signIn: async(email, password) => {
        const req = await fetch(`${BASE_API}/signin`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({email, password})
        })
        const json = await req.json();

        return json;
    },

    signUp: async(name, email, password) => {
        const req = await fetch(`${BASE_API}/signup`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({name, email, password})
        })
        const json = await req.json();

        return json;
    },

    newpassword: async(email) => {
        const req = await fetch(`${BASE_API}/newPassword`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({email})
        })
        const json = await req.json();

        return json;
    },

    getUser: async() => {
        const token = await AsyncStorage.getItem('token');

        const req = await fetch(`${BASE_API}/users/${token}`);
        const json = await req.json();
        return json;
    },

    register: async(user) => {
        const req = await fetch(`${BASE_API}/register`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({user})
        })
        const json = await req.json();
        return json;
    },

    updatePassword: async(updatePassword) => {
        const req = await fetch(`${BASE_API}/updatePassword`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({updatePassword})
        })
        const json = await req.json();
        return json;
    },
}