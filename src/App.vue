<template>
	<v-app>
		<div class="banner-text-wrap">
			<div class="alert-banner-text">
				Amazon Care’s virtual services are now live in all 50 states, with
				in-person services coming to 20+ regions in 2022.
			</div>
			<a
				href="https://www.aboutamazon.com/news/retail/amazon-care-now-available-nationwide-as-demand-continues-to-grow"
				target="_blank"
				rel="noopener noreferrer"
				class="alert-banner-link"
				>Learn more</a
			>
		</div>
		<div class="navbar show" id="nav">
			<a
				href="/"
				aria-current="page"
				class="navbar-logo-wrap w-inline-block w--current"
				><img
					src="https://amazon.care/images/60073a3d7d53c42d5b3ec457_footer-logo.svg"
					loading="lazy"
					class="navbar-logo-img"
			/></a>
			<div class="navbar-mobile-wrap" id="nav_menu">
				<div id="menu-close">
					<div class="close close1"></div>
				</div>
				<a
					href="Home"
					aria-current="page"
					class="nav-link nav-link--white w-inline-block w--current"
					style="color: white"
					id="nav-link"
				>
					<div>Home</div> </a
				><router-link
					to="/about"
					class="nav-link nav-link--white w-inline-block"
					style="color: white; text-decoration: none"
					id="nav-link"
				>
					<div>About</div> </router-link
				><router-link
					to="/about"
					class="nav-link nav-link--white w-inline-block"
					style="color: white; text-decoration: none"
					id="nav-link"
				>
					<div class="text-block">Health Stories</div> </router-link
				><router-link
					to="/about"
					class="nav-link nav-link--white nav-link--last w-inline-block"
					style="color: white; text-decoration: none"
					id="nav-link"
				>
					<div>COVID-19 Info</div> </router-link
				><a
					href="#get-started"
					class="button button--small button--nav---mobile w-inline-block"
					style="color: white; text-decoration: none"
					id="nav-link"
				>
					<div>Get the app</div> </a
				><router-link
					to="/about"
					class="button button--outline-reverse button--small button--nav w-inline-block"
					style="color: white; background-color: transparent"
					id="nav-link"
				>
					<div>For Employers</div> </router-link
				><a
					href="#get-started"
					class="button button--small button--nav w-inline-block"
					style="color: white"
					id="nav-link"
				>
					<div>Get the app</div>
				</a>
			</div>
			<div class="menu-button w-clearfix" id="menu-button">
				<div class="menu-icon">
					<div class="menu-icon-line-top"></div>
					<div class="menu-icon-line-middle"></div>
					<div class="menu-icon-line-bottom"></div>
				</div>
			</div>
		</div>
		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>

<script>
export default {
	name: 'App',
	mounted() {
		let lastScrollTop = 0;
		const delta = 5;
		const fixBox = document.querySelector('.navbar');
		const fixBoxHeight = fixBox.offsetHeight;
		let didScroll;

		window.onscroll = function () {
			didScroll = true;
		};

		setInterval(function () {
			if (didScroll) {
				hasScrolled();
				didScroll = false;
			}
		}, 250);

		function hasScrolled() {
			const nowScrollTop = window.scrollY;
			if (Math.abs(lastScrollTop - nowScrollTop) <= delta) {
				return;
			}
			if (nowScrollTop > lastScrollTop && nowScrollTop > fixBoxHeight) {
				//Scroll down
				fixBox.classList.remove('show');
			} else {
				if (nowScrollTop + window.innerHeight < document.body.offsetHeight) {
					//Scroll up
					fixBox.classList.add('show');
				}
			}
			lastScrollTop = nowScrollTop;
		}
		window.addEventListener('scroll', () => {
			if (window.scrollY < 100) {
				document.getElementById('nav').style.background = 'none';
			} else {
				document.getElementById('nav').style.background = '#2d1954';
			}
		});
		const navMenu = document.getElementById('nav_menu'),
			navToggle = document.getElementById('menu-button'),
			navClose = document.getElementById('menu-close');

		/*===== 아이콘 클릭 시 메뉴바 보여주기 =====*/
		if (navToggle) {
			navToggle.addEventListener('click', () => {
				navMenu.style.left = 0;
				navToggle.style.display = 'none';
				document.querySelector('.navbar-mobile-wrap').style.display = 'flex';
			});
		}

		/*===== 아이콘 클릭 시 메뉴바 사라지게 하기 =====*/
		if (navClose) {
			navClose.addEventListener('click', () => {
				navMenu.style.left = '100%';
				navToggle.style.display = 'block';
			});
		}

		function handleWindowSize() {
			const windowWidth = window.innerWidth;
			if (windowWidth <= 700) {
				navToggle.style.display = 'block';
			} else if (windowWidth < 767) {
				navToggle.style.display = 'block';
			} else if (windowWidth > 900 && windowWidth <= 1400) {
				navToggle.style.display = 'none';
			} else {
				navToggle.style.display = 'none';
			}
		}

		window.addEventListener('resize', handleWindowSize);
	},
};
</script>
<style>
html {
	scroll-behavior: smooth;
}
.close {
	display: none;
	width: 50px;
	height: 50px;
	text-align: center;
	margin-right: 20px;
	color: white;
}
.close1:after {
	content: '\00d7';
	font-size: 40pt;
	font-weight: 10;
	line-height: 10px;
}
#menu-close {
	padding-left: 200px;
}
.show-menu {
	left: 0;
}
@font-face {
	font-family: 'AmazomEmber_Rg';
	src: url('@/assets/fonts/AmazonEmber_Rg.ttf') format('truetype');
}
* {
	font-family: 'AmazomEmber_Rg';
}

.w-clearfix:after {
	clear: both;
}
.w-clearfix:after,
.w-clearfix:before {
	content: ' ';
	display: table;
	grid-column-start: 1;
	grid-row-start: 1;
	grid-column-end: 2;
	grid-row-end: 2;
}
.button.button--small.button--nav {
	margin-top: 0;
	margin-bottom: 0;
	margin-left: 6px;
	border-bottom-style: none;
	font-size: 13px;
}
.button.button--outline-reverse.button--small.button--nav {
	margin-top: 0;
	margin-bottom: 0;
	padding-top: 7px;
	padding-bottom: 7px;
	border-style: solid;
}
.button.button--small.button--nav {
	margin-top: 0;
	margin-bottom: 0;
	margin-left: 6px;
	border-bottom-style: none;
	font-size: 13px;
}
.button.button--small.button--nav---mobile {
	display: none;
	margin-top: 0;
	margin-bottom: 0;
	margin-left: 6px;
	border-bottom-style: none;
	font-size: 0.8em;
}
.button.button--small {
	padding-top: 8px;
	padding-bottom: 8px;
	font-size: 14px;
	line-height: 14px;
}
.button {
	display: flex;
	margin-right: 16px;
	margin-bottom: 16px;
	padding: 12px 16px;
	align-items: center;
	border-bottom-style: none;
	border-radius: 500px;
	background-color: #5c4cdf;
	transition: all 0.2s ease;
	color: #fff;
	font-size: 16px;
	line-height: 16px;
	text-decoration: none;
}
.nav-link.nav-link--white.w--current {
	padding-top: 4px;
	padding-bottom: 3px;
	font-size: 13px;
	line-height: 13px;
}
.nav-link.nav-link--white.nav-link--last {
	margin-right: 16px;
}
.nav-link.nav-link--white {
	padding-top: 4px;
	padding-bottom: 3px;
	border-bottom-style: none;
	color: #fff;
	font-size: 13px;
	line-height: 13px;
}
.nav-link {
	margin-right: 12px;
	margin-left: 12px;
	border-bottom-style: none;
	font-size: 0.75em;
}
.navbar-logo-wrap {
	border-bottom-style: none;
}
.w-inline-block {
	max-width: 100%;
	display: inline-block;
}
.navbar-mobile-wrap {
	display: flex;
	margin-right: -20px;
	padding-top: 6px;
	padding-bottom: 6px;
	align-items: center;
}
.navbar {
	position: sticky;
	transition: 0.5s;
	top: -64px;
	left: 0;
	right: 0;
	bottom: auto;
	z-index: 200;
	display: flex;
	width: 100vw;
	height: 64px;
	padding-right: 40px;
	padding-left: 40px;
	justify-content: space-between;
	align-items: center;
	max-width: 100%;
}
.banner-text-wrap {
	display: flex;
	height: 55px;
	justify-content: center;
	align-items: center;
	background-color: #e4ddff;
	box-sizing: border-box;
	padding-top: 10px;
	padding-bottom: 10px;
}
.alert-banner-text {
	font-size: 14px;
	line-height: 14px;
}
.alert-banner-link {
	margin-left: 8px;
	font-size: 14px;
	line-height: 14px;
}
.logo-img {
	margin-left: 18px;
}
.app-bar-fonts {
	margin-right: 25px;
	font-size: 18px;
}
.menu-icon-line-top {
	width: 32px;
	height: 2px;
	border-radius: 1px;
	background-color: #fff;
}
.menu-icon-line-middle {
	width: 32px;
	height: 2px;
	margin-top: 4px;
	margin-bottom: 4px;
	border-radius: 1px;
	background-color: #fff;
}
.menu-icon-line-bottom {
	width: 32px;
	height: 2px;
	border-radius: 1px;
	background-color: #fff;
}
.menu-button {
	display: none;
}
.show {
	top: 0;
}
@media screen and (max-width: 991px) {
	.menu-button {
		z-index: 99;
		background-color: transparent;
	}
	.banner-text-wrap {
		flex-direction: row;
		background-color: transparent;
	}
}

@media screen and (max-width: 767px) {
	#menu-close {
		padding-left: 300px;
	}
	.close {
		display: block;
	}
	.button.button--outline-reverse.button--small.button--nav {
		margin-bottom: 35px;
	}
	.nav-link.nav-link--white.w--current {
		font-size: 18px;
		padding-top: 4px;
		padding-bottom: 35px;
		line-height: 13px;
	}
	.nav-link.nav-link--white {
		font-size: 18px;
		padding-top: 4px;
		padding-bottom: 35px;
		line-height: 13px;
	}
	.navbar {
		padding-right: 6%;
		padding-left: 6%;
	}
	.navbar-logo-wrap {
		position: relative;
		z-index: 992;
	}
	.navbar-logo-wrap.w--current {
		z-index: 992;
	}
	.navbar-mobile-wrap {
		position: fixed;
		display: none;
		left: 100%;
		top: 0;
		bottom: 0;
		z-index: 991;
		width: 75%;
		height: 100vh;
		min-height: 500px;
		margin-top: 0;
		margin-right: 0;
		margin-left: 25vw;
		padding-top: 16vh;
		padding-left: 12%;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		background-color: #2d1954;
		transition: 0.4s;
	}
	.menu-button {
		position: relative;
		z-index: 1000;
		display: block;
		margin-right: -16px;
		padding: 18px;
	}
	.banner-text-wrap {
		display: block;
		height: auto;
		margin-left: 30px;
		margin-right: 30px;
	}
	.menu-icon-line-top {
		width: 32px;
		background-color: #fff;
	}
	.menu-icon-line-middle {
		width: 32px;
		margin-top: 6px;
		margin-bottom: 6px;
		background-color: #fff;
	}
	.menu-icon-line-bottom {
		width: 32px;
		background-color: #fff;
	}
}
@media screen and (max-width: 667px) {
	#menu-close {
		padding-left: 150px;
	}
	.button.button--outline-reverse.button--small.button--nav {
		margin-bottom: 20px;
	}
	.nav-link.nav-link--white.w--current {
		font-size: 13px;
		padding-top: 4px;
		padding-bottom: 20px;
		line-height: 20px;
	}
	.nav-link.nav-link--white {
		font-size: 13px;
		padding-top: 4px;
		padding-bottom: 20px;
		line-height: 20px;
	}
}
</style>
