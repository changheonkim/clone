<template>
	<div class="reverse-home home">
		<div class="homestory home-stories-feed">
			<div class="content-center">
				<h2 class="header-test">In our patients' words</h2>
			</div>
			<div class="slide">
				<v-carousel
					cycle
					max-width="750"
					height="400"
					hide-delimiter-background
				>
					<v-carousel-item v-for="(slide, i) in slides" :key="i">
						<v-sheet :color="colors[i]" height="100%">
							<v-row
								class="fill-height"
								align="center"
								justify="center"
								style="
									padding-left: 60px;
									padding-right: 60px;
									text-align: center;
								"
							>
								<div class="text-h5">
									{{ slide }}
								</div>
							</v-row>
						</v-sheet>
					</v-carousel-item>
				</v-carousel>
			</div>
			<div class="health-story-home">
				<div class="divider home"></div>
				<div class="home-health-header">
					<h2 class="h3-nomargin">Health Stories</h2>
					<a href="" class="arrow-rink inline-block">
						<div class="arrow-link-text"><b>SEE ALL STORIES</b></div>
						<img
							src="https://amazon.care/images/60073a3d7d53c49e153ec453_play.svg"
							loading="lazy"
							alt=""
							class="arrow-link-arrow-small"
						/>
					</a>
				</div>
				<div>
					<div class="health-story-grid">
						<div class="health-story-grid-item">
							<router-link
								to="/about"
								class="health-story-card"
								style="text-decoration: none; color: black"
							>
								<img
									loading="lazy"
									src="https://amazon.care/images/6233597a26822e30a2159df0_Disease%20Prevention%201%20(1).jpg"
									sizes="(max-width: 767px) 88vw, (max-width: 991px) 39vw, 25vw"
									srcset="
										https://amazon.care/images/6233597a26822e30a2159df0_Disease%20Prevention%201%20(1)-p-500.jpeg   500w,
										https://amazon.care/images/6233597a26822e30a2159df0_Disease%20Prevention%201%20(1)-p-1080.jpeg 1080w,
										https://amazon.care/images/6233597a26822e30a2159df0_Disease%20Prevention%201%20(1)-p-1600.jpeg 1600w,
										https://amazon.care/images/6233597a26822e30a2159df0_Disease%20Prevention%201%20(1)-p-2000.jpeg 2000w,
										https://amazon.care/images/6233597a26822e30a2159df0_Disease%20Prevention%201%20(1)-p-2600.jpeg 2600w,
										https://amazon.care/images/6233597a26822e30a2159df0_Disease%20Prevention%201%20(1)-p-3200.jpeg 3200w,
										https://amazon.care/images/6233597a26822e30a2159df0_Disease%20Prevention%201%20(1).jpg         5503w
									"
									class="health-story-image"
								/>
								<div class="health-story-card-content">
									<div>
										<div class="health-story-card-eyebrow">
											Health and Wellness
										</div>
										<h3 class="h5-health-stories">
											You Can Strengthen Your Immune System—Here’s How
										</h3>
										<div class="health-story-disc">
											Give your immune system the boost it needs with these
											vitamins, foods, and healthy habits.
										</div>
									</div>
									<div class="health-story-card-bottom">
										<div class="health-card-cta">Continue Reading</div>
										<img
											src="https://amazon.care/images/600f60b38503462787a8f953_icon-arrow--extra-small.svg"
											loading="lazy"
										/>
									</div>
								</div>
							</router-link>
						</div>
						<div class="health-story-grid-item">
							<router-link
								to="/about"
								style="text-decoration: none; color: black"
								class="health-story-card"
							>
								<img
									loading="lazy"
									src="https://amazon.care/images/60073a3d7d53c431313ec5d6_Amazon_Care_Health_Story_How_To_Know.jpg"
									sizes="(max-width: 767px) 88vw, (max-width: 991px) 39vw, 25vw"
									srcset="
										https://amazon.care/images/60073a3d7d53c431313ec5d6_Amazon_Care_Health_Story_How_To_Know-p-500.jpeg   500w,
										https://amazon.care/images/60073a3d7d53c431313ec5d6_Amazon_Care_Health_Story_How_To_Know-p-500.jpeg  1080w,
										https://amazon.care/images/60073a3d7d53c431313ec5d6_Amazon_Care_Health_Story_How_To_Know-p-1600.jpeg 1600w,
										https://amazon.care/images/60073a3d7d53c431313ec5d6_Amazon_Care_Health_Story_How_To_Know-p-2000.jpeg 2000w,
										https://amazon.care/images/60073a3d7d53c431313ec5d6_Amazon_Care_Health_Story_How_To_Know-p-2600.jpeg 2600w,
										https://amazon.care/images/60073a3d7d53c431313ec5d6_Amazon_Care_Health_Story_How_To_Know-p-3200.jpeg 3200w,
										https://amazon.care/images/60073a3d7d53c431313ec5d6_Amazon_Care_Health_Story_How_To_Know.jpg         5503w
									"
									class="health-story-image"
								/>
								<div class="health-story-card-content">
									<div>
										<div class="health-story-card-eyebrow">Everyday care</div>
										<h3 class="h5-health-stories">
											How to Know if You Have a Cold, the Flu, or COVID-19
										</h3>
										<div class="health-story-disc">
											Tap here to see charts with information from experts to
											help you interpret your symptoms.
										</div>
									</div>
									<div class="health-story-card-bottom">
										<div class="health-card-cta">Continue Reading</div>
										<img
											src="https://amazon.care/images/600f60b38503462787a8f953_icon-arrow--extra-small.svg"
											loading="lazy"
										/>
									</div>
								</div>
							</router-link>
						</div>
						<div class="health-story-grid-item">
							<router-link
								to="/about"
								style="text-decoration: none; color: black"
								class="health-story-card"
							>
								<img
									loading="lazy"
									src="https://amazon.care/images/600a41663c4eddd738b6e533_Sore%20throat_desktop.jpg"
									sizes="(max-width: 767px) 88vw, (max-width: 991px) 39vw, 25vw"
									srcset="
										https://amazon.care/images/600a41663c4eddd738b6e533_Sore%20throat_desktop-p-800.jpeg   800w,
										https://amazon.care/images/600a41663c4eddd738b6e533_Sore%20throat_desktop-p-1600.jpeg 1600w,
										https://amazon.care/images/600a41663c4eddd738b6e533_Sore%20throat_desktop-p-2000.jpeg 2000w,
										https://amazon.care/images/600a41663c4eddd738b6e533_Sore%20throat_desktop-p-2600.jpeg 2600w,
										https://amazon.care/images/600a41663c4eddd738b6e533_Sore%20throat_desktop-p-3200.jpeg 3200w,
										https://amazon.care/images/600a41663c4eddd738b6e533_Sore%20throat_desktop.jpg         4909w
									"
									class="health-story-image"
								/>
								<div class="health-story-card-content">
									<div>
										<div class="health-story-card-eyebrow">
											Health and Wellness
										</div>
										<h3 class="h5-health-stories">
											Your Complete Guide to Sore Throats (And How to TreatThem)
										</h3>
										<div class="health-story-disc">
											Sore throats are one of the most common reasons people see
											their family practitioner. Learn about sore throat causes,
											treatment and when to seek care.
										</div>
									</div>
									<div class="health-story-card-bottom">
										<div class="health-card-cta">Continue Reading</div>
										<img
											src="https://amazon.care/images/600f60b38503462787a8f953_icon-arrow--extra-small.svg"
											loading="lazy"
										/>
									</div>
								</div>
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			colors: ['#ebeefc', '#ebeefc', '#ebeefc', '#ebeefc'],
			slides: [
				'"I was delighted with my first experience using Amazon Care. Absolutely loved it!"',
				'"Our call was for something fairly easy but theresponse rate, care and quick turnaround for an antibiotic was probably the best experience I have ever had re: medical concerns."',
				' "Blown away with how fast, easy, and high quality the whole experience was. It truly raises the bar for healthcare services."',
				'"I love it so much! I never hesitate to seek help or medical experts opinion anymore due to ease of use AND quality of care. I haven’t been to urgent care since using Amazon Care."',
			],
		};
	},
};
</script>

<style>
.text-h5 {
	color: #351f65;
}
.health-card-cta {
	margin-right: 8px;
	color: #5c4cdf;
	font-size: 12px;
	line-height: 16px;
	font-weight: 700;
	letter-spacing: 0.5px;
	text-decoration: underline;
	text-transform: uppercase;
}
.health-story-card-bottom {
	display: flex;
	align-items: center;
}
.health-story-disc {
	padding-top: 16px;
	font-size: 14px;
	line-height: 24px;
}
.h5-health-stories {
	margin-top: 0;
	font-size: 20px;
	line-height: 28px;
	margin-bottom: 0;
	color: #351f65;
	font-size: 20px;
}
.health-story-card-eyebrow {
	margin-bottom: 8px;
	color: #5e66d5;
	font-size: 12px;
	line-height: 20px;
	font-weight: 700;
}
.health-story-card-content {
	z-index: 10;
	display: grid;
	grid-auto-columns: 1fr;
	grid-column-gap: 16px;
	grid-row-gap: 20px;
	grid-template-columns: 1fr;
	grid-template-rows: auto;
	position: relative;
	z-index: 10;
	display: grid;
	width: 85%;
	margin: -24px auto 0;
	padding: 18px 20px 16px;
	flex-direction: column;
	justify-content: space-between;
	align-items: stretch;
	align-content: space-between;
	flex: 1;
	grid-auto-columns: 1fr;
	grid-column-gap: 16px;
	grid-row-gap: 16px;
	grid-template-columns: 1fr;
	grid-template-rows: auto auto;
	background-color: #fff;
}
.health-story-image {
	position: relative;
	z-index: 5;
	height: 238px;
	object-fit: cover;
}
.health-story-card {
	position: relative;
	top: 0;
	display: flex;
	overflow: hidden;
	height: 100%;
	margin-left: 0;
	padding-right: 0;
	padding-bottom: 16px;
	padding-left: 0;
	flex-direction: column;
	justify-content: flex-start;
	flex-wrap: nowrap;
	align-items: stretch;
	align-content: stretch;
	border-bottom-style: none;
	border-radius: 8px;
	background-color: #fff;
	box-shadow: 0 8px 12px 0 rgb(53 31 101 / 12%);
	color: #351f65;
}
.health-story-grid-item {
	position: relative;
	padding-right: 24px;
	padding-left: 24px;
	overflow: visible;
	width: 33.333333333333336%;
	margin-bottom: 64px;
	padding-right: 2%;
	padding-bottom: 0;
	padding-left: 2%;
}
.health-story-grid {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}
.arrow-link-arrow-small {
	top: -1px;
	height: 10px;
	transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0)
		rotateZ(0) skew(0, 0);
	position: relative;
	display: inline;
}
.arrow-link-text {
	display: inline-block;
	padding-right: 16px;
	font-size: 12px;
	line-height: 12px;
}
.arrow-link {
	display: inline-block;
	align-items: center;
	border-bottom-style: none;
	color: #5c4cdf;
	font-weight: 700;
	letter-spacing: 0.56px;
	text-transform: uppercase;
}
.inline-block {
	max-width: 100%;
	display: inline-block;
}
.h3-nomargin {
	margin-top: 0;
	margin-bottom: 0;
	font-size: 28px;
	line-height: 36px;
}
.home-health-header {
	display: flex;
	margin-bottom: 40px;
	padding-right: 2%;
	padding-left: 2%;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-end;
}
.divider.home {
	max-width: 1168px;
}
.divider {
	width: 100%;
	height: 1px;
	max-width: 1140px;
	margin: 96px auto;
	padding-right: 20px;
	padding-left: 20px;
	background-color: #5e66d5;
}
.page.page-current {
	background-color: #5e66d5;
}
.page {
	width: 12px;
	height: 12px;
	margin-right: 8px;
	margin-left: 8px;
	border-style: solid;
	border-width: 1px;
	border-color: #5c4cdf;
	border-radius: 500px;
}

.header-test {
	margin-top: 24px;
	margin-bottom: 16px;
	font-size: 24px;
	line-height: 28px;
}
.health-story-home {
	margin-top: 136px;
	margin-bottom: 20px;
}
.content-center {
	max-width: 720px;
	margin-right: auto;
	margin-left: auto;
	padding-right: 20px;
	padding-left: 20px;
	text-align: center;
}
.homestory.home-stories-feed {
	max-width: 1216px;
	padding-bottom: 64px;
	flex-direction: column;
}

.homestory {
	position: relative;
	width: 100%;
	max-width: 1168px;
	margin-right: auto;
	margin-left: auto;
	padding: 96px 0;
	justify-content: center;
}
.reverse-home.home {
	padding-top: 190px;
}

.reverse-home {
	padding-right: 80px;
	padding-left: 80px;
	background-image: linear-gradient(180deg, #ebeefc, #fff);
}

@media screen and (max-width: 991px) {
	.health-story-card-content {
		width: calc(100% - 40px);
	}
	.health-story-image {
		height: 25vw;
	}
	.health-story-grid-item {
		width: 50%;
		padding-right: 3%;
		padding-left: 3%;
	}
	.health-story-grid {
		flex-direction: row;
	}
	home-health-header {
		padding-right: 3%;
		padding-left: 3%;
		align-items: flex-end;
	}
	.divider.home {
		width: auto;
		margin-right: 24px;
		margin-left: 24px;
	}
	.health-story-home {
		margin-top: 48px;
		margin-bottom: 0;
		padding-top: 0;
	}

	.homestory {
		padding-bottom: 40px;
	}
	.reverse-home {
		padding-right: 6%;
		padding-left: 6%;
	}
	.reverse-home.home {
		padding-top: 0;
	}
}
@media screen and (max-width: 767px) {
	.health-story-image {
		height: 50vw;
		object-fit: cover;
	}
	.health-story-grid-item {
		width: 100%;
		padding-right: 0;
		padding-left: 0;
	}
	.h3-nomargin {
		font-size: 28px;
		line-height: 32px;
	}
	.home-health-header {
		padding-right: 0;
		padding-left: 0;
		align-items: flex-end;
	}
	.divider.home {
		margin-right: 0;
		margin-left: 0;
	}
	.divider {
		margin-top: 60px;
		margin-bottom: 60px;
	}
	.health-story-home {
		margin-top: 24px;
		padding-top: 16px;
	}
	.content-center {
		padding-right: 0;
		padding-left: 0;
	}
	.homestory.home-stories-feed {
		padding-top: 80px;
	}
	.reverse-home.home {
		padding-top: 20px;
	}
	.reverse-home {
		padding-right: 6%;
		padding-left: 6%;
	}
}
</style>
