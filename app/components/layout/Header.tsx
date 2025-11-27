

export default function Header() {
  return (
     <header className="app-header w-full bg-gray-900 text-white shadow-md fixed top-0 z-10">
      <nav
        className="nav-container w-full relative flex items-center py-6 px-6"
        aria-label="Menu principal"
      >
        <h1
          className="
            app-title 
            text-xl font-semibold tracking-wide
            absolute left-1/2 -translate-x-1/2

          "
        >
          Gerenciador de Produtos
        </h1>
      </nav>
    </header>

 
  );
}
