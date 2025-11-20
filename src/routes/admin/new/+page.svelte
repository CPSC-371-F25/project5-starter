<script lang="ts">
    import type { PageProps } from "../../$types";
    let { data, form }: PageProps = $props();

</script>


<h1>Create New Menu Item</h1>

<form method="POST">
    <label>
        Name:
        <input type="text" name="name" id="">
    </label>
    <label>
        Price: $
        <input type="number" name="price" id="">
    </label>

    <button type="submit">Add new menu item</button>
</form>

<!-- https://svelte.dev/docs/kit/form-actions -->
{#if form}
	<!-- this message is ephemeral; it exists because the page was rendered in
	       response to a form submission. it will vanish if the user reloads -->
    <p>Created new menu item: {form.name} ({form.price})</p>
{/if}
