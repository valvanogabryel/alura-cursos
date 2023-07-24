import nookies from "nookies";
const AGE = 3;

export const tokenService = {
  save(accessToken, ctx = null) {
    // globalThis?.localStorage?.setItem("token", accessToken);
    // globalThis?.sessionStorage?.setItem("token", accessToken);
    nookies.set(ctx, "token", accessToken, {
      maxAge: AGE,
      path: "/",
    });
  },
  get(ctx = null) {
    const cookies = nookies.get(ctx);

    return cookies.token || "";
    // return globalThis?.localStorage?.getItem("token");
    // return globalThis?.sessionStorage.getItem("token");
  },

  remove(ctx = null) {
    // globalThis?.localStorage?.removeItem("token");
    // globalThis?.sessionStorage?.removeItem("token");

    nookies.destroy(ctx, "token");
  },
};
