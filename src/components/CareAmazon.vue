<template>
	<div class="amazon-care" id="get">
		<div class="care-wrapper">
			<div class="get-care-bg--par-2">
				<img
					src="https://amazon.care/images/60073a3d7d53c4e8de3ec4d6_GaryMatoso-06-08-20-2528%201.jpg"
					loading="lazy"
					width="1441"
					sizes="100vw"
					srcset="
						https://amazon.care/images/60073a3d7d53c4e8de3ec4d6_GaryMatoso-06-08-20-2528%201-p-500.jpeg   500w,
						https://amazon.care/images/60073a3d7d53c4e8de3ec4d6_GaryMatoso-06-08-20-2528%201-p-1080.jpeg 1080w,
						https://amazon.care/images/60073a3d7d53c4e8de3ec4d6_GaryMatoso-06-08-20-2528%201-p-1600.jpeg 1600w,
						https://amazon.care/images/60073a3d7d53c4e8de3ec4d6_GaryMatoso-06-08-20-2528%201-p-2000.jpeg 2000w,
						https://amazon.care/images/60073a3d7d53c4e8de3ec4d6_GaryMatoso-06-08-20-2528%201-p-2600.jpeg 2600w,
						https://amazon.care/images/60073a3d7d53c4e8de3ec4d6_GaryMatoso-06-08-20-2528%201.jpg         2882w
					"
					alt=""
					class="img-fit-cover get-amazon-care"
				/>
				<div class="get-care-bg__darken-2"></div>
			</div>
			<div class="care-container">
				<h2 class="c-white" style="color: white">Get Amazon Care</h2>
				<div class="care-card-container">
					<div class="care-card">
						<h3 class="care-header">Eligible Employees and Families</h3>
						<div class="care-text">
							Virtual care is available everywhere in the US if you are an
							employee age 18+. Check to see if in-person care is available in
							your area.
						</div>
						<div class="care-text">
							You are enrolled on your employer's health plan that includes
							Amazon Care as a benefit.
						</div>
						<div class="cta-card-buttons for-employees">
							<a href="#get-started" class="button-2 get-care w-inline-block">
								<div style="color: white">Get the app</div>
							</a>
							<div class="get-care-link-wrapper">
								<div class="p--care-team small">Not Yet Eligible?</div>
								<a
									@click="dialog = true"
									class="get-care-link w-inline-block"
									v-on="on"
									v-bind="attrs"
								>
									<div>Notify me with updates</div>
								</a>
								<v-dialog
									v-model="dialog"
									width="630px"
									max-height="80vh"
									persistent
								>
									<v-card>
										<v-card-actions>
											<div
												color="green darken-1"
												@click="dialog = false"
												class="close-m"
												style="padding-left: 530px; padding-top: 10px"
											>
												Close
												<img
													src="https://amazon.care/images/60073a3d7d53c403143ec468_close---small.svg"
												/>
											</div>
										</v-card-actions>
										<v-card-text style="padding-left: 100px">
											<h3 style="color: #351f65">
												We’ll notify you when Amazon Care is available for you
											</h3>

											<p style="padding-right: 90px; padding-top: 15px">
												Subscribe to get occasional emails from Amazon Care. You
												can unsubscribe at any time and we won't share your
												information.
											</p>
											<p>
												<label>Email*</label>
												<br />
												<input
													type="text"
													name="First_Name"
													id="First_Name"
													value=""
													size="30"
													maxlength="40"
													class="m-input-1"
												/>
											</p>
											<p>
												<label>ZIP Code*</label>
												<br />
												<input
													type="text"
													name="Last_Name"
													id="Last_Name"
													value=""
													size="30"
													maxlength="40"
													class="m-input-1"
												/>
											</p>
											<div style="padding-bottom: 40px">
												<v-btn
													rounded
													color="#5e66d5"
													large
													@click="dialog = false"
													style="padding: 20px; color: white"
												>
													submit
												</v-btn>
												<br />
											</div>
											<div
												style="
													padding-bottom: 40px;
													color: black;
													font-size: 10px;
												"
											>
												* Required
											</div>
										</v-card-text>
									</v-card>
								</v-dialog>
							</div>
						</div>
					</div>
					<div class="care-card">
						<h3 class="care-header">U.S. Employers</h3>
						<div class="care-text no">
							Reach out to our team to learn more about offering Amazon Care as
							a benefit to your employees.
						</div>
						<div class="cta-card-buttons">
							<router-link to="/about" class="button-2 get-care w-inline-block">
								<div style="color: white">Learn more</div>
							</router-link>
							<button
								class="button-2 ghost w-inline-block"
								@click="dialog1 = true"
							>
								<div>Connect with us</div>
							</button>
							<v-dialog v-model="dialog1" width="700px" max-height="80vh">
								<v-card>
									<v-card-actions>
										<div
											color="green darken-1"
											@click="dialog1 = false"
											class="close-m"
											style="padding-left: 585px; padding-top: 10px"
										>
											Close
											<img
												src="https://amazon.care/images/60073a3d7d53c403143ec468_close---small.svg"
											/>
										</div>
									</v-card-actions>
									<v-card-text style="padding-left: 100px">
										<h3 style="color: #351f65">Amazon Care For Employers</h3>
										<h4
											style="color: #5e66d5; font-size: 18px; font-weight: 400"
										>
											Sign up below to get in touch
										</h4>
										<p style="padding-right: 90px; padding-top: 15px">
											Interested in offering Amazon Care as a benefit for your
											employees and their families? Fill out the form below and
											we'll be in touch.
										</p>
										<p>
											<label>First Name</label>
											<br />
											<input
												type="text"
												name="First_Name"
												id="First_Name"
												value=""
												size="30"
												maxlength="40"
												class="m-input"
											/>
										</p>
										<p>
											<label>Last Name</label>
											<br />
											<input
												type="text"
												name="Last_Name"
												id="Last_Name"
												value=""
												size="30"
												maxlength="40"
												class="m-input"
											/>
										</p>
										<p>
											<label> Job Title</label>
											<br />
											<input
												type="text"
												name="Job Title"
												id="Job Title"
												value=""
												size="30"
												maxlength="40"
												class="m-input"
											/>
										</p>
										<p>
											<label>Email</label>
											<br />
											<input
												type="text"
												name="Email"
												id="Email"
												value=""
												size="30"
												maxlength="40"
												class="m-input"
											/>
										</p>
										<p>
											<label>Phone</label>
											<br />
											<input
												type="text"
												name="Phone"
												id="Phone"
												value=""
												size="30"
												maxlength="40"
												class="m-input"
											/>
										</p>
										<p>
											<label>Organization Name</label>
											<br />
											<input
												type="text"
												name="Organization Name"
												id="Organization Name"
												value=""
												size="30"
												maxlength="40"
												class="m-input"
											/>
										</p>
										<p>
											<label>Organization Size</label>
											<br />
											<input
												type="text"
												name="Organization Size"
												id="Organization Size"
												value=""
												size="30"
												maxlength="40"
												class="m-input"
											/>
										</p>
										<p>
											<label>ZIP</label>
											<br />
											<input
												type="text"
												name="ZIP"
												id="ZIP"
												value=""
												size="30"
												maxlength="40"
												class="m-input"
											/>
										</p>
										<div
											data-sitekey="6LfVnCYTAAAAAB4x9xlkeTsV8CO6np5UMhNjRNNZ"
										>
											<div style="width: 304px; height: 78px">
												<div>
													<iframe
														title="reCAPTCHA"
														src="https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6LfVnCYTAAAAAB4x9xlkeTsV8CO6np5UMhNjRNNZ&amp;co=aHR0cHM6Ly9nby5hbS5hbWF6b24uY2FyZTo0NDM.&amp;hl=ko&amp;v=4rwLQsl5N_ccppoTAwwwMrEN&amp;size=normal&amp;cb=bj29wk1jf7tl"
														width="304"
														height="78"
														role="presentation"
														name="a-yicq5r8qu8ug"
														frameborder="0"
														scrolling="no"
														sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
													></iframe>
												</div>
												<textarea
													style="
														width: 250px;
														height: 40px;
														border: 1px solid rgb(193, 193, 193);
														margin: 10px 25px;
														padding: 0px;
														resize: none;
														display: none;
													"
												></textarea>
											</div>
											<iframe style="display: none"></iframe>
										</div>
									</v-card-text>

									<v-card-actions
										style="padding-left: 100px; padding-bottom: 90px"
									>
										<v-btn
											rounded
											color="#5e66d5"
											large
											@click="dialog = false"
											style="padding: 20px; color: white"
										>
											submit
										</v-btn>
									</v-card-actions>
								</v-card>
							</v-dialog>
						</div>
					</div>
				</div>
				<div class="care-card-shadow-container">
					<div class="care-card-shadow left"></div>
					<div class="care-card-shadow"></div>
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
			dialog1: false,
		};
	},
};
</script>

<style>
label {
	font-size: 12px;
}
p {
	margin-bottom: 20px;
	color: #2d1954;
	font-size: 14px;
	line-height: 28px;
}
h3 {
	margin-top: 40px;
	margin-bottom: 16px;
	font-size: 24px;
	line-height: 36px;
	font-weight: 700;
}
.m-input {
	border-style: solid;
	border-color: #ccc;
	border-radius: 4px;
	color: #351f65;
	font-size: 16px;
	line-height: 24px;
	font-weight: 400;
	width: 480px;
	height: 40px;
	margin-bottom: 24px;
	padding: 9px 15px 7px 15px;
}
.m-input-1 {
	border-style: solid;
	border-color: #ccc;
	border-radius: 4px;
	color: #351f65;
	font-size: 16px;
	line-height: 24px;
	font-weight: 400;
	width: 400px;
	height: 40px;
	margin-bottom: 24px;
	padding: 9px 15px 7px 15px;
}
.close-m {
	cursor: pointer;
	color: #5c4cdf;
}
.care-card-shadow .left {
	max-width: 420px;
	margin-left: 20px;
}
.care-card-shadow {
	position: static;
	left: 0;
	top: 0;
	right: 0;
	bottom: auto;
	z-index: 0;
	width: 45%;
	height: 481px;
	max-width: 420px;
	margin-right: 20px;
	background-color: rgba(53, 31, 101, 0.15);
	-webkit-filter: blur(32px);
	filter: blur(32px);
}
.care-card-shadow-container {
	position: relative;
	top: -430px;
	display: flex;
	max-width: 1024px;
	margin-right: auto;
	margin-left: auto;
	justify-content: space-between;
}
.care-text.no {
	padding-left: 0;
	background-image: none;
}
.button-2.ghost {
	padding-right: 20px;
	padding-left: 20px;
	border-style: solid;
	border-width: 1px;
	border-color: #5c4cdf;
	background-color: transparent;
	color: #5c4cdf;
}
button-2.get-care {
	padding: 12px 20px;
	border-bottom-style: none;
	background-color: #5c4cdf;
}
.button-2 {
	display: flex;
	margin-right: 16px;
	margin-bottom: 16px;
	padding: 12px 16px;
	align-items: center;
	border-radius: 500px;
	background-color: #5c4cdf;
	transition: all 0.2s ease;
	font-size: 16px;
	line-height: 16px;
	text-decoration: none;
}
.p--care-team.small {
	padding-right: 8px;
	font-size: 13px;
}
.p--care-team {
	font-size: 14px;
}
.w-inline-block {
	max-width: 100%;
	display: inline-block;
}
.get-care-link-wrapper {
	display: flex;
	margin-top: 10px;
}
.cta-card-buttons.for-employees {
	flex-direction: column;
}
.cta-card-buttons {
	display: flex;
	margin-top: 24px;
	flex-wrap: wrap;
	align-items: flex-start;
}
.get-care-bg--par-2 {
	height: 100%;
}
.get-care-link {
	border-bottom-style: none;
	font-size: 13px;
	text-decoration: underline;
}
.w-inline-block {
	max-width: 100%;
	display: inline-block;
}
.img-fit-cover {
	position: absolute;
	width: 100%;
	height: 100%;
	object-fit: cover;
}
.img {
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
}
.get-care-bg__darken-2 {
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	overflow: hidden;
	width: 100%;
	height: 100%;
	background-color: rgba(53, 31, 101, 0.85);
}
.care-text {
	margin-top: 15px;
	margin-bottom: 15px;
	padding-left: 40px;
	background-image: url(https://amazon.care/images/60073a3d7d53c4cc803ec4d1_Check_Reversed_Fill_RGB.svg);
	background-position: 0 0;
	background-size: auto;
	background-repeat: no-repeat;
	text-align: left;
}
.care-header {
	margin-top: 1px;
	margin-bottom: 20px;
	font-size: 28px;
	line-height: 36px;
	text-align: left;
}
.care-card {
	position: relative;
	z-index: 10;
	display: flex;
	width: 50%;
	margin-right: 3%;
	margin-left: 3%;
	padding: 7vh 5% 5vh;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	border-radius: 8px;
	background-color: #fff;
	text-align: center;
}
.care-card-container {
	display: flex;
	max-width: 1200px;
	margin-right: auto;
	margin-left: auto;
	justify-content: center;
}
.c-white {
	max-width: 50%;
	margin-right: auto;
	margin-bottom: 88px;
	margin-left: auto;
	text-align: center;
	color: #fff;
}
.care-container {
	position: absolute;
	left: 0;
	top: 140px;
	right: 0;
	bottom: 0;
	display: block;
}
.care-wrapper {
	position: absolute;
	left: 0;
	top: 0;
	z-index: 0;
	overflow: visible;
	width: 100%;
	height: 100%;
}
.amazon-care {
	position: relative;
	overflow: visible;
	height: 570px;
	padding: 120px 80px 115px;
	background-color: #ebeefc;
}

@media screen and (max-width: 991px) {
	.care-card-shadow-container {
		display: none;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
	.care-card {
		width: 100%;
		max-width: 480px;
		margin-bottom: 8vh;
	}
	.care-card-container {
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
	.c-white {
		margin-bottom: 72px;
	}
	.amazon-care {
		height: auto;
		padding-top: 88px;
		padding-bottom: 64px;
	}
	.care-wrapper {
		position: static;
	}
	.care-container {
		position: relative;
		top: 0;
	}
	.img-fit-cover.get-amazon-care {
		display: none;
	}
	.get-care-bg__darken-2 {
		background-color: #351f65;
	}

	@media screen and (max-width: 767px) {
		.amazon-care {
			padding: 100px 6% 72px;
		}
	}
}
</style>
