<script>
	import Logs from '../components/Logs.svelte';
	import NameDisplay from '../components/NameDisplay.svelte';
	import Footer from '../components/Footer.svelte';
	import Balance from '../components/Balance.svelte';
</script>

<div class="h-screen w-screen flex bg-stone-950 overflow-hidden">
	<div class="flex flex-col w-full items-center">
		<NameDisplay name="John Doe" />
		<Logs />
	</div>
	<Footer />
	<Balance />
</div>
