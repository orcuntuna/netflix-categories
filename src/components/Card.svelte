<script>
  export let data;
</script>

<style>
  .custom-card {
    background-color: #222;
    padding: 10px 10px;
    border-radius: 4px;
    margin: 0 7px 14px 7px;
  }
  .custom-card a {
    color: #ddd;
    display: block;
    text-decoration: none;
    border-radius: 3px;
    padding: 4px 10px;
  }
  .custom-card a:hover {
    background-color: #262626;
    transition: 0.2s;
  }
  .custom-card a small {
    color: #aaa;
    margin-left: auto;
  }
  .custom-card .header {
    margin-bottom: 3px;
  }
  .custom-card .header a {
    font-size: 1.3em;
    font-weight: 500;
    color: #eee;
  }
</style>

<div class="custom-card" style="background: {data.background}">
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
