import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
// min 6 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const FormSchema = yup.object().shape({
	name: yup.string().min(1).required("Required"),
	email: yup.string().email("Please enter a valid email").required("Required"),
	password: yup
		.string()
		.min(6)
		.matches(passwordRules, { message: "Please create a strong password" })
		.required("Requiered"),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref("password"), null], "Passwords must match")
		.required("Required"),
});
