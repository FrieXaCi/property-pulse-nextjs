import withAuth from "next-auth/middleware";

export function proxy(req, event) {
  return withAuth(req, event);
}

export const config = {
  matcher: ["/properties/add", "/profile", "/properties/saved", "/messages"],
};
