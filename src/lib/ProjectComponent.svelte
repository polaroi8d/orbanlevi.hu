<script lang="ts">
	export let projectName: string;
	export let date: string;
	export let description: string;
	export let skills: string;
</script>

<div class="bg-sky-950/30 rounded-lg flex flex-col w-full lg:w-5/12 py-4 px-8">
	<div class="flex flex-row justify-between">
		<div><h3 class="text-xl font-semibold">{projectName}</h3></div>
	</div>
	<div class="text-mg font-thin">{date}</div>
	<p class="my-2">{description}</p>
	<div>
		<span class="font-semibold text-gray-400">Skills:</span>
		{skills}
	</div>
    <slot/>
</div>

<style>
</style>
