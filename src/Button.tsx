interface ButtonProps {
  children: React.ReactNode;
  small?: boolean;
  subdued?: boolean;
}

export default function Button({ children, small, subdued }: ButtonProps) {
  const sizeClasses = `${small ? "px-2 py-1 text-xs" : "px-6 py-2 text-sm"}`;
  const colorClasses = `${
    subdued ? "border text-gray-400" : "bg-teal-600 text-white"
  }`;
  const baseClasses = "rounded";

  return (
    <button className={`${sizeClasses} ${colorClasses} ${baseClasses}`}>
      {children}
    </button>
  );
}
