Alpine.store('auth', {
  isLogged: false,
  user: null,

  login(user) {
    this.isLogged = true;
    this.user = user;
  },

  logout() {
    this.isLogged = false;
    this.user = null;
  }
});
