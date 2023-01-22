import React, { useState, useCallback } from 'react'
import {  Text, ScrollView } from 'react-native'
import Search from  "../../components/Search"
import Menu from '../../components/Account/Menu';
import { useFocusEffect } from '@react-navigation/native';
import UserInfo from '../../components/Account/UserInfo';
import StatusBar from '../../components/StatusBar';
import {getMeApi} from "../../api/user"
import useAuth from '../../hooks/useAuth';
import colors from '../../styles/colors';
import ScreenLoading from '../../components/ScreenLoading';
 

export default function Account() {
    const [user, setUser] = useState(null);
    const { auth }= useAuth();

    useFocusEffect(
        useCallback(()=>{
                (async ()=>{

                    const response = await getMeApi(auth.token);
                    setUser(response);
                })()
        }, [])
    )

    return (
        <>
        <StatusBar backgroundColor={colors.bgDark} barStyle="light-content"/>
        {!user ? (
        <ScreenLoading size="large" />
   ) : (
    <> 
        <Search/>
        <ScrollView>
            <UserInfo user={user}/>
            <Menu/>
        </ScrollView>
    </>
        )}
    </>
    );
}

