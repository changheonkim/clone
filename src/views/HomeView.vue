<template>
	<div>
		<MainImage />
		<ExperienceHealth />
		<SlideImage />
		<CareTeam />
		<CareAmazon />
		<HealthStory />
		<GetStarted />
		<FooterSection />
	</div>
</template>

<script>
// @ is an alias to /src
import MainImage from '@/components/MainImage.vue';
import ExperienceHealth from '@/components/ExperienceHealth.vue';
import SlideImage from '@/components/SlideImage.vue';
import CareAmazon from '@/components/CareAmazon.vue';
import CareTeam from '@/components/CareTeam.vue';
import FooterSection from '@/components/FooterSection.vue';
import HealthStory from '@/components/HealthStory.vue';
import GetStarted from '@/components/GetStarted.vue';
export default {
	name: 'HomeView',
	components: {
		MainImage,
		ExperienceHealth,
		SlideImage,
		CareTeam,
		CareAmazon,
		HealthStory,
		GetStarted,
		FooterSection,
	},
};
</script>
