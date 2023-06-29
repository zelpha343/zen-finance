<script>
	import Log from './Log.svelte';
	export let selectMode;
</script>

<div class="flex flex-col w-[100%] h-[60%] overflow-y-auto items-center">
	<Log {selectMode} />
	<Log {selectMode} />
	<Log {selectMode} />
	<Log {selectMode} />
	<Log {selectMode} />
</div>
