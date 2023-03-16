import React, {useEffect} from 'react';
import Header from '~/components/Header';
import * as apis from '~/apis'

const Home = () => {
    useEffect(() => {
        const fetchDataHome =  async () => {
            const response = await apis.getHome();
            console.log(response);
        }
        fetchDataHome()
    },[])
    return (
        <div>
            <div className=" h-[70px] flex items-center px-[59px]">
                <Header />
            </div>
        </div>
    );
};

export default Home;
