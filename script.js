function toggleMode() {
  const html = document.documentElement
  // Quando o usuário clicar no botão, vamos verificar se a classe 'light' está presente no elemento html
  // Se estiver, vamos removê-la, caso contrário, vamos adicioná-la
  // Isso vai alternar entre os modos claro e escuro
  // Isso é feito para que o CSS possa aplicar os estilos corretos para cada modo
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  // Podemos fazer isso de forma mais simples usando o método toggle
  // html.classList.toggle('light');
  // Agora vamos pegar a tag img e vamos substituir para a imagem do modelo claro ou escuro
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    // Se a classe 'light' estiver presente, vamos trocar a imagem para a versão clara
    img.setAttribute("src", "./assets/viccenzo-claro.png")
  } else {
    img.setAttribute("src", "./assets/viccenzo-escuro.png")
  }
}
