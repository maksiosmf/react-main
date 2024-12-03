import { SubmitHandler, useForm } from "react-hook-form";

type FormInput = {
    email: string,
    password: string,
    confirmPassword: string,
}

export const FormRweguter = () => {
    const { register, handleSubmit } = useForm<FormInput>();
    const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("email")}/>
            <input {...register("password")}/>
            <input {...register("confirmPassword")}/>
            <button type="submit">Submit</button>
            </form>
        </div>
    );
};