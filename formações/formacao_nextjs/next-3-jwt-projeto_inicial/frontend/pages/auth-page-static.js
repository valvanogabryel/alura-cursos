import { withSessionHOC } from "../src/services/auth/session";

function AuthPageStatic(props) {
  return (
    <div>
      <h1>Auth Page Static</h1>
      <ul>
        <li>
          <a href="/logout">Logout</a>
        </li>
        <li>
          <a href="/auth-page-ssr">Auth Page Server Side Rendering</a>
        </li>
      </ul>

      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
}

export default withSessionHOC(AuthPageStatic);
