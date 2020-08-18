import React from 'react'
import '../CSS/Header.css'
import {Link} from 'react-router-dom';
import {useStateValue} from './StateProvider';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
function Header() {

	const [{basket}] = useStateValue();
	return (
		<nav className = 'header'>
			<Link to='/'>
				<img className= 'header__logo' src = 'http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt=''/>

			</Link>	
			<div className="header__search">
				<input className="header__searchInput" />
				<SearchIcon className="header__searchIcon" />
			</div>	

			<div className="header__nav">
				
				
				<Link to= '/login' className = 'header__link'>
					<div className="header__option">
						<span className='header__optionLineOne'>Hello Shaurya</span>
						<span className='header__optionLineTwo'>Sign In</span>

					</div>
					

				</Link>					

				
				<Link to= '/' className = 'header__link'>
					<div className="header__option">
						<span className='header__optionLineOne'>Returns</span>
						<span className='header__optionLineTwo'>& Orders</span>

					</div>
					

				</Link>	

			


				<Link to= '/' className = 'header__link'>
					<div className="header__option">
						<span className='header__optionLineOne'>Your</span>
						<span className='header__optionLineTwo'>Prime</span>

					</div>
					

				</Link>	

				<Link to='/checkout' className = 'header__link'>
					<div className="header__optionBasket">

						<ShoppingCartTwoToneIcon />
						
						<span className= "header__optionLineTwo header__basketCount"> {basket?.length} </span>



					</div>



				</Link>

			</div>
		</nav>
		
	)
}

export default Header

