<script>
	import Logs from '../components/Logs.svelte';
	import NameDisplay from '../components/NameDisplay.svelte';
	import Footer from '../components/Footer.svelte';
	import Balance from '../components/Balance.svelte';
	import Logout from '../components/Logout.svelte';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import Login from '../components/Login.svelte';
	let width;

	let selectMode;
	let selected = [];

	let loggedIn = false;

	onMount(() => {
		selectMode = false;
	});
</script>

<svelte:window bind:innerWidth={width} />
{#if width < 780}
	<h1 class="text-8xl">Not supported on this device. Open this on a laptop or a desktop</h1>
{:else}
	<div class="h-screen w-screen flex bg-stone-950 overflow-hidden">
		{#if loggedIn}
			<div class="flex flex-col w-full items-center">
				<NameDisplay name="John Doe" />
				<Logs {selectMode} />
				<div class="flex mt-6 space-x-6">
					<button
						class="p-3 text-white border-2 hover:scale-105"
						on:click={() => {
							selectMode = !selectMode;
						}}>Select Mode</button
					>
					<button
						class="bg-gradient-to-r from-fuchsia-600 to-pink-500 p-3 rounded-sm text-white hover:scale-105 shadow-2xl"
						>Add Log?</button
					>
				</div>
			</div>
			<Footer />
			<Balance />
			<Logout />
		{:else}
			<Login />
		{/if}
	</div>
{/if}
