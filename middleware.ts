import { withAuth } from "next-auth/middleware";

//Protects /users route
export default withAuth({
  pages: {
    signIn: "/",
  },
});

export const config = {
  matcher: [
    // Even though we will not have any nested routes inside /users this is BEST PRACTICE
    "/users/:path*",
    "/conversations/:path*",
  ],
};
