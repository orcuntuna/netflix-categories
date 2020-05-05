<script>
  import { onMount } from "svelte";
  import Masonry from "masonry-layout";
  import Card from "./Card.svelte";
  import data from "../stores/categories.js";
  onMount(() => {
    var msnry = new Masonry(".list");
  });
</script>

<style>
  .list {
    margin-top: 10px;
  }
  .grid-item {
    width: 33.3%;
  }
  @media only screen and (max-width: 600px) {
    .grid-item{
      width: 100%
    }
  }
</style>

<div class="list">
  {#each data as category}
    <div class="grid-item">
      <Card data={category} />
    </div>
  {/each}
</div>
