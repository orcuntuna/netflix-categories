<script>
  import Card from "./Card.svelte";
  import { derived } from "svelte/store";
  import { filter, categories } from "../data/store.js";
  const filter_data = derived($filter, ($filter, set) => {
    console.log($filter);
  });
</script>

<style>
  .list {
    margin-top: 10px;
    column-count: 3;
    column-gap: 0;
  }
  .grid-item {
    break-inside: avoid;
    width: 100%;
  }
  @media only screen and (max-width: 1000px) {
    .list {
      column-count: 2;
    }
  }
  @media only screen and (max-width: 600px) {
    .list {
      column-count: 1;
    }
  }
</style>

<div class="list">
  {#each $categories as category}
    <div class="grid-item">
      <Card data={category} />
    </div>
  {/each}
</div>
