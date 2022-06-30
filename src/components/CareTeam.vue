<template>
	<div class="care-team-main">
		<div class="homecare-wrapper">
			<div class="homecare-team">
				<div class="home-top">
					<h2 id="node" class="left">You care Team</h2>
					<p class="home-text large">
						Amazon Care works with Care Medical, a team of clinicians that will
						support you across your healthcare journey. To help with your
						primary care and urgent care needs, Care Medical has Care Teams.
					</p>
					<p class="home-text">
						Care Teams help manage your primary care and preventive health
						concerns. They promote health and wellness through disease
						prevention and help manage long-term medical conditions. Care Teams
						are made up of clinicians, with family medicine backgrounds, who are
						focused on building a relationship with you to provide the care you
						need, and understand your health goals.
					</p>
				</div>
				<div class="divide"></div>
				<div class="home-team-right">
					<div class="home-team-right-text">
						Care Teams provide annual preventative visits, and care for acute
						and on-going needs.
					</div>
					<div class="home-team-right-text">
						With a Care Team you can schedule visits and see the same clinicians
						over time.
					</div>
					<div class="home-team-right-text">
						You can connect with your Care Team to answer your questions right
						from the app.
					</div>
				</div>
				<div class="home-team-college">
					<img
						src="https://amazon.care/images/600ef46bc9d3f413c0d1ed9c_care%20team%20phone-no%20shadow.png"
						loading="lazy"
						width="220"
						alt=""
						class="care-team-phone"
					/>
					<img
						src="https://amazon.care/images/600efe56ac85b20ed21d5980_collage%20image%201.jpg"
						loading="lazy"
						width="212"
						alt=""
						class="care-team-collage--image1"
					/>
					<img
						src="https://amazon.care/images/600f00e3bf53c9959ed396c8_collage%20image%202.jpg"
						loading="lazy"
						width="212"
						alt=""
						class="care-team-collage--image2"
					/>
					<img
						src="https://amazon.care/images/6010d0b689e20d1e31df20ea_GaryMatoso-05-08-20-0149%20Copy%203@2x.jpg"
						loading="lazy"
						width="212"
						alt=""
						class="care-team-collage--image3"
					/>
					<img
						src="https://amazon.care/images/6010cdd1c97df420df09a677_collage%20image%209.jpg"
						loading="lazy"
						width="212"
						alt=""
						class="care-team-collage--image4"
					/>
					<img
						src="https://amazon.care/images/6010ce02601bb5824de18546_collage%20image%208.jpg"
						loading="lazy"
						width="212"
						alt=""
						class="care-team-collage--image5"
					/>
					<img
						src="https://amazon.care/images/6010d09e0d67db2cb9079aed_GaryMatoso-05-08-20-0149%20Copy%205@2x.jpg"
						loading="lazy"
						width="212"
						alt="Photo collage showing clinicians providing care to patients virtually and at home."
						class="care-team-collage--image6"
					/>
				</div>
				<div class="home-team-cta">
					<v-dialog v-model="dialog" fullscreen hide-overlay style="z-index: 1">
						<template v-slot:activator="{ on, attrs }">
							<button
								style="color: #fff"
								class="button button--shadow no-margin equal-padding video-autoplay w-inline-block"
								v-bind="attrs"
								v-on="on"
							>
								<img
									src="https://amazon.care/images/60073a3d7d53c41d093ec42e_video-play.svg"
									loading="lazy"
									alt=""
									class="button__icon"
								/>
								<div>Meet the Care Medical team</div>
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
										alt=""
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
									playsinline="playsinline"
									autoplay="autoplay"
									controls
								>
									<source
										src="../assets/video/Scrolling.mp4"
										type="video/mp4"
									/>
								</video>
							</v-main>
						</v-card>
					</v-dialog>
				</div>
			</div>
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
.button__icon {
	max-height: 16px;
	margin-right: 12px;
}
.button {
	display: flex;
	padding: 12px 16px;
	align-items: center;
	border-radius: 500px;
	background-color: #5c4cdf;
	font-size: 16px;
	line-height: 16px;
	text-decoration: none;
	padding-right: 20px;
	padding-left: 20px;
	border-bottom-style: none;
	box-shadow: none;
	margin-right: 8px;
	margin-left: 8px;
}

.home-team-cta {
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	padding-top: 24px;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	-ms-flex-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	-webkit-align-items: center;
	-ms-flex-align: center;
	align-items: center;
	cursor: pointer;
}
.care-team-phone {
	position: absolute;
	left: 0;
	top: 3em;
	right: 0;
	bottom: auto;
	z-index: 100;
	width: 220px;
	margin-right: auto;
	margin-left: auto;
}
.care-team-collage--image1 {
	position: absolute;
	left: 55%;
	top: 25%;
	right: 0;
	bottom: auto;
	z-index: 90;
	width: 213px;
	height: 158px;
	-o-object-fit: cover;
	object-fit: cover;
}
.care-team-collage--image2 {
	position: absolute;
	left: auto;
	top: 15.6em;
	right: 130px;
	bottom: 0;
	width: 201px;
	height: 138px;
	-o-object-fit: cover;
	object-fit: cover;
}
.care-team-collage--image3 {
	position: absolute;
	left: auto;
	top: 10.5em;
	right: 12px;
	bottom: 0;
	width: 132px;
}
.care-team-collage--image4 {
	position: absolute;
	left: 271px;
	top: 14.2em;
	z-index: 110;
	width: 231px;
	height: 158px;
	-o-object-fit: cover;
	object-fit: cover;
}
.care-team-collage--image5 {
	position: absolute;
	left: 115px;
	top: 8.8em;
	z-index: 110;
	width: 201px;
	height: 138px;
	-o-object-fit: cover;
	object-fit: cover;
}
.care-team-collage--image6 {
	position: absolute;
	left: 12px;
	top: 14.6em;
	z-index: 110;
	width: 138px;
	height: 124px;
	-o-object-fit: cover;
	object-fit: cover;
}
img {
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
}
.home-team-college {
	position: relative;
	display: flex;
	width: 1140px;
	height: 500px;
	margin-right: auto;
	margin-left: auto;
	justify-content: center;
}
.home-team-right-text {
	margin-top: 15px;
	margin-bottom: 15px;
	padding-left: 40px;
	background-position: 0 0;
	background-size: auto;
	background-repeat: no-repeat;
	background-image: url(https://amazon.care/images/60073a3d7d53c4cc803ec4d1_Check_Reversed_Fill_RGB.svg);
}
.home-team-right {
	display: grid;
	padding-top: 32px;
	padding-right: 32px;
	padding-left: 32px;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	grid-auto-columns: 1fr;
	grid-column-gap: 33px;
	grid-row-gap: 16px;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: auto;
}
.divide {
	width: 100%;
	height: 1px;
	max-width: 1140px;
	margin: 96px auto;
	padding-right: 20px;
	padding-left: 20px;
	background-color: #d7dbf9;
	margin-top: 0;
	margin-bottom: 0;
}
#node {
	grid-row-start: span 1;
	grid-row-end: span 1;
	grid-column-start: span 2;
	grid-column-end: span 2;
}
p {
	display: block;
	margin-block-start: 1em;
	margin-block-end: 1em;
	margin-inline-start: 0px;
	margin-inline-end: 0px;
}
.home-text.large {
	font-size: 20px;
	line-height: 150%;
}
.home-text {
	max-width: 610px;
	margin-right: 0;
	margin-bottom: 0;
	padding-right: 0;
	color: #2d1954;
	text-align: left;
}
.left {
	text-align: left;
	margin-bottom: 16px;
	color: #351f65;
	font-size: 32px;
	line-height: 40px;
	margin-top: 0;
}
.home-top {
	display: grid;
	padding-right: 32px;
	padding-bottom: 40px;
	padding-left: 32px;
	flex-direction: row;
	justify-content: flex-start;
	align-items: start;
	grid-auto-columns: 1fr;
	grid-column-gap: 40px;
	grid-row-gap: 16px;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto auto;
}
.homecare-team {
	grid-auto-columns: 1fr;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto auto;
	grid-column-gap: 40px;
	grid-row-gap: 60px;
}
.homecare-wrapper {
	display: flex;
	max-width: 1200px;
	margin-right: auto;
	margin-left: auto;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
}
.care-team-main {
	padding-top: 150px;
	padding-bottom: 200px;
}
@media screen and (max-width: 991px) {
	.care-team-collage--image6 {
		left: 20px;
		top: 9.4em;
		display: block;
	}
	.care-team-collage--image5 {
		left: 160px;
		top: 6.7em;
		display: none;
	}
	.care-team-collage--image4 {
		left: 100px;
		top: 15em;
	}
	.care-team-collage--image3 {
		left: auto;
		top: 15em;
		right: 20px;
		bottom: 0;
		z-index: 110;
		display: block;
	}
	.care-team-collage--image2 {
		top: 16.5em;
		right: 160px;
		display: none;
	}
	.care-team-collage--image1 {
		left: auto;
		top: 7em;
		right: 100px;
		bottom: 0;
	}
	.care-team-phone {
		width: 208px;
	}
	.home-team-college {
		width: 100%;
		max-width: 810px;
	}
	.home-team-right {
		padding-left: 32px;
	}
	.homecare-team {
		grid-column-gap: 40px;
		grid-row-gap: 60px;
	}
	.care-team-main {
		padding: 120px 0;
	}
	.homecare-wrapper {
		width: 100%;
	}
}
@media screen and (max-width: 767px) {
	.care-team-collage--image6 {
		left: 374px;
		top: 7.4em;
		display: block;
		width: 130px;
		height: 112px;
	}
	.care-team-collage--image5 {
		left: auto;
		top: auto;
		right: 0;
		bottom: 5em;
		z-index: 90;
		display: block;
		width: 173px;
		height: 136px;
	}
	.care-team-collage--image4 {
		left: 0;
		top: 7.9em;
		width: 180px;
		height: 120px;
	}
	.care-team-collage--image3 {
		left: 0;
		top: 17.3em;
		display: block;
	}
	.care-team-collage--image2 {
		top: 7.2em;
		right: 300px;
		display: none;
	}
	.care-team-collage--image1 {
		top: 16.3em;
		right: 0;
		display: none;
		width: 190px;
		height: 136px;
	}
	.home-team-right-text {
		margin-top: 8px;
		margin-bottom: 8px;
		text-align: left;
	}
	#node {
		grid-row-start: span 1;
		grid-row-end: span 1;
		grid-column-start: span 1;
		grid-column-end: span 1;
	}
	.home-team-college {
		width: 504px;
		height: 480px;
	}
	.home-team-right {
		max-width: 550px;
		margin-right: auto;
		margin-left: auto;
		grid-template-columns: 1fr;
		grid-template-rows: auto auto auto;
	}
	.home-top {
		grid-row-start: span 1;
		grid-row-end: span 1;
		grid-column-start: span 1;
		grid-column-end: span 1;
		grid-template-columns: 1fr;
		grid-template-rows: auto auto auto;
	}
	.homecare-team {
		grid-template-areas: '.';
		grid-template-columns: 1fr;
		grid-template-rows: auto auto auto;
	}
	.care-team-main {
		padding: 72px 6%;
	}
}
</style>
