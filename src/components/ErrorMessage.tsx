interface ErrorMessageProps {
	isError: boolean;
	message: string;
}

export function ErrorMessage({ isError, message }: ErrorMessageProps) {
	return (
		<div className={`${isError ? "flex text-red-400" : "hidden"}`}>
			<p className="text-sm">{message}</p>
		</div>
	);
}
