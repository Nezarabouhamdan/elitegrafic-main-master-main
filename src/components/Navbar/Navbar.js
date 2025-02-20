import React, { useState } from 'react';
import { FaRProject, FaTimes } from 'react-icons/fa';
import { CgMenuRight, CgSearch } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavLinks,
	NavItem,
	NavName,
} from './NavbarStyles.js';
import logo from '../../assets/logo-light.png';
import name from '../../assets/cdcdxxxx.png';
import { useLocation, useHistory } from 'react-router-dom';
import { data } from '../../data/NavbarData';
import { MainHeading2 } from '../../Globalstyles';
import { motion, useAnimation } from "framer-motion"
import { Head, Head2 } from '../Hero/Herostyles.js';

const Navbar = () => {
	const [show, setShow] = useState(false);

	let history = useHistory();
	let location = useLocation();

	const handleClick = () => {
		setShow(!show);
	};

	const scrollTo = (id) => {
		const element = document.getElementById(id);

		element.scrollIntoView({
			behavior: 'smooth',
		});
	};

	const closeMobileMenu = (to, id) => {
		if (id && location.pathname === '/') {
			// scrollTo(id);
		}

		history.push(to);
		setShow(false);
	};

	return (
		<IconContext.Provider value={{ color: '#ff' }}>
			<Nav>
			
				<NavbarContainer>
					<NavLogo to="/">
			
			<NavIcon src={logo}style={{marginLeft:'-800px',color:'white'}} />

					</NavLogo>
					<MobileIcon onClick={handleClick}>
						{show ? <FaTimes /> : <CgMenuRight />}
					</MobileIcon>
					<NavMenu show={show}  >
						{data.map((el, index) => (
							<NavItem key={index} >
								<NavLinks onClick={() => closeMobileMenu(el.to, el.id)}>
									{el.text}
								</NavLinks>
							</NavItem>
						))}
						
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</IconContext.Provider>
	);
};

export default Navbar;
