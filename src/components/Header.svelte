<script>
  import { categories, original_data, filter } from "../data/store.js";
  function onClickLogo() {
    filter.set("");
    categories.set($original_data);
  }
</script>

<style>
  .header {
    background: #222;
  }
  .header-in {
    display: flex;
    height: 60px;
    justify-content: space-between;
    align-items: center;
  }
  .header h1 {
    font-size: 1.4em;
    padding: 0;
    margin: 0 0 0 10px;
    cursor: pointer;
  }
  .header .github {
    color: #eee;
    font-size: 0.9em;
    margin-right: 10px;
    text-decoration: none;
  }
</style>

<div class="header">
  <div class="container header-in">
    <h1 on:click={onClickLogo}>netflix categories</h1>
    <a
      class="github"
      href="https://github.com/orcuntuna/netflix-categories"
      title="GitHub Repository"
      target="_blank">
      View on GitHub
    </a>
  </div>
</div>
