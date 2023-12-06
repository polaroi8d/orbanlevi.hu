<script lang="ts">
	export let projectName: string;
	export let date: string;
	export let description: string;
	export let skills: string;
</script>

<div class="bg-sky-950/30 rounded-sm flex flex-col w-full lg:w-5/12 p-6">
	<div class="flex flex-row justify-between">
		<div><h3 class="text-xl font-semibold">{projectName}</h3></div>
		<div class="text-mg font-thin relative right-4">{date}</div>
	</div>
	<p class="my-4 text-gray-400">{description}</p>
	<div>
		<span class="font-semibold text-gray-400">Skills:</span>
		{skills}
	</div>
    <slot/>
</div>

<style>
</style>
