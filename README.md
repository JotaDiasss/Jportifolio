# Jportifólio

Projeto pessoal estático para apresentar habilidades e contatos. Este repositório contém um pequeno portfólio em HTML/CSS/JS criado por João Pedro (Jota) com foco em front-end e design responsivo.

## Sobre

É uma página única (single-page) que reúne informações pessoais, links para GitHub e LinkedIn, uma breve descrição sobre o autor e ícones das tecnologias que ele utiliza.

## Estrutura de arquivos

- `portifolio.html` - página principal do portfólio
- `style.css` - estilos da página
- `script.js` - scripts para interações e preenchimento dinâmico de textos
- `assets/` - ativos como imagens (por exemplo `profile.jpg`)
- `README.md` - este arquivo

## Detalhes dos arquivos

- `portifolio.html`
	- Página única com a estrutura visual do portfólio.
	- Observação: a tag de imagem de perfil atualmente usa `/assets/profile.jpg` (caminho absoluto). Ao abrir o HTML localmente, pode ser necessário alterar para `assets/profile.jpg` (relativo) para a imagem carregar corretamente.

- `style.css`
	- Estilos principais: barra lateral fixa, foto central, ícones de tecnologias e seção "Quem sou eu".

- `script.js`
	- Efeito de digitação para os elementos `#name-title` e `#dev-title`.

## Como visualizar localmente

1. Clone o repositório ou baixe os arquivos.
2. Coloque todos os arquivos em uma pasta.
3. Abra `portifolio.html` no navegador (duplo-clique ou arraste para o navegador).

Opcional (recomendado para desenvolvimento): usar um servidor local com reload, por exemplo `live-server`:

```powershell
npm install -g live-server
live-server .
```

## Observações e problemas conhecidos

- Caminho da imagem: se `profile.jpg` não aparecer, altere o `src` no HTML de `/assets/profile.jpg` para `assets/profile.jpg` (remova a barra inicial).
- Idioma do documento: o HTML atual usa `lang="en"`. Para melhor acessibilidade e SEO em Português, sugerimos alterar para `lang="pt-BR"`.

## Próximos passos sugeridos (posso implementar)

1. Corrigir `src` da imagem para `assets/profile.jpg` e ajustar `lang` para `pt-BR` no `portifolio.html`.
2. Adicionar meta tags (descrição, Open Graph) e um `favicon.ico`.
3. Melhorar responsividade (media queries) para celulares e tablets.
4. Configurar deploy simples com GitHub Pages (ou workflow de CI para deploy automático).

## Contato

- Email: joaopefdias@gmail.com
- GitHub: https://github.com/jotadiasss
- LinkedIn: https://linkedin.com/in/jotadiasss

---