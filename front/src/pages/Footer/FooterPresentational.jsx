import './style.css'

function FooterPresentational() {
    return (
		<>
			<footer>
				<div className='footer__container'>
					<div className='footer__container--items'>
						<div className='footer__container--item'>
							<p>Item 1</p>
						</div>
						<div className='footer__container--item'>
                            <p className="footer__item--copyright">&copy; Test</p>
                        </div>
						<div className='footer__container--item'>
							<p>Item 2</p>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}

export default FooterPresentational;