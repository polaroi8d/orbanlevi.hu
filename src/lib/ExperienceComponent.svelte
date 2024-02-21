<script lang="ts">
	export let logo: string;
	export let position: string;
	export let companyName: string;
	export let companyUrl = '';
	export let description: string;
	export let skills = '';
	export let dateIntervall: string;
</script>

<div class="my-8">
	<div class="flex my-2 justify-between text-lg">
		<div class="flex">
			<div class="w-16">
				<img src="companies/{logo}" alt={companyName} class="object-center" />
			</div>
			<div class="ml-4 my-auto">
				{position} @ <a href={companyUrl} target="_blank" class="font-bold">{companyName}</a>
				<div class="text-mg font-thin">{dateIntervall}</div>
			</div>
		</div>
	</div>
	<div class="pt-4">
		{description}
	</div>
	{#if skills}
		<div class="my-2">
			<span class="font-semibold text-gray-400">Skills:</span>
			{skills}
		</div>
	{/if}
</div>

<style>
</style>
