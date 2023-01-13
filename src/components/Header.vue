<template>
  <header>
    <div class="container">
      <h1>Hästdatabas</h1>
      <nav>
        <ul>
          <li><RouterLink to="/">Start</RouterLink></li>
          <li><RouterLink to="/horses">Hästar</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  padding: 0.2em;
  background-color: #4a0500;
  color: #ffffff;
}

.container {
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
}

ul {
  display: flex;
  list-style-type: none;
  font-size: 1.1em;
}

li {
  padding: 0 1em;
}

a {
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
}

a:hover {
  text-decoration: underline;
}

@media screen and (max-width: 1000px) {
  .container {
    width: 95%;
  }
}
</style>