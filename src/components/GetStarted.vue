<template>
	<div class="get-started">
		<div class="container-get-started" id="get-started">
			<div class="download">
				<h2 class="footer-get-started">Get Started</h2>
				<div class="app-download">
					<a
						href="https://apps.apple.com/us/app/amazon-care/id1471711299"
						target="_blank"
						rel="noopener noreferrer"
						class="apple-store-download"
						><img
							src="https://amazon.care/images/60073a3d7d53c47b8d3ec455_Bitmap%20Copy@2x.png"
							loading="lazy"
							class="get-started-cta"
					/></a>
					<a
						href="https://play.google.com/store/apps/details?id=com.amazon.phseven.prod&amp;hl=en_US"
						target="_blank"
						rel="noopener noreferrer"
						class="google-store-download"
						><img
							src="https://amazon.care/images/60073a3d7d53c44fbb3ec45b_Bitmap@2x.png"
							loading="lazy"
							class="get-started-cta"
					/></a>
				</div>
			</div>
			<div class="started-content">
				<h2 class="footer-get-started content-text">
					We’re here for you 24/7, 365 days a year
				</h2>
				<div class="get-started-bullets _1">
					Care Team available for virtual care or questions 7 days a week
					through the app
				</div>
				<div class="get-started-bullets _2">
					Make appointments in advance - around your schedule
				</div>
				<div class="get-started-bullets _3">
					In-person follow-up care when you need it *
				</div>
				<div class="get-started-bullets _4">
					<div class="no-border">
						<p class="rating-text">
							<span class="rating-sup">*</span>
							Only available in select locations.
						</p>
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
p {
	display: block;
	margin-block-start: 1em;
	margin-block-end: 1em;
	margin-inline-start: 0px;
	margin-inline-end: 0px;
	margin-top: 0;
	color: #2d1954;
}
img {
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	border: 0;
}
.rating-sup {
	position: relative;
	top: -4px;
	font-size: 8px;
	line-height: 8px;
	font-weight: 700;
}
.rating-text {
	margin-bottom: 8px;
	font-size: 12px;
	line-height: 15px;
	font-style: italic;
}
.no-border {
	flex-direction: column;
	align-items: flex-start;
	border: 0;
	width: 100%;
	grid-row-start: span 1;
	grid-row-end: span 1;
	grid-column-start: span 2;
	grid-column-end: span 2;
	display: block;
	width: 100%;
	padding-top: 8px;
	border-top-color: #d7dbf9;
}
.get-started-bullets._4 {
	background-image: none;
	padding-left: 0;
}
.get-started-bullets._3 {
	background-image: url(https://amazon.care/images/60073a3d7d53c45a3f3ec4ce_persona%20clinician%20---%20monoline.svg);
}
.get-started-bullets._2 {
	max-width: 300px;
	background-image: url(https://amazon.care/images/60073a3d7d53c426003ec4d2_schedulling%20calendar%20---%20monoline.svg);
}
.get-started-bullets._1 {
	max-width: 350px;
}
.get-started-bullets {
	max-width: 400px;
	margin-top: 15px;
	margin-bottom: 15px;
	margin-left: -10px;
	padding-top: 9px;
	padding-left: 45px;
	background-image: url(https://amazon.care/images/60073a3d7d53c47e413ec4d5_persona%20clinician%20video%20chat%20---%20monoline.svg);
	background-position: 0 0;
	background-size: auto 42px;
	background-repeat: no-repeat;
	color: #2d1954;
}
.footer-get-started.content-text {
	max-width: 350px;
}
.started-content {
	width: 50%;
	padding-left: 16px;
}
.get-started-cta {
	width: 150px;
}
.google-store-download {
	border-bottom-style: none;
	max-width: 100%;
	display: inline-block;
}
.apple-store-download {
	margin-right: 24px;
	border-bottom-style: none;
	max-width: 100%;
	display: inline-block;
}
.app-download {
	display: flex;
}
.footer-get-started {
	font-size: 28px;
	line-height: 36px;
	margin-bottom: 24px;
	font-weight: 700;
	margin-top: 0;
}
.download {
	width: 50%;
	padding-right: 16px;
}
.get-started {
	position: relative;
	padding-right: 80px;
	padding-bottom: 81px;
	padding-left: 80px;
	background-color: #ebeefc;
}
.container-get-started {
	position: relative;
	width: 100%;
	max-width: 1168px;
	margin-right: auto;
	margin-left: auto;
	padding: 96px 0;
	display: flex;
	padding-right: 0;
	padding-left: 0;
	justify-content: space-between;
	flex-wrap: wrap;
}
@media screen and (max-width: 991px) {
	.get-started-bullets {
		margin-left: -10px;
	}
	.started-content {
		margin-top: 0;
		padding-left: 0;
	}
	.google-store-download {
		margin-top: 24px;
	}
	.get-started {
		padding-right: 6%;
		padding-bottom: 100px;
		padding-left: 6%;
	}
	.container-get-started {
		padding-bottom: 40px;
		flex-direction: row;
		align-items: flex-start;
		padding-top: 72px;
	}
	.download {
		width: 50%;
		padding-right: 0;
	}
	.app-download {
		flex-direction: column;
		align-items: flex-start;
	}
}
@media screen and (max-width: 767px) {
	.started-content {
		width: 100%;
		margin-top: 64px;
	}
	.google-store-download {
		margin-top: 0;
	}
	.get-started {
		padding-right: 6%;
		padding-left: 6%;
	}
	.container-get-started {
		flex-direction: column;
	}
	.download {
		width: 100%;
	}
	.footer-get-started {
		font-size: 28px;
		line-height: 32px;
	}
	.app-download {
		flex-direction: row;
	}
}
</style>
