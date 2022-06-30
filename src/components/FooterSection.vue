<template>
	<div>
		<div class="footer">
			<div class="email-cta">
				<div class="email-cta-1">
					<div class="email-cta-border"></div>
					<div class="email-cta-dsc">
						<div class="email-cta-field">
							<h2 class="h3-no-margin">Stay Connected</h2>
							<p class="email-cta-p">
								Subscribe to get occasional emails from Amazon Care. You can
								unsubscribe at any time and we won't share your information.
							</p>
						</div>
						<div class="email-cta-text">
							<div>
								<iframe
									title="email signup form"
									src="https://cloud.em.amazon.care/subcribecare"
									frameborder="0"
									class="amazon-form"
									sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
									scrolling="no"
									style="overflow: hidden; height: 122px"
								>
									<div class="layout-canvas">
										<div class="layout-section">
											<div class="layout-column">
												<table
													cellpadding="0"
													cellspacing="0"
													width="100%"
													style="min-width: 100%"
												></table>
											</div>
										</div>
									</div>
									<div style="clear: both; display: block; height: 0px"></div>
								</iframe>
							</div>
						</div>
					</div>
				</div>
				<div class="email-drop-shadow"></div>
			</div>
			<div class="footer-nav-container">
				<div class="footer-logo">
					<img
						src="https://amazon.care/images/60073a3d7d53c42d5b3ec457_footer-logo.svg"
					/>
				</div>
				<div class="sitemap">
					<div class="footer-links">
						<div class="footer-link-group">
							<router-link to="/about" class="footer-link" style="color: white"
								>FAQS</router-link
							>
							<router-link to="/about" class="footer-link" style="color: white"
								>About</router-link
							>
							<router-link to="/about" class="footer-link" style="color: white"
								>For employers</router-link
							>
						</div>
						<div class="footer-link-group">
							<router-link to="/about" class="footer-link" style="color: white"
								>COVID -19</router-link
							>
							<router-link to="/about" class="footer-link" style="color: white"
								>Health Stories</router-link
							>
						</div>
						<div class="footer-link-group">
							<h5 class="sitemap-header">Careers</h5>
							<router-link to="/about" class="footer-link" style="color: white"
								>COVID -19</router-link
							>
							<router-link to="/about" class="footer-link" style="color: white"
								>Health Stories</router-link
							>
						</div>
						<div class="footer-link-group">
							<h5 class="sitemap-header">Stay in Touch</h5>
							<div class="social-links">
								<a
									href="https://www.instagram.com/amazoncare/"
									class="social-link"
								>
									<img
										src="https://amazon.care/images/60073a3d7d53c4a9533ec45f_facebook%20copy.svg"
									/>
								</a>
								<a
									href="https://www.facebook.com/AmazonCare/"
									class="social-link"
								>
									<img
										src="https://amazon.care/images/60073a3d7d53c4e3243ec45a_facebook.svg"
									/>
								</a>
								<a
									href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fshowcase%2Famazon-care%2Fabout%2F"
									class="social-link"
								>
									<img
										src="https://amazon.care/images/60073a3d7d53c4e8f83ec45d_linkedin.svg"
									/>
								</a>
							</div>
						</div>
						<div class="footer-link-group">
							<h5 class="sitemap-header">Contact us</h5>
							<router-link to="/about" class="footer-link" style="color: white"
								>Email Amazon Care</router-link
							>
						</div>
						<div class="footer-link-group">
							<h5 class="sitemap-header">Download the App</h5>
							<div class="footer-download">
								<a
									href="https://apps.apple.com/us/app/amazon-care/id1471711299"
									class="footer-app-link first"
								>
									<img
										class="img-download applestore"
										src="https://amazon.care/images/60073a3d7d53c4c0243ec413_apple-app-store-badge.svg"
									/>
								</a>
								<a
									href="https://play.google.com/store/apps/details?id=com.amazon.phseven.prod&hl=en_US"
									class="footer-app-link"
								>
									<img
										src="https://amazon.care/images/6010f566fb4b0b7dce24db73_google%20play%20badge.png"
										class="img-download google-store"
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="footer-last">
			<div class="copy-dsc">
				<div class="copy-left">
					<div class="service">
						Interpretation services available upon request / Servicios de
						interpretación disponibles bajo petición / Services d'interprétation
						disponibles sur demande / خدمات الترجمة الفورية متوفرة عند
						الطلب.خدمات الترجمة الفورية متوفرة عند الطلب
					</div>
					<div class="copyright">
						© 1996-2022, Amazon.com, Inc. or its affiliates
					</div>
				</div>
				<div class="copy-right">
					<div class="footer-link-group footer-micro">
						<router-link
							to="/about"
							class="footer-link legal"
							style="color: white"
							>Conditions of Use</router-link
						>
					</div>
					<div class="footer-link-group footer-micro">
						<router-link
							to="/about"
							class="footer-link legal"
							style="color: white"
							>Amazon Privacy Notice</router-link
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style>
.legal {
	font-size: 12px;
	text-decoration: underline;
}
.footer-micro {
	padding-right: 0;
	padding-left: 32px;
}
.copyright {
	padding: 0;
	font-size: 12px;
}
.service {
	margin-bottom: 16px;
	padding: 0;
	font-size: 12px;
	line-height: 20px;
}
.copy-left {
	width: 50%;
}
.copy-right {
	display: flex;
	justify-content: flex-end;
}
.copy-dsc {
	display: flex;
	max-width: 1168px;
	margin-right: auto;
	margin-left: auto;
	justify-content: space-between;
}
.footer-last {
	width: 100%;
	padding: 64px 80px 48px;
	background-color: #2d1954;
	color: #fff;
}
img {
	max-width: 100%;
	max-height: 100%;
	border: 0;
	vertical-align: middle;
	display: inline-block;
}
p {
	display: block;
	margin-block-start: 1em;
	margin-block-end: 1em;
	margin-inline-start: 0px;
	margin-inline-end: 0px;
}
.img-download {
	width: 120px;
	padding-right: 0;
	padding-left: 0;
}
.social-link {
	margin-right: 16px;
	border-bottom-style: none;
	max-width: 100%;
	display: inline-block;
}
.social-links {
	display: flex;
}
.sitemap-header {
	font-weight: 700;
	margin-bottom: 16px;
	margin-top: 0;
	color: #a194e0;
	font-size: 14px;
	line-height: 16px;
	letter-spacing: 0.5px;
}
.sitemap {
	display: flex;
	width: 100%;
	margin-bottom: 48px;
	justify-content: space-between;
	align-items: center;
}
.footer-app-link {
	margin-top: 4px;
	margin-bottom: 4px;
	border-bottom-style: none;
	max-width: 100%;
	display: inline-block;
}
.footer-download {
	display: flex;
	margin-top: -4px;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
}
.footer-link {
	display: block;
	margin-bottom: 16px;
	border-bottom-style: none;
	font-size: 14px;
	line-height: 16px;
	font-weight: 400;
	letter-spacing: 0.5px;
}
.footer-link-group {
	padding-right: 0;
	padding-left: 0;
}
.footer-links {
	display: flex;
	width: 100%;
	justify-content: space-between;
}
.footer-logo {
	display: flex;
	width: 100%;
	margin-bottom: 56px;
	justify-content: space-between;
	flex-wrap: wrap;
	text-align: left;
}
.layout-canvas > .layout-section > .layout-column {
	width: 100%;
	box-sizing: border-box;
	overflow-wrap: break-word;
}
.layout-canvas > .layout-section {
	margin: 10px 0px;
	position: relative;
	overflow: visible !important;
	width: 100%;
	overflow-wrap: break-word;
}
.layout-canvas {
	background-color: #ffffff;
	border: none;
	box-sizing: border-box;
	padding: 0px;
	width: 100%;
}
.amazon-form {
	border: 0 !important;
	width: 100% !important;
	overflow: hidden;
	height: 122px;
}
.email-cta-p {
	margin-top: 8px;
	margin-bottom: 0;
	font-size: 14px;
}
.h3-no-margin {
	margin-top: 0;
	margin-bottom: 0;
	font-size: 28px;
	line-height: 36px;
}
.email-cta-text {
	padding-left: 32px;
	align-self: flex-start;
	flex: 1;
}
.email-cta-field {
	width: 40%;
	padding-right: 32px;
	color: #2d1954;
}
.email-cta-dsc {
	display: flex;
}
.email-cta-border {
	position: absolute;
	left: 0;
	top: 0;
	right: auto;
	bottom: auto;
	display: none;
	width: 8px;
	height: 100%;
	border-top-left-radius: 8px;
	border-bottom-left-radius: 8px;
	background-color: #5c4cdf;
}
.email-drop-shadow {
	position: absolute;
	left: 5%;
	top: 10px;
	z-index: 0;
	width: 90%;
	height: 100%;
	max-width: 1168px;
	margin-right: auto;
	margin-left: auto;
	border-radius: 8px;
	background-color: #1b0c38;
	opacity: 0.5;
	filter: blur(32px);
}
.footer-nav-container {
	width: 100%;
	max-width: 1168px;
	margin-right: auto;
	margin-left: auto;
}
.email-cta-1 {
	overflow: hidden;
	position: relative;
	top: -150px;
	z-index: 1;
	display: flex;
	max-width: 1168px;
	margin-right: auto;
	margin-bottom: -140px;
	margin-left: auto;
	padding: 48px 40px;
	border-radius: 8px;
	background-color: #fff;
	box-shadow: 0 -5px 15px 0 rgb(53 31 101 / 12%);
	color: #fff;
}
.email-cta {
	position: relative;
	width: 100%;
	margin-bottom: 40px;
}
.footer {
	position: relative;
	display: flex;
	width: 100%;
	margin-right: auto;
	margin-left: auto;
	padding: 48px 80px 24px;
	flex-wrap: wrap;
	background-color: #351f65;
	color: #fff;
}
@media screen and (max-width: 991px) {
	.footer-micro {
		padding-right: 24px;
		padding-left: 0;
	}
	.copy-right {
		margin-top: 20px;
		justify-content: flex-start;
	}
	.copy-left {
		width: auto;
	}
	.copy-dsc {
		flex-direction: column;
	}
	.sitemap {
		padding-bottom: 8px;
	}
	.footer-link-group {
		width: 33%;
		margin-bottom: 40px;
		padding-right: 0;
	}
	.footer-links {
		width: 100%;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.email-cta-text {
		width: 100%;
		margin-top: 30px;
		padding-left: 0;
		align-self: flex-start;
	}
	.email-cta-field {
		width: auto;
	}
	.email-cta-dsc {
		flex-direction: column;
		align-items: center;
	}
	.footer {
		padding-right: 6%;
		padding-left: 6%;
	}
}
@media screen and (max-width: 767px) {
	.legal {
		font-size: 12px;
		text-decoration: underline;
	}
	.footer-micro {
		margin-bottom: 0;
		padding-right: 8px;
	}
	.footer-last {
		padding-right: 6%;
		padding-left: 6%;
	}
	.sitemap {
		margin-bottom: 12px;
		flex-direction: column;
		align-items: flex-start;
	}
	.img-download .apple-store {
		width: auto;
		height: 23px;
	}
	.img-download .google-store {
		width: auto;
		object-fit: fill;
	}
	.footer-app-link.first {
		margin-right: 8px;
	}
	.footer-app-link {
		width: 30%;
	}
	.footer-download {
		flex-direction: row;
		justify-content: flex-start;

		align-items: flex-start;
	}
	.amazon-form {
		margin-bottom: -30px !important;
		margin-left: -15px !important;
		margin-right: -15px !important;
		width: calc(100% + 30px) !important;
	}
	.footer {
		padding-right: 6%;
		padding-left: 6%;
	}
}
</style>
