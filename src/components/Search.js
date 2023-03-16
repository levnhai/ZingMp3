import React from 'react';
import Icons from '../ultis/icon';
const { CiSearch } = Icons;

const Search = () => {
    return (
        <div className="flex items-center flex-1">
            <div className="p-2 cursor-pointer">
                <CiSearch />
            </div>
            <div className="flex flex-1">
                <input
                    type="text"
                    placeholder="Tìm kiếm bài hát, nghệ sỉ ...."
                    className="outline-none flex-1 text-[#757575] bg-[#f2f2f2]"
                />
            </div>
            <div className="p-2"></div>
        </div>
    );
};

export default Search;
