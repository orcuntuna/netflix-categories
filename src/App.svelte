<script>
  import "bootstrap/dist/css/bootstrap.min.css";
  import Header from "./components/Header.svelte";
  import Filter from "./components/Filter.svelte";
  import List from "./components/List.svelte";
</script>

<main>
  <Header />
  <div class="container">
    <Filter />
    <List />
  </div>
</main>
