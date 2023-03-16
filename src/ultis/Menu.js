import Icons from './icon';

const { MdOutlineLibraryMusic, TbBrandGoogleHome, BiNetworkChart, MdOutlineDynamicFeed } = Icons;
export const SibarMenu = [
    {
        path: 'mymusic',
        text: 'Cá Nhân',
        icon: <MdOutlineLibraryMusic size={24} />,
    },
    {
        path: '',
        text: 'Khám Phá',
        icon: <TbBrandGoogleHome size={24} />,
    },
    {
        path: 'zingchart',
        text: '#Zingchart',
        icon: <BiNetworkChart size={24} />,
    },
    {
        path: 'follow',
        text: 'Theo Dõi',
        icon: <MdOutlineDynamicFeed size={24} />,
    },
];
