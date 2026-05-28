export default function EmailBar() {
  return (
    <div className="hidden lg:flex fixed right-10 bottom-0 flex-col items-center gap-6 z-50">
      
      <a
        href="mailto:rudreshgawas3@gmail.com"
        className="text-[#8892b0] hover:text-[#64ffda] transition-all duration-300 vertical-text tracking-[0.3em] text-sm"
        style={{ writingMode: "vertical-rl" }}
      >
        rudreshgawas3@gmail.com
      </a>

      <div className="w-[1px] h-32 bg-[#8892b0] mt-2"></div>
    </div>
  );
}