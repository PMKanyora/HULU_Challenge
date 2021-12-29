import React from 'react'
import Image from 'next/image';
import HeaderItem from './HeaderItem';
import {BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBolticon, SearchIcon, UserIcon} from "@heroIcons/react/outline";
function Header() {
    return (
        <Header className="">
            <div>
                <HeaderItem title="HOME" Icon={HomeIcon} />
            </div>
            <Image 
            className='object-contain'
            src="https://links.papareact.com/ua6" width={200} height={100}/>
        </Header>
    )
}

export default Header
