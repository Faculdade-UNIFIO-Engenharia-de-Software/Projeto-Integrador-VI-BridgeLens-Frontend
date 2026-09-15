import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background de Malha Simples */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Conteúdo Central */}
      <div className="relative z-10 text-center space-y-6 max-w-md">
        {/* Badge */}
        <div className="  inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-400 font-mono">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          HTTP 404 • NOT FOUND ERROR
        </div>

        {/* Título com Gradiente */}
        <h1 className="text-8xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
          404
        </h1>

        {/* Descrição */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-200">
            Rota não encontrada
          </h2>
          <p className="text-sm text-slate-400">
            O Recurso procurado não foi encontrado...
          </p>
        </div>

        {/* Botão de Retorno */}
        <div className="pt-2">
          <Link
            href="/"
            className="inline-block px-8 py-1 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors shadow-lg shadow-blue-500/20"
          >
            Início
          </Link>
        </div>
      </div>
    </main>
  );
}

{
  /*<div className="w-screen h-screen flex flex-col justify-center items-center bg-blue-50">
  <h1 className="text-9xl bg-gradient-to-r from-indigo-700 to-indigo-400 bg-clip-text text-transparent font-bold">
    404
  </h1>
  <p className="font-medium text-indigo-400 text-2xl">
    Página não encontrada!
  </p>
</div>*/
}
