export function validateUrl(value) {
  const urlPattern = new RegExp(
    '^(https?:\\/\\/)?' + // Protocolo (opcional)
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // Dominio
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // O dirección IP (v4)
      '(\\:\\d+)?' + // Puerto (opcional)
      '(\\/[-a-z\\d%_.~+]*)*' + // Ruta (opcional)
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // Parámetros de consulta (opcional)
      '(\\#[-a-z\\d_]*)?$',
    'i' // Fragmento (opcional)
  )

  return urlPattern.test(value)
}
