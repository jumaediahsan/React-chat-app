import React from 'react';

import TabMenu from '../../components/TabMenu';

const menus = [
	{
		icon: 'lnr lnr-bubble',
		href: '/',
		exact: true,
	},
	{
		icon: 'lnr lnr-users',
		href: '/contacts'
	},
	{
		icon: 'lnr lnr-cog',
		href: '/setting'
	},
];

const SidebarTabMenu = (props) => (
	<div className='sidebar__tab-menu'>
		<TabMenu menus={menus}/>
	</div>
);

export default SidebarTabMenu;
