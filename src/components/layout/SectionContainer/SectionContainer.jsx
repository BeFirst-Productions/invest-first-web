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
      <div className={`relative max-w-[1990px] mx-auto px-[24px] md:px-[32px] lg:px-[120px] 4xl:px-[220px] z-10 ${containerClassName}`}>
        {children}
      </div>
    </Component>
  );
}
