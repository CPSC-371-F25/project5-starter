<script lang="ts">
    import CustomerMenu from "$lib/components/CustomerMenu.svelte";
    import { restaurantName } from "$lib/consts";
    import type { PageProps } from "./$types";

    let { data }: PageProps = $props();
</script>


<h1>{restaurantName} Menu</h1>

<CustomerMenu menuItems={data.menuItems} />