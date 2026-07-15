# 🌟 Clínica Dra. Fernanda Martello - Website Puro

Website moderno e responsivo desenvolvido com **HTML, CSS e JavaScript puros** - sem frameworks, compiladores ou gerenciadores de pacotes.

## 📁 Estrutura do Projeto

```
website-puro/
├── index.html              # Arquivo principal (estrutura HTML)
├── css/                    # Arquivos CSS
│   ├── variables.css       # Variáveis e tema
│   ├── base.css           # Reset e estilos fundamentais
│   ├── components.css     # Componentes reutilizáveis
│   └── animations.css     # Animações e transições
├── js/                     # Arquivos JavaScript
│   ├── main.js            # Lógica principal e inicialização
│   ├── carousel.js        # Carrossel de antes e depois
│   ├── header.js          # Comportamento do header
│   └── faq.js             # Acordeão de FAQ
├── assets/                # Pasta para assets futuros
└── README.md              # Este arquivo
```

## 🚀 Como Usar

### Método 1: Abrir Diretamente no Navegador

1. **Localize o arquivo `index.html`**
   - Caminho: `c:\Users\ce3\Documents\dra-fernanda-martello\website-puro\index.html`

2. **Abra o arquivo no navegador**
   - Clique duplo no arquivo, ou
   - Arraste para o navegador, ou
   - Clique direito → "Abrir com" → Navegador

✅ **Pronto!** O site rodará completamente sem precisar de comandos no terminal.

### Método 2: Abrir com Live Server (VS Code - Recomendado)

1. **Instale a extensão Live Server no VS Code**
   - Abra o VS Code
   - Vá para Extensions (Ctrl+Shift+X)
   - Procure por "Live Server"
   - Clique em Install

2. **Use a Live Server**
   - Abra a pasta `website-puro` no VS Code
   - Clique direito em `index.html`
   - Selecione "Open with Live Server"
   - O navegador abrirá automaticamente em `http://localhost:5500`

## 🎨 Características Implementadas

- ✅ **Header Fixo** - Navbar com efeito de scroll
- ✅ **Hero Section** - Com overlay e botões de CTA
- ✅ **Seções Responsivas** - Layout adaptativo para mobile, tablet e desktop
- ✅ **Carrossel de Antes/Depois** - Com controles de navegação
- ✅ **FAQ Acordeão** - Expandir/Recolher perguntas
- ✅ **Menu Mobile** - Hamburger menu funcional
- ✅ **Animações Suaves** - Fade in, slide, bounce
- ✅ **Intersection Observer** - Animações ao scroll
- ✅ **Smooth Scroll** - Navegação suave para âncoras
- ✅ **Touch/Swipe** - Suporte a gesto no carrossel
- ✅ **Footer Completo** - Com links e informações
- ✅ **Mapa Integrado** - Google Maps embarcado

## 🎯 Personalização

### Trocar o Logotipo

1. Abra `index.html`
2. Procure por `<img src="/manus-storage/logo-principal_ba00035c.webp"`
3. Substitua o `src` pelo caminho da sua nova imagem:
   ```html
   <img src="caminho/do/seu/logo.png" alt="Dra. Fernanda Martello" class="logo">
   ```

### Alterar Cores

1. Abra `css/variables.css`
2. Modifique as variáveis de cor:
   ```css
   --primary: #C8A96A;           /* Dourado */
   --primary-dark: #A78A4F;      /* Dourado escuro */
   --background: #FAFAF8;        /* Fundo */
   ```

### Adicionar Conteúdo

Todos os textos estão no `index.html`:
- Títulos, descrições e parágrafos
- Items do FAQ
- Testemunhos
- Informações de contato

Basta editar o HTML com seu editor de texto favorito.

## 📱 Responsividade

O site é totalmente responsivo:
- **Mobile** (< 768px): Menú hamburger, layout em uma coluna
- **Tablet** (768px - 1024px): Layout adaptado
- **Desktop** (> 1024px): Layout completo

## ⚡ Performance

- Zero dependências externas
- Carregamento rápido
- CSS otimizado
- JavaScript moderno (ES6+)
- Imagens otimizadas recomendadas

## 🌐 Browser Support

- ✅ Chrome/Edge (Versão 90+)
- ✅ Firefox (Versão 88+)
- ✅ Safari (Versão 14+)
- ✅ Mobile browsers modernos

## 🔧 Principais Scripts

### main.js
- Inicialização geral
- Renderização do carrossel
- Intersection Observer para animações
- Smooth scroll para links

### carousel.js
- Classe Carousel com navegação
- Suporte a touch/swipe
- Arraste com mouse

### header.js
- Classe Header
- Efeito de scroll
- Toggle do menu mobile
- Fechar menu ao clicar em link

### faq.js
- Classe FAQ
- Acordeão funcional
- Animação de altura dinâmica
- Navegação por teclado

## 🎓 Código Limpo e Bem Documentado

- Comentários explicativos
- Estrutura lógica
- CSS organizado em camadas
- JavaScript modular com classes ES6

## 📞 Contato e Informações

- **WhatsApp**: (21) 96473-1528
- **Instagram**: @dra.fernanda.martello
- **Endereço**: Av. Leandro da Mota, 720, Duque de Caxias - RJ
- **CRO**: 45875

## 📄 Licença

Este website foi desenvolvido especificamente para a Clínica Dra. Fernanda Martello.

---

**Desenvolvido com ❤️ em HTML, CSS e JavaScript puro**

*Última atualização: Julho de 2026*
