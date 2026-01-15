export default function Container({ children, className = '' }) {
  return (
    <div className={`mx-auto w-full max-w-[1920px] px-4 sm:px-6 lg:px-8 xl:px-[180px] 2xl:px-[200px] ${className}`}>
      {children}
    </div>
  );
}