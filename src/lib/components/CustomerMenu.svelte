<script lang="ts">
    let { menuItems } = $props();
</script>


<ul>
    {#each menuItems as item}
        <li>${item.price.toFixed(2)} - {item.name}</li>
    {/each}
</ul>