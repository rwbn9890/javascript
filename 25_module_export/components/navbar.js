 function navbar() {
  return `

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="./../index.html">home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="./../men.html">men</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./../women.html">women</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./../jwelery.html">jwelery</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    `;
}

export default navbar;
