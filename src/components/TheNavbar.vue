<template>
  <header class="navbar">
    <h3>Freelance</h3>

    <ul class="navbar-menu">
      <li>
        <router-link to="/">Все задачи</router-link>
      </li>
      <li>
        <router-link to="/new">Создать</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
}
</script>

<style scoped>

.navbar {
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  background-color: #fff;
  box-sizing: border-box;
  border-bottom: 1px solid #eaecef;
}

.navbar-menu {
  list-style: none;
  display: flex;
}

.navbar-menu li {
  margin-right: 2rem;
}

.navbar-menu li a {
  color: #2c3e50;
  text-decoration: none;
}

.navbar-menu li a:hover, .navbar-menu li a.active {
  border-bottom: 2px solid #3eaf7c;
}

</style>