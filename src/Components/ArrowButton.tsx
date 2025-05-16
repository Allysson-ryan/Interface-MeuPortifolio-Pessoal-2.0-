import { ArrowUpRight } from "@phosphor-icons/react";

interface ArrowButtonProps {
  onClick?: () => void;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-11 h-11 rounded-full border border-black flex items-center justify-center bg-white shadow-sm hover:scale-115 transition-transform"
    >
      <ArrowUpRight size={20} className="text-black" />
    </button>
  );
};

export default ArrowButton;
