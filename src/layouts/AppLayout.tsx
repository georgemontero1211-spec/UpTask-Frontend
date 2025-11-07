import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "@/components/Logo";
import NavMenu from "@/components/NavMenu";
import { Link, Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
      <header className="bg-gray-800 p-5">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="w-64">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <NavMenu />
        </div>
      </header>
      <section className="max-w-screen-2xl mx-auto mt-10 p-5  ">
        <Outlet />
      </section>
      <footer className="py-5">
        <p className="text-center">
          Todos los derechos reservados {new Date().getFullYear()}
        </p>
      </footer>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        draggable={false}
      />
    </>
  );
}
