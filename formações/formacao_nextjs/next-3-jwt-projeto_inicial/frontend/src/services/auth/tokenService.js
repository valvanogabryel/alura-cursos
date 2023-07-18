export const tokenService = {
  save(accessToken) {
    localStorage.setItem("token", accessToken);
    // sessionStorage.setItem("token", accessToken);
  },
  get() {
    localStorage.getItem("token");
    // sessionStorage.getItem("token");
  },

  remove() {
    localStorage.removeItem("token");
    // sessionStorage.removeItem("token");
  },
};
