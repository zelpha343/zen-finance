<script>
	import Logs from '../components/Logs.svelte';
	import NameDisplay from '../components/NameDisplay.svelte';
	import Footer from '../components/Footer.svelte';
	import Balance from '../components/Balance.svelte';
	import Logout from '../components/Logout.svelte';

	let width;
</script>

<svelte:window bind:innerWidth={width} />
{#if width < 640}
	<h1 class="text-8xl">Not supported on this device. Open this on a laptop or a desktop</h1>
{:else}
	<div class="h-screen w-screen flex bg-stone-950 overflow-hidden">
		<div class="flex flex-col w-full items-center">
			<NameDisplay name="John Doe" />
			<Logs />
			<button
				class="bg-gradient-to-r from-fuchsia-600 to-pink-500 p-3 rounded-sm text-white hover:scale-105 shadow-2xl mt-6"
				>Add Log?</button
			>
		</div>
		<Footer />
		<Balance />
		<Logout />
	</div>
{/if}
