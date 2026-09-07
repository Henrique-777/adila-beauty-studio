# Ádila Dauana — Concept Beauty Studio

Site de agendamento em React + Vite + Tailwind CSS.

## Como rodar localmente

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (normalmente http://localhost:5173).

## Como gerar a versão de produção

```bash
npm run build
```

Os arquivos finais ficam na pasta `dist/`, prontos para publicar em qualquer
serviço de hospedagem (Vercel, Netlify, Hostinger, etc.).

## Estrutura

- `src/pages/Home.jsx` — página inicial (hero, serviços, prévia de trabalhos)
- `src/pages/Agendar.jsx` — formulário de agendamento (envia pedido pelo WhatsApp)
- `src/pages/Trabalhos.jsx` — galeria de trabalhos, com filtro por serviço
- `src/pages/ListaEspera.jsx` — formulário de lista de espera
- `src/pages/Contato.jsx` — contato, endereço e mapa
- `src/data/services.js` — **arquivo central**: nome, WhatsApp, Instagram,
  endereço e lista de serviços. Editar aqui atualiza o site inteiro.

## Fotos dos trabalhos

Como o projeto ainda não tinha fotos reais das clientes, a galeria usa
molduras em arco com gradiente nude/dourado no lugar das fotos. Para trocar:

1. Coloque as imagens em `public/fotos/` (ex.: `public/fotos/sobrancelha-1.jpg`).
2. Em `src/pages/Trabalhos.jsx` e `src/pages/Home.jsx`, passe
   `src="/fotos/sobrancelha-1.jpg"` para o componente `<ArchFrame />`.

## Agendamento e lista de espera

Não há banco de dados: os formulários montam uma mensagem já preenchida e
abrem o WhatsApp da Ádila (`wa.me`), que confirma a disponibilidade
diretamente na conversa. Se no futuro for necessário registrar os pedidos
automaticamente (agenda online, bloqueio de horários já ocupados etc.), isso
exigiria um backend — posso ajudar a montar isso depois, se fizer sentido.

## Cores e tipografia

- Paleta nude + dourado pastel definida em `tailwind.config.js`
  (`nude`, `gold`, `rose`, `ink`).
- Tipografia: Fraunces (títulos, itálico) + Jost (texto), carregadas via
  Google Fonts em `src/index.css`.
