<script>
  export let data;
</script>

<style>
  .custom-card {
    background-color: #222;
    padding: 10px 10px;
    border-radius: 3px;
    flex: auto;
    min-width: 150px;
    margin: 0 8px 8px 0;
    width: 300px;
  }
  a {
    color: #eee;
    display: block;
    text-decoration: none;
    border-radius: 3px;
    padding: 4px 10px;
  }
  a:hover {
    background-color: #262626;
    transition: 0.3s;
  }
  a small {
    color: #aaa;
    margin-left: auto;
  }
  .header {
    margin-bottom: 10px;
  }
  .header a {
    font-size: 1.1em;
    font-weight: 500;
  }
</style>

<div class="custom-card">
  <div class="header">
    <a href="https://netflix.com/browse/genre/{data.code}" target="_blank">
      {data.name}
      <small>({data.code})</small>
    </a>
  </div>
  <div class="body">
    {#each data.other as item}
      <a href="https://netflix.com/browse/genre/{item.code}" target="_blank">
        {item.name}
        <small>({item.code})</small>
      </a>
    {/each}
  </div>
</div>
