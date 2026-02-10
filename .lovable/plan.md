

## Plano: Adicionar Video Vturb no Hero

### Arquivos a Modificar

**1. `index.html`** - Adicionar preload links no `<head>` (antes do fechamento `</head>`)

```html
<script>!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);</script>
<link rel="preload" href="https://scripts.converteai.net/98fda8df-a95c-4373-8d4a-acd12b1e6dc5/players/698b3f656e05f1df885c18c1/v4/player.js" as="script">
<link rel="preload" href="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js" as="script">
<link rel="preload" href="https://cdn.converteai.net/98fda8df-a95c-4373-8d4a-acd12b1e6dc5/698b3f19aa8949c7cb34aa04/main.m3u8" as="fetch">
<link rel="dns-prefetch" href="https://cdn.converteai.net">
<link rel="dns-prefetch" href="https://scripts.converteai.net">
<link rel="dns-prefetch" href="https://images.converteai.net">
<link rel="dns-prefetch" href="https://api.vturb.com.br">
```

**2. `src/components/landing/HeroSection.tsx`** - Adicionar o player entre o H1 e o paragrafo

Inserir entre o `</h1>` e o `<p className="mt-5...">`:

- Um container com `max-w-3xl mx-auto my-8` para o video
- Um `useEffect` para carregar o script do Vturb dinamicamente
- O elemento `<div>` com o smartplayer via `dangerouslySetInnerHTML` ou ref

Como o Vturb usa um custom element (`vturb-smartplayer`) + script externo, a implementacao sera:
- Usar `useEffect` para injetar o script do player no `document.head`
- Renderizar o elemento `<div>` contendo o smartplayer tag via `dangerouslySetInnerHTML`

### Posicionamento Final no Hero

```
H1 (titulo)
   |
Video Vturb (novo)
   |
Paragrafo "Um metodo simples..."
   |
Lista de beneficios
   |
Preco + CTA
```

### Resumo
- **2 arquivos** modificados
- Preload no `index.html` para performance
- Player Vturb no `HeroSection.tsx` entre titulo e descricao

