import { ArrowUpRight } from "@phosphor-icons/react";

interface ArrowButtonProps {
  onClick?: () => void;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="max-sm:w-8 max-sm:h-8 sm:w-11 sm:h-11 md:w-9 md:h-9 lg:w-11 lg:h-11 rounded-full border border-black flex items-center justify-center bg-white shadow-sm hover:scale-115 transition-transform"
    >
      <ArrowUpRight size={20} className="text-black" />
    </button>
  );
};

export default ArrowButton;
