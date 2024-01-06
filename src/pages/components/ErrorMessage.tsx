type PropsErrorMessage = {
  message: string | undefined;
  className?: string;
};
export default function ErrorMessage({
  message,
  className,
}: PropsErrorMessage) {
  return (
    <div
      className={`invalid-feedback ${className}`}
      style={{ display: "block" }}
    >
      {message}
    </div>
  );
}
