const Section = ({text,className, title, children}) => {
  return (
    <section className={className}>
    <h2 className={`${className}__heading`}>{title}</h2>
    {children}
    <p className={`${className}__description`}>
     {text}
    </p>
  </section>
  )
}

export default Section;