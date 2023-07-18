import nookies from "nookies";
const ONE_YEAR = 60 * 60 * 24 * 365;

export const tokenService = {
  save(accessToken, ctx = null) {
    globalThis?.locaxlStorage?.setItem("token", accessToken);
    // globalThis?.sessionStorage?.setItem("token", accessToken);
    nookies.set(ctx, "token", accessToken, {
      maxAge: ONE_YEAR,
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
    globalThis?.localStorage?.removeItem("token");
    // globalThis?.sessionStorage?.removeItem("token");

    nookies.destroy(ctx, "token");
  },
};
