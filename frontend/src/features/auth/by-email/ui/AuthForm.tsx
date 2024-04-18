import { UserAuthSchema, useLazyAuthQuery, userActions, userAuthSchema } from "@/entities/user"
import { User } from "@/entities/user/model/types/types"
import { FlavorGreenIcon } from "@/shared/assets"
import { PersonSvg } from "@/shared/assets/personIcon"
import { ACCESS_TOKEN_KEY, Routes } from "@/shared/consts"
import { useAppDispatch } from "@/shared/hooks"
import { Button, DialogContent, DialogDescription, DialogHeader, DialogTitle, Form, FormControl, FormField, FormItem, FormLabel, Input } from "@/shared/ui"
import { zodResolver } from "@hookform/resolvers/zod"
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog"
import { jwtDecode } from "jwt-decode"
import { memo } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

export const AuthForm = memo(() => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [auth] = useLazyAuthQuery()

    const authForm = useForm<UserAuthSchema>({
        resolver: zodResolver(userAuthSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    });


    const onSubmit = async (data: UserAuthSchema) => {
        const response = await auth(data).unwrap().then()
        localStorage.setItem(ACCESS_TOKEN_KEY, response.token)
        const decodedResponse: User = jwtDecode(response.token)
        dispatch(userActions.setAuthData(decodedResponse))
        navigate(Routes.main)
    }

    return (
        <Dialog>
            <DialogTrigger>
                <Button variant={'outline'} className="relative ps-20 w-[220px] text-2xl h-[80px] rounded-[42px] bg-backgroundColor border-[#8C9D78] hover:bg-transparent bg-transparent border-2 text-[#8C9D78] hover:text-[#8C9D78]">
                    Войти
                    <PersonSvg width={32} height={32} className="absolute left-6 w-[62px] h-[62px]" />
                </Button>
            </DialogTrigger>
            <DialogContent className="w-[570px] h-[535px]">
                <FlavorGreenIcon className="absolute w-[250px] h-[230px] -rotate-90 -left-[62px] -top-6" />
                <DialogHeader className="pt-20">
                    <DialogTitle className="text-[#214911] text-4xl font-bold self-center">Добро пожаловать!</DialogTitle>
                    <DialogDescription>

                    </DialogDescription>
                </DialogHeader>
                <Form {...authForm}>
                    <form onSubmit={authForm.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={authForm.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Введите email</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={authForm.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Введите пароль</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-between items-center">
                            <Button type="submit" className="bg-[#38755B]">Войти в аккаунт</Button>
                            <div className="text-sm">нет аккаунта?<Button variant={'link'} className="text-[#38755B]">Зарегистрируйтесь</Button></div>
                        </div>
                    </form>
                </Form>

            </DialogContent>
        </Dialog>
    )
})
