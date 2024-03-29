import { withSession } from "../src/services/auth/session";

export default function AuthPageSSR(props) {
  return (
    <div>
      <h1>Auth Page Server Side Rendering</h1>
      <ul>
        <li>
          <a href="/logout">Logout</a>
        </li>
        <li>
          <a href="/auth-page-static">Auth Page Static</a>
        </li>
      </ul>

      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
}

//! Decorator pattern
export const getServerSideProps = withSession(async ({ req }) => {
  return {
    props: {
      session: req.session,
    },
  };
});

// export async function getServerSideProps(ctx) {
//   try {
//     const session = await authService.getSession(ctx);

//     return {
//       props: {
//         session,
//       },
//     };
//   } catch (error) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: "/?error=401",
//       },
//     };
//   }
// }
