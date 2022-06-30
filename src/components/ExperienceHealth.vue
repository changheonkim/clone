<template>
	<div class="sqaure-block" id="next">
		<div class="health-care">
			<h2 class="health-title">
				Experience a new kind<br />
				of healthcare<br />
			</h2>
			<p class="para">
				Amazon Care is healthcare built around you, your life, and your
				schedule.
			</p>
		</div>
		<div class="photo-card-grid-home">
			<div class="photo-card">
				<img class="photo-card-image" src="../assets/images/1.jpg" />
				<div class="card-content">
					<h4>Clinicians on your schedule</h4>
					<p class="des">
						Connect in seconds, day or night, on weekends, and holidays.
					</p>
				</div>
			</div>
			<div class="photo-card">
				<img class="photo-card-image" src="../assets/images/2.jpg" />
				<div class="card-content">
					<h4>Care that comes to you*</h4>
					<p class="des">
						At-home follow-up care for labs, tests, and treatment.
					</p>
				</div>
			</div>
			<div class="photo-card">
				<img class="photo-card-image" src="../assets/images/3.jpeg" />
				<div class="card-content">
					<h4>Get a COVID-19 test with Care</h4>
					<p class="des">
						Amazon Care is offering convenient testing options for enrolled
						members.
					</p>
				</div>
			</div>
			<div class="photo-card">
				<img class="photo-card-image" src="../assets/images/4.jpg" />
				<div class="card-content">
					<h4>Dedicated Care Teams</h4>
					<p class="des">
						Schedule appointments with your team of doctors, nurse
						practitioners, and registered nurses.
					</p>
				</div>
			</div>
			<div class="rating">
				<p class="rating-text">
					<span class="rating-sub">*</span> In select locations
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style>
.rating {
	display: block;
	width: 100%;
	padding-top: 8px;
	border-top: 1px solid #d7dbf9;
	grid-column-start: span 2;
}
.rating-sub {
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
.sqaure-block {
	display: flex;
	padding-top: 150px;
	padding-bottom: 120px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-right: 6%;
	padding-bottom: 120px;
	padding-left: 6%;
}

.health-care {
	max-width: 360px;
	margin-bottom: 100px;
	text-align: center;
}
.photo-card-grid-home {
	display: grid;
	margin-bottom: 40px;
	justify-content: space-between;
	align-items: flex-start;
	grid-auto-columns: 1fr;
	grid-column-gap: 100px;
	grid-row-gap: 72px;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto auto;
}
.photo-card-image {
	width: 100%;
	max-height: 297px;
	object-fit: cover;
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	border: 0;
}
.photo-card {
	position: relative;
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: center;
}
.card-content {
	position: relative;
	top: -28px;
	width: 90%;
	padding-top: 20px;
	padding-right: 24px;
	padding-left: 24px;
	background-color: #fff;
}
.para {
	margin-bottom: 0;
	color: #2d1954;
	font-size: 16px;
	line-height: 24px;
	text-align: center;
	max-width: 340px;
	margin-right: auto;
	margin-left: auto;
}
p {
	display: block;
	margin-block-start: 1em;
	margin-block-end: 1em;
	margin-inline-start: 0px;
	margin-inline-end: 0px;
}
@media screen and (max-width: 991px) {
	.photo-card-image {
		max-height: 204px;
	}
	.health-care {
		margin-bottom: 60px;
	}
	.sqaure-block {
		padding-right: 6%;
		padding-bottom: 120px;
		padding-left: 6%;
	}
	.photo-card-grid-home {
		margin-top: 32px;
		margin-bottom: 40px;
		grid-column-gap: 9vw;
		grid-row-gap: 56px;
	}
}
@media screen and (max-width: 767px) {
	.para {
		font-size: 18px;
		line-height: 24px;
	}
	.photo-card-image {
		max-height: 300px;
	}
	.health-title {
		font-size: 32px;
		line-height: 40px;
		margin-bottom: 24px;
	}
	.photo-card {
		width: auto;
		margin-bottom: 0;
	}
	.photo-card-grid-home {
		margin-top: 0;
		margin-bottom: 0;
		flex-direction: column;
		grid-template-columns: 1fr;
		display: flex;
		grid-auto-flow: row;
		grid-template-rows: auto auto 1fr auto;
	}
	.sqaure-block {
		padding-top: 120px;
		flex-wrap: nowrap;
	}
}
</style>
