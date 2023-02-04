import { upperLetter } from "../utils/uppercaseLetter";
import { ErrorMessage } from "./ErrorMessage";

interface FormFieldProps {
	name: string;
	value: string;
	message: string | undefined;
	inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export function FormField({
	name,
	message,
	inputProps,
	value,
}: FormFieldProps) {
	return (
		<>
			<label htmlFor={name}>{upperLetter(name)}</label>
			<input
				id={name}
				name={name}
				className={`p-2 rounded-lg border-2 ${
					message ? "border-red-400 " : ""
				}`}
				value={value}
				{...inputProps}
			/>
			<ErrorMessage
				isError={message ? true : false}
				message={message ? message : ""}
			/>
		</>
	);
}
