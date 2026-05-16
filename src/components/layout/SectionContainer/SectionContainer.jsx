export default function SectionContainer({ 
  children, 
  background, 
  className = '', 
  containerClassName = '', 
  id,
  as: Component = 'section'
}) {
  return (
    <Component 
      id={id} 
      className={`relative w-full overflow-hidden ${className}`}
    >
      {/* Background layer (absolute, outside max-w container) */}
      {background}

      {/* Main Content (inside max-w constrained container) */}
      <div className={`relative w-full max-w-[1980px] mx-auto px-[14px] md:px-[24px] xl:px-[120px] 2xl:px-[220px] z-10 ${containerClassName}`}>
        {children}
      </div>
    </Component>
  );
}
