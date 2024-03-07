const Banner = ({styles, children, title}) => {
  return(
    <div className="w-full main-banner relative top-0">
    <div className="grid lg:grid-cols-2 py-32 lg:py-64" style={styles}>
      <div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-xl">
          {title}
        </h1>
        {children}
      </div>
    </div>
  </div>
  )
}

export default Banner;