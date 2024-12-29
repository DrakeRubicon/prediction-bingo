<script lang="ts">
	import '../app.postcss';
	import { page } from '$app/stores';

	$: user = $page.data.user;
</script>

<div class="min-h-screen bg-background font-sans antialiased">
	<div class="relative flex min-h-screen flex-col">
		<div class="flex-1">
			<slot />
		</div>
	</div>
</div>
