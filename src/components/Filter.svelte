<script>
  import { filter, categories } from "../data/store.js";
  import categories_data from "../data/categories.js";
  const updateResults = async e => {
    e.preventDefault();
    if ($filter) {
      let filtered_items = [];
      for (let i = 0; i < categories_data.length; i++) {
        let item = {
          name: categories_data[i].name,
          code: categories_data[i].code,
          other: []
        };
        for (let j = 0; j < categories_data[i].other.length; j++) {
          if (categories_data[i].other[j].name.toLowerCase().includes($filter.toLowerCase())) {
            await item.other.push(categories_data[i].other[j]);
          }
        }
        if (item.other.length > 0) {
          await filtered_items.push(item);
        }
      }
      categories.set(filtered_items);
    } else {
      categories.set(categories_data);
    }
  };
</script>

<style>
  .filter {
    padding: 0 7px;
    margin-top: 30px;
    position: relative;
  }
  input {
    color: #ddd;
    background: #262626;
    width: 100%;
    border: none;
    border-radius: 5px;
    height: 50px;
    outline: 0;
    padding: 0 20px;
    margin-bottom: 15px;
  }
  input::placeholder {
    color: #a1a1a1;
  }
  .filter button {
    position: absolute;
    right: 20px;
    top: 12px;
    background: transparent;
    border: none;
    padding: 0;
    margin: 0;
    outline: 0;
  }
</style>

<form class="filter" on:submit={updateResults}>
  <button type="submit">
    <img class="icon" src="img/search.svg" alt="search" />
  </button>
  <input
    type="text"
    placeholder="Search and filter categories.."
    bind:value={$filter} />
</form>
