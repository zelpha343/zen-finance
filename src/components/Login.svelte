<script>
	let LogIn = true;
</script>

<div class="flex flex-col space-y-3 h-screen w-screen justify-center items-center">
	{#if LogIn}
		<span
			class="text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-blue-500 text-5xl my-3"
			>Login</span
		>
		<input
			class="p-2 bg-slate-950 text-purple-400 shadow-2xl border-2 border-purple-400 text-2xl"
			type="text"
			placeholder="username"
		/>
		<input
			class="p-2 bg-slate-950 text-purple-400 shadow-2xl border-2 border-purple-400 text-2xl"
			type="password"
			placeholder="password"
		/>
	{:else}
		<input
			class="p-2 bg-slate-950 text-purple-400 shadow-2xl border-2 border-purple-400 text-2xl"
			type="text"
			placeholder="First Name"
		/>
		<input
			class="p-2 bg-slate-950 text-purple-400 shadow-2xl border-2 border-purple-400 text-2xl"
			type="text"
			placeholder="Last Name"
		/>
		<input
			class="p-2 bg-slate-950 text-purple-400 shadow-2xl border-2 border-purple-400 text-2xl"
			type="text"
			placeholder="Type a username"
		/>
		<input
			class="p-2 bg-slate-950 text-purple-400 shadow-2xl border-2 border-purple-400 text-2xl"
			type="password"
			placeholder="password"
		/>
	{/if}
</div>
