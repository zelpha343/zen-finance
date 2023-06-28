<script>
	export let logDescription = 'Copilot Charge';
	export let merchant = 'Github';
	export let amount = '10';
	export let add = false;
	export let dayName = 'Wednesday';
	export let day = 28;
	export let month = 'June';
	export let year = 2023;
</script>

<div
	class="flex w-[80%] space-x-2 shadow-2xl bg-slate-950 h-min p-3 rounded-sm justify-around hover:scale-105 hover:border-pink-400 hover:border-2 select-none"
>
	<span class="overflow-hidden whitespace-nowrap overflow-ellipsis truncate w-[45%] text-pink-600"
		>{logDescription}</span
	>
	<span
		class="overflow-hidden whitespace-nowrap overflow-ellipsis truncate font-bold w-[15%] text-purple-400"
		>To: {merchant}</span
	>
	{#if add}
		<span class="text-green-500 font-bold w-[10%]">₹{amount}</span>
	{:else}
		<span class="text-red-500 w-[10%]">₹{amount}</span>
	{/if}
	<span class="text-gray-600 w-[15%]">{dayName}</span>
	<span class="text-gray-600 w-[15%]">{day} {month} {year}</span>
</div>
