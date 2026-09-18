'use client'

import * as React from "react"
import { useForm, Controller } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {Field, FieldDescription, FieldError, FieldGroup, FieldLabel,} from "@/components/ui/field"
import {  InputGroup,  InputGroupAddon,  InputGroupInput,} from "@/components/ui/input-group"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {toast} from "sonner"
import { RiEyeLine, RiEyeOffLine } from "@remixicon/react"



const formSchema = z.object({
  email: z.string().email({message:"Digite um e-mail válido"}),
  password: z.string().min(8, {message:"A senha deve ter no mínimo 8 dígitos"})
})

export default function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password:""
    }
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      } as React.CSSProperties,
    })
  }
  const [showPassword, setShowPassword]= React.useState(false)
  
  return (
    <div className="flex flex-col gap-8">
      <form id="login-mesh-form">
        <FieldGroup>
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="login-mesh-form-email">
                  E-mail:
                </FieldLabel>
                <Input
                  {...field}
                  id="login-mesh-form-email"
                  aria-invalid={fieldState.invalid}
                  placeholder="Digite seu e-mail"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="login-mesh-form-password">
                  Senha:
                </FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    {...field}
                    id="login-mesh-form-password"
                    type={showPassword ? "text": "password"}
                    aria-invalid={fieldState.invalid}
                    placeholder="Digite sua Senha"
                    autoComplete="off"
                  />
                  <InputGroupAddon align="inline-end">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={()=>setShowPassword(!showPassword) }
                    >
                      {showPassword
                        ? <RiEyeLine/> : <RiEyeOffLine/>
                      }
                      
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>
      </form>
      <Field orientation="horizontal" className="flex justify-evenly">
        <Button type="submit" variant="outline" className="hover:bg-blue-50 hover:text-white flex flex-1" form="login-mesh-form">
          Entrar
        </Button>
        <Button type="button" className="flex flex-1" variant="outline" onClick={() => form.reset()}>
          Reset
        </Button>
      </Field>
    </div>
    
  )
}
