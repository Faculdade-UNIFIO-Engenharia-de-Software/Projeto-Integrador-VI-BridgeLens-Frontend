import ButtonLink from "@/components/ButtonLink";
import LogoLayout from "../components/Logo";
import Input from "@/components/Input";

export default function Home() {
  return (
    <div className="min-h-screen bg-grid">

      <div className="w-full h-screen flex flex-col items-center justify-center gap-12 text-black">
        <div>
          <LogoLayout />
        </div>

        <div id="signin-box" className="border  border-gray-400 bg-white gap-8 px-8 py-8 rounded-md w-[460px]" >
          <div className="flex flex-col items-center mb-8" id="title">
            <h1 className="text-2xl font-bold mb">Acesse sua Conta</h1>
            <p className="text-[13px] text- font-inter font-normal text-[#94A3B8]">
              Entre com suas credenciais ou utilize Single Sign-On Corporativo
            </p>
          </div>

          <div id="buttons sso" className="flex justify-evenly mb-8" >
            <ButtonLink icon={<img src="/icons/icon-google.png" className="h-6 w-6"/>}>Google SSO</ButtonLink>
            <ButtonLink icon={<img src="/icons/icon-github.png" className="h-6 w-6" />}>GitHub SSO</ButtonLink>
          </div>

          <div className="flex items-center gap-4 my-6 mb-8">
            <div className="h-px flex-1 bg-slate-300" />
            <span className="text-xs uppercase tracking-wider font-jetbrains text-slate-500">OU CONTINUE CO E-MAIL CORPORATIVO</span>
          </div>


          <div id="inputs">
            <Input/>
          </div>
          <div id="signup-box"></div>
        </div>
      </div>
    </div>
  );
}
