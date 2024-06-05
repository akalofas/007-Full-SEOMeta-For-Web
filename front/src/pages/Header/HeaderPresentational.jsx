import './style.css';

const HeaderPresentational = () => {
	return (
		<header className='header__section'>
			<div className='header__logo-box'>
				<img
					src='/logo_path.svg'
					alt='My Market Logo'
					className='header__logo'
				/>
			</div>
			<div className='header__info'>
				<div className='header__item header__item--dropdown'>
					Επικοινωνία & online αγορές
					<div className='header__dropdown-content'>
						<span>Telephone</span>
						<span>Address</span>
					</div>
				</div>
				<div className='header__item'>Απελευθέρωση Παραδόσεων</div>
				<div className='header__cart'>
					<span>0,00€</span>
					<i className={`icon-shopping-cart header__icon`}></i>
				</div>
			</div>
		</header>
	);
};

export default HeaderPresentational;
