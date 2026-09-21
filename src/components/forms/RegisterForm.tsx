'use client'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form";
import { Field, FieldGroup, FieldContent, FieldError, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  user_name: z.string().optional(),
  complete_name: z.string()
    .min(8, { message: "O Nome de usuário deve conter no mínimo 8 caracteres" })
  .max(50, {message:"O Nome de usuário deve ter no máximo 50 caracteres"}),
  email: z.string().min(1,{message:"Digite um e-mail válido"}).email({ message: "Digite um e-mail válido" }),
  password: z.string().min(8, { message: "A senha deve ter no mínimo 8 dígitos" }).max(64, { message: "A senha deve ter no máximo 64 caracteres" }),
  passwordConfirm: z.string({message:"Confirme sua senha"})
}).refine((data) => (data.password === data.passwordConfirm, {
  message: "As senhas não correspondem",
  path:["passwordConfirm"]
}))


export default function RegisterForm() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user_name: "",
      complete_name: "",
      email: "",
      password: "",
      passwordConfirm:""
      }
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    // aqui vai o axios com a requisição post para o backend
    
    
  }
  
  return (
    <div className="flex flex-col flex-1 items-start justify-start gap-2">
    <form id="register-form" onSubmit={form.handleSubmit(onSubmit)} className="w-full">
      <FieldGroup >
        {/*Controller para username*/}
        <Controller
          name="user_name"
          control={form.control}
          render={({ field, fieldState }) => (
            // aqui vai todos os componentes do formulário
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor="register-form-user_name" className="font-inter">
            Nome de Usuário
              </FieldLabel>
              <Input
                {...field}
                id="register-form-user_name"
                aria-invalid={fieldState.invalid}
                placeholder="Crie um nome de usuário"
                autoComplete="off"
              />
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error] }/>
              )}
        </Field>
          )}
        />
        {/*Controller para complete_name*/}
        <Controller
          name="complete_name"
          control={form.control}
          render={({ field, fieldState }) => (
            // aqui vai todos os componentes do formulário
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor="register-form-complete_name" className="font-inter">
            Nome Completo
              </FieldLabel>
              <Input
                {...field}
                id="register-form-complete_name"
                aria-invalid={fieldState.invalid}
                placeholder="Digite seu nome completo"
                autoComplete="off"
              />
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error] }/>
              )}
        </Field>
          )}
        />
        
        {/*Controller para email*/}
        <Controller
                  name="email"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    // aqui vai todos os componentes do formulário
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="register-form-email" className="font-inter">
                    E-mail
                      </FieldLabel>
                      <Input
                        {...field}
                        id="register-form-email"
                        aria-invalid={fieldState.invalid}
                        placeholder="Digite seu e-mail"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error] }/>
                      )}
                </Field>
                  )}
                />

        {/*Controller para password*/}
        <Controller
                  name="password"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    // aqui vai todos os componentes do formulário
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="register-form-password" className="font-inter">
                    Senha
                      </FieldLabel>
                      <Input
                        {...field}
                        id="register-form-password"
                        aria-invalid={fieldState.invalid}
                        placeholder="Digite sua senha"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error] }/>
                      )}
                </Field>
                  )}
          />
          {/*Controller para passwordConfirm*/}
          <Controller
                    name="passwordConfirm"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      // aqui vai todos os componentes do formulário
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="register-form-passwordConfirm" className="font-inter">
                      Confirmar senha
                        </FieldLabel>
                        <Input
                          {...field}
                          id="register-form-passwordConfirm"
                          aria-invalid={fieldState.invalid}
                          placeholder="Digite sua senha"
                          autoComplete="off"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error] }/>
                        )}
                  </Field>
                    )}
                  />
      
      </FieldGroup>
      </form>
      <Field orientation="horizontal">
      <Button
        type="submit"
        form="register-form"
        variant="default"
        className="flex flex-1">
        Cadastrar
        </Button>
        <Button
          type="submit"
          form="register-form"
          variant="outline"
          className="flex flex-1 hover:bg-destructive">
          Reset
          </Button>
      </Field>
  </div>
    )
  }
