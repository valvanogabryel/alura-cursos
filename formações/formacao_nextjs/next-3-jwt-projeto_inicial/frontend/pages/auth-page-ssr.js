import { tokenService } from "../src/services/auth/tokenService";
import nookies from "nookies";

export default function AuthPageSSR(props) {
  return (
    <div>
      <h1>Auth Page Server Side Rendering</h1>

      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  console.log(tokenService.get());
  const cookies = nookies.get(ctx);
  console.log("cookies", cookies);
  return {
    props: {
      token: tokenService.get(ctx),
    },
  };
}
