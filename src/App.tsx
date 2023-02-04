import "./styles/global.css";
import { useFormik } from "formik";
import { FormSchema } from "./schemas";
import { FormField } from "./components/FormField";

export default function App() {
	const { values, errors, handleChange, isSubmitting, handleSubmit } =
		useFormik({
			initialValues: {
				name: "",
				email: "",
				password: "",
				confirmPassword: "",
			},
			validationSchema: FormSchema,
			onSubmit: (values, { setSubmitting }) => {
				console.log(values);
				setTimeout(() => {
					setSubmitting(false);
				}, 500);
			},
		});

	return (
		<div className="w-full h-screen p-4">
			<div
				className="w-full max-w-[500px] mx-auto bg-slate-50
			p-6 gap-4 grid rounded-xl"
			>
				<h1 className="font-bold text-2xl">Signup</h1>

				<form className="grid gap-2" onSubmit={handleSubmit}>
					<FormField
						name="name"
						value={values.name}
						message={errors.name}
						inputProps={{ onChange: handleChange, placeholder: "John Doe" }}
					/>

					<FormField
						name="email"
						value={values.email}
						message={errors.email}
						inputProps={{
							onChange: handleChange,
							placeholder: "johndoe@gmail.com",
						}}
					/>

					<FormField
						name="password"
						value={values.password}
						message={errors.password}
						inputProps={{
							onChange: handleChange,
							placeholder: "At least 6 characters with 1 uppercase",
						}}
					/>

					<FormField
						name="confirmPassword"
						value={values.confirmPassword}
						message={errors.confirmPassword}
						inputProps={{
							onChange: handleChange,
							placeholder: "Confirm your password",
						}}
					/>

					<button
						type="submit"
						className="mt-4 px-4 py-2 bg-blue-500	rounded-lg text-white
							font-bold hover:bg-blue-600 transition-colors"
					>
						{isSubmitting ? "Loading..." : "Submit"}
					</button>
				</form>
			</div>
		</div>
	);
}
