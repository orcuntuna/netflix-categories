<script>
  import Card from "./Card.svelte";
  import data from '../stores/categories.js'
</script>

<style>
  .list {
    margin-top: 10px;
    display: flex;
    flex-flow: row wrap;
    margin-left: 2px;
    width: 100%;
  }
</style>

<div class="list">
  {#each data as category}
    <Card data={category} />
  {/each}
</div>
