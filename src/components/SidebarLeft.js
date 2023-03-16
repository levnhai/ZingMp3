import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/image/logo.svg';
import { SibarMenu } from '../ultis/Menu';

const notActiveStyle = 'flex items-center gap-[8px] px-[25px] py-[6px] text-[13px] text-[#32323d] border-l-[2px]';
const ActiveStyle =
    'flex items-center gap-[8px] px-[25px] py-[6px] text-[13px] text-[#0f7070] border-l-[2px] border-[#0f7070]';

const SidebarLeft = () => {
    return (
        <div className="border border-x-cyan-400 flex flex-col bg-[#dde4e4]">
            <div className="w-full h-[70px] py-[10px] px-[28px] items-center justify-start">
                <img className="h-10 w-[120px]" src={logo} alt="logo" />
            </div>
            <div>
                {SibarMenu.map((item, index) => (
                    <NavLink
                        to={item.path}
                        end={item.end}
                        key={index}
                        className={({ isActive }) => {
                            return isActive ? ActiveStyle : notActiveStyle;
                        }}
                    >
                        {item.icon}
                        <span className="font-bold">{item.text}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default SidebarLeft;
