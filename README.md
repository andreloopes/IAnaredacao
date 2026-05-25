# EXAME | IA no Jornalismo 🚀

Este repositório contém uma experiência interativa web desenvolvida para apresentar os resultados de 3 anos de experiência com Inteligência Artificial na redação da **EXAME**.

A página foi construída para causar impacto ("Wow Effect") e substituir uma apresentação tradicional de PowerPoint por uma experiência fluida, responsiva e engajadora.

## 🎨 Design & UX
A estética do projeto baseia-se num design minimalista (Apple-like) com características visuais modernas:
- **Clean UI**: Fundo "off-white" (`#F5F5F7`) e fontes em tom quase preto (`#1D1D1F`) para máximo contraste e legibilidade.
- **Liquid Glass (Glassmorphism)**: Cartões translúcidos com efeito de desfoque profundo (`backdrop-filter`) que interagem com orbes vermelhos posicionados no fundo.
- **Microinterações (Parallax)**: Elemento interativo principal ("IA") envolvido por órbitas animadas e nós fluídos. O elemento responde aos movimentos do mouse criando um efeito de profundidade 3D.
- **Scroll Reveals**: O conteúdo vai surgindo de forma suave à medida que a rolagem vertical avança (utilizando `IntersectionObserver`).

## 🛠️ Tecnologias
O projeto é intencionalmente livre de dependências pesadas, visando o máximo de performance:
- **HTML5** Semântico
- **CSS3** (Variáveis CSS, animações keyframe, media queries para responsividade e estilos otimizados para impressão).
- **Vanilla JavaScript** puro (Intersection Observers e eventos de mouse).

## 🖨️ Exportação para PDF
A página possui uma folha de estilos dedicada à impressão (`@media print`). 
Para transformar o relatório em PDF:
1. Abra `index.html` em navegadores baseados em Chromium (Chrome/Edge) ou Safari.
2. Pressione `Cmd + P` ou `Ctrl + P`.
3. Escolha "Salvar como PDF".
4. *(Opcional)* Ative "Gráficos de segundo plano" (Background graphics) nas opções para manter os contornos avermelhados das caixas.

## 🚀 Como rodar localmente
Não é necessário nenhum processo de compilação (build). Você pode simplesmente abrir o arquivo `index.html` em qualquer navegador moderno. Para uma experiência ideal simulando um servidor, você pode usar ferramentas como o Live Server do VS Code ou o módulo http nativo do Python:

```bash
python3 -m http.server 8000
```
E acesse `http://localhost:8000`.
