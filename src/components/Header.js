import React from 'react';
import Icons from '../ultis/icon';
import Search from './Search';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
const { IoIosArrowRoundBack, IoIosArrowRoundForward, CiSettings, BsUpload, RiVipDiamondLine, ImDisplay } = Icons;

const Header = () => {
    return (
        <div className="flex justify-between flex-1 items-center h-full">
            <div className="flex items-center flex-1 h-full">
                <div className="flex items-center mr-3 h-full">
                    <span className="px-3">
                        <IoIosArrowRoundBack size={21} />
                    </span>
                    <span className="px-3">
                        <IoIosArrowRoundForward size={21} />
                    </span>
                </div>
                <div className="flex flex-1 h-10 max-w-[440px] bg-[#f2f2f2] items-center p-[5px] rounded-[99999px]">
                    <Search />
                </div>
            </div>
            <div className="flex gap-2">
                <Tippy content="Chủ đề" delay={100} className="tippy-box: bg-slate-100">
                    <div className="w-10 h-10 bg-[#F4F4F4] rounded-[50%] flex items-center justify-center">
                        <ImDisplay />
                    </div>
                </Tippy>
                <div className="w-10 h-10 bg-[#F4F4F4] rounded-[50%] flex items-center justify-center">
                    <RiVipDiamondLine />
                </div>
                <div className="w-10 h-10 bg-[#F4F4F4] rounded-[50%] flex items-center justify-center">
                    <BsUpload />
                </div>
                <div className="w-10 h-10 bg-[#F4F4F4] rounded-[50%] flex items-center justify-center">
                    <CiSettings />
                </div>
                <div className="w-10 h-10">
                    <img className="rounded-[50%]" src="https://avatar.talk.zdn.vn/default" alt="lỗi hình ảnh" />
                </div>
            </div>
        </div>
    );
};

export default Header;
