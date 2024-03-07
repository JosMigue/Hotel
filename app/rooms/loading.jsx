const loading = () => {
  return (
    <div className="min-h-screen">
      <div classNamew='flex items-center justify-center min-h-screen'>
          <div style={{borderTopColor:'transparent '}} classNamew="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"></div>
          <p classNamew="ml-2">cargando...</p>
      </div>
    </div>
  )
}

export default loading;