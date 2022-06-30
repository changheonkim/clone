<template>
	<div class="main">
		<div class="main-bg">
			<img
				src="https://amazon.care/images/6010c8d6cb99fbd6819dd2be_homepage-hero-mobile.jpg"
				loading="lazy"
				srcset="
					https://amazon.care/images/6010c8d6cb99fbd6819dd2be_homepage-hero-mobile-p-500.jpeg   500w,
					https://amazon.care/images/6010c8d6cb99fbd6819dd2be_homepage-hero-mobile-p-800.jpeg   800w,
					https://amazon.care/images/6010c8d6cb99fbd6819dd2be_homepage-hero-mobile-p-1080.jpeg 1080w,
					https://amazon.care/images/6010c8d6cb99fbd6819dd2be_homepage-hero-mobile-p-1600.jpeg 1600w,
					https://amazon.care/images/6010c8d6cb99fbd6819dd2be_homepage-hero-mobile.jpg         1692w
				"
				sizes="100vw"
				class="fit-cover"
			/>
			<div class="main-bg-darken"></div>
			<div
				class="main-video-bg"
				data-poster-url="https://amazon.care/images/5fe6587ecb3c75e42001f7da_Home-Background-loop-(Compressed)-poster-00001.jpg"
				data-video-urls
				data-autoplay="true"
				data-loop="true"
				data-wf-ignore="true"
			>
				<video
					autoplay
					loop
					class="main-background-v"
					muted
					playsinline
					data-wf-ignore="true"
					data-object-fit="cover"
				>
					<source
						src="https://amazon.care/images/PicardBackgroundLoops2021_Evergreen_1080_V2_Compressed.mp4"
						data-wf-ignore="true"
					/>
					<source
						src="https://amazon.care/images/PicardBackgroundLoops2021_Evergreen_1080_V2_Compressed.webmhd.webm"
						data-wf-ignore="true"
					/>
				</video>
			</div>
		</div>
		<div class="main-home">
			<div class="main-text">
				<h1 class="h1-main">Healthcare made easy</h1>
				<p class="p-white">
					Skip the waiting room and start a virtual primary or urgent care visit
					from the comfort of your home.
				</p>
			</div>
			<div class="main-cta">
				<v-dialog v-model="dialog" fullscreen hide-overlay style="z-index: 1">
					<template v-slot:activator="{ on, attrs }">
						<button class="video-button button1" v-bind="attrs" v-on="on">
							<img
								src="https://amazon.care/images/60073a3d7d53c41d093ec42e_video-play.svg"
								alt=""
								class="button-icon"
							/>
							<div style="color: white">Watch the film</div>
						</button>
					</template>
					<v-card style="background-color: black">
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn color="green darken-1" text @click="dialog = false">
								<img
									style="
										padding-top: 30px;
										max-width: 60%;
										vertical-align: middle;
										display: inline-block;
									"
									src="https://amazon.care/images/60073a3d7d53c4ab263ec415_close.svg"
								/>
							</v-btn>
						</v-card-actions>
						<v-main>
							<video
								style="
									max-height: 80vh;
									max-width: 100%;
									margin: 0 auto;
									padding-top: 40px;
									display: block;
								"
								controls
								playsinline="playsinline"
								autoplay="autoplay"
							>
								<source src="../assets/video/Scrolling.mp4" type="video/mp4" />
							</video>
						</v-main>
					</v-card>
				</v-dialog>

				<a href="#get" class="button-gost">
					<div style="color: white">Get started</div>
				</a>
			</div>
		</div>
		<div class="down-arrow-wrapper">
			<a href="#next" class="arrow-wrap">
				<img
					src="https://amazon.care/images/60073a3d7d53c4db4d3ec43e_arrow---large.svg"
					class="down-arrow"
				/>
			</a>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			dialog: false,
		};
	},
};
</script>

<style>
@keyframes box-ani {
	0% {
		transform: translate(0, 0);
	}
	100% {
		transform: translate(0px, 10px);
	}
}
video {
	display: inline-block;
	vertical-align: baseline;
}
img {
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	border: 0;
}
h1 {
	margin-top: 20px;
	margin-bottom: 24px;
	font-weight: 700;
}
.down-arrow {
	width: 16px;
	object-fit: fill;
	animation: box-ani 0.7s linear 0s infinite alternate;
}
.down-arrow-wrapper {
	transform: translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0)
		rotateZ(0) skew(0, 0);
	position: absolute;
	left: 0;
	bottom: 32px;
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
	align-self: center;
}
.arrow-wrap {
	position: relative;
	display: flex;
	width: 56px;
	margin-right: auto;
	margin-left: auto;
	margin-bottom: 40px;
	padding: 16px 0;
	justify-content: center;
	align-self: center;
	border-bottom-style: none;
	max-width: 100%;
}
.button-gost {
	text-decoration: none;
	display: flex;
	padding: 11px 20px;
	justify-content: center;
	align-items: center;
	border-style: solid;
	border-width: 1px;
	border-color: #fff;
	border-radius: 20px;
	color: #fff;
	line-height: 16px;
}
.button-icon {
	max-height: 16px;
	margin-right: 12px;
}
.button1 {
	display: flex;
	margin-right: 20px;
	padding: 12px 16px;
	align-items: center;
	border-radius: 500px;
	background-color: #5c4cdf;
	transition: all 0.2s ease;
	color: #fff;
	font-size: 16px;
	line-height: 16px;
	text-decoration: none;
}
.video-button .button1 {
	max-width: 100%;
	margin-bottom: 16px;
	padding-right: 20px;
	padding-left: 20px;
	border-bottom-style: none;
	margin-right: 16px;
}
.main-cta {
	display: flex;
	margin-top: 32px;
	align-items: flex-start;
}
.p-white {
	max-width: 530px;
	color: #fff;
	line-height: 24px;
	font-weight: 400;
}
.h1-main {
	color: #fff;
	font-size: 35px;
	line-height: 52px;
}
.main-text {
	display: flex;
	width: auto;
	max-width: 650px;
	margin-left: 0;
	flex-direction: column;
	align-items: flex-start;
}
.main-home {
	position: relative;
	width: 100%;
	max-width: 1168px;
	margin-right: auto;
	margin-left: auto;
	padding: 96px 0;
}
.main-video-bg > video {
	background-size: cover;
	background-position: 50% 50%;
	position: absolute;
	margin: auto;
	width: 100%;
	height: 100%;
	right: -100%;
	bottom: -100%;
	top: -100%;
	left: -100%;
	object-fit: cover;
	z-index: -100;
}
.main-background-v {
	background-image: url('https://amazon.care/images/5fe6587ecb3c75e42001f7da_Home-Background-loop-(Compressed)-poster-00001.jpg');
}
.main-video-bg {
	width: 100%;
	height: 100%;
	position: relative;
	overflow: hidden;
	color: #fff;
}
.fit-cover {
	position: absolute;
	width: 100%;
	height: 100%;
	object-fit: cover;
	display: none;
}
.main-bg-darken {
	position: absolute;
	overflow: hidden;
	width: 100%;
	height: 100%;
	opacity: 1;
}
.main-bg {
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center center;
	transform: none !important;
	position: absolute;
	z-index: 0;
}
.main {
	top: 0;
	margin-top: -64px;
	position: relative;
	display: flex;
	overflow: hidden;
	height: 100vh;
	padding-right: 80px;
	padding-left: 80px;
	flex-direction: column;
	justify-content: center;
	background-color: #353535;
}
@media screen and (max-width: 991px) {
	.main-text {
		width: auto;
	}
	.main-home {
		padding-bottom: 96px;
	}
	.main {
		justify-content: center;
		padding-right: 6%;
		padding-left: 6%;
	}
}
@media screen and (max-width: 767px) {
	.h1-main {
		font-size: 32px;
		line-height: 40px;
	}
	.main-cta {
		margin-top: 16px;
	}
	.main-video-bg {
		display: none;
	}
	.main-bg-darken {
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background-image: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0.5),
			rgba(0, 0, 0, 0.5)
		);
	}
	.fit-cover {
		position: static;
		width: 100%;
		height: 100%;
		display: block;
		object-position: 50% 12%;
	}
	.main {
		padding-right: 6%;
		padding-left: 6%;
		justify-content: flex-end;
	}
}
</style>
