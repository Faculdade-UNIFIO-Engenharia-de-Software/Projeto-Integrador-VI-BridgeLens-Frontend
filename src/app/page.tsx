import LogoLayout from "../components/logos/Logo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import EnfLogo from "@/components/logos/EnfLogo";
import { GoogleBrand } from "@/components/externalBrand/GoogleBrand";
import { GitHubBrand } from "@/components/externalBrand/GitHubBrand";
import LoginForm from "@/components/forms/loginForms/LoginForms";


export default function Home() {
  return (
    <div className="min-h-screen bg-grid">
      <div className="w-full h-screen flex flex-col items-center justify-center gap-8 text-black">
        <div>
          <LogoLayout />
        </div>

        <div
          id="signin-box"
          className="border  border-gray-400 bg-white gap-8 px-8 py-8 rounded-md w-[460px] h-[500px]"
        >
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="login"> Entrar</TabsTrigger>
              <TabsTrigger value="register"> Cadastrar </TabsTrigger>
            </TabsList>
            <TabsContent value="login">

              
              <div id="title" className="mt-3 mb-2 flex flex-col items-center gap-4">
                <div className="flex flex-col items-center gap-1">
                  <h1 className="mb text-2xl font-bold"> Acesse sua Conta </h1>
                  <p className="font-inter text-[14px] font-normal text-[#94A3B8]">
                    Acesse sua conta da <EnfLogo /> e conheça seu negócios.
                  </p> 
                </div>
                <div className="flex w-full items-center justify-center gap-6 overflow-hidden p-1.5">
                  <Button variant="outline" className="flex-1 border border-gray-90 text-gray hover:bg-gray-100" >
                    <GoogleBrand /> Google SSO 
                  </Button> 
                  <Button variant="outline" className="flex-1 border border-gray-90 text-gray hover:bg-gray-100" >
                    <GitHubBrand /> GitHub SSO
                  </Button> 
                </div> 
              </div>
              <div className="flex items-center gap-2">
                <div className="h-px flex-1 bg-slate-300" />
                <span className="font-jetbrains text-xs uppercase tracking-wider text-slate-500">
                  OU CONTINUE COM E-MAIL CORPORATIVO
                </span>
                <div className="h-px flex-1 bg-slate-300" />
              </div>
              <div id="inputs" className="flex flex-col w-full my-3 h-full">
               <LoginForm/>
              </div>
            </TabsContent>

            
            <TabsContent value="register">

              
              <div className="flex flex-col mt-3 items-center mb-8" id="title">
                Registrar conta
              </div>
            </TabsContent>
          </Tabs>

          <div id="buttons sso" className="flex justify-evenly mb-8"></div>

          <div id="inputs">
            <div className="text-black"></div>
          </div>
          <div id="signup-box"></div>
        </div>
      </div>
    </div>
  );
}
