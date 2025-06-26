import Link from "next/link";

interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset" | "href";
  href?: string;
  className?: string;
}

const Button = ({ text, type = "button", className, href }: ButtonProps) => {
  if (!text && typeof text !== "string") {
    throw new Error("Invalid text prop: It must be a non-empty string.");
  }

  const defalutStyle = `${className} bg-primary text-secondary px-4 py-2 rounded-md font-medium hover:bg-dark hover:text-secondary transition-all duration-300`;
  if (type !== "href") {
    return (
      <button type={type} className={defalutStyle}>
        {text}
      </button>
    );
  }

  if (type === "href" && href) {
    return (
      <Link href={href} className={defalutStyle}>
        {text}
      </Link>
    );
  }
};

export default Button;
