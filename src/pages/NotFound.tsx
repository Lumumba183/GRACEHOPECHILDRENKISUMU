import { Link } from "react-router";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-cream">
      <div className="container-site py-32 text-center">
        <p className="font-display text-8xl font-semibold text-sun-500">404</p>
        <h1 className="mt-4 font-display text-3xl font-semibold text-leaf-900">This page wandered off</h1>
        <p className="mx-auto mt-3 max-w-md text-ink/60">
          The page you are looking for doesn't exist — but every child here has been found. Let's get you home too.
        </p>
        <Link to="/" className="btn-leaf mt-8">
          <Home className="h-5 w-5" /> Back to home
        </Link>
      </div>
    </section>
  );
}
