# 🚀 Desafio Técnico CI/CD com GitHub Actions

Projeto desenvolvido por **[Wilson Dala](https://www.linkedin.com/in/wilson-dala-7a7261286/)** como parte de um desafio técnico, com foco em práticas modernas de DevOps e automação de pipelines CI/CD utilizando GitHub Actions.

---

## 🎯 Objetivo

Implementar um pipeline CI/CD completo para uma aplicação web simples, incluindo:

- Automatização do processo de integração contínua
- Aprovação manual antes do deploy
- Deploy em ambiente de teste
- Notificações por e-mail em caso de sucesso ou falha

---

## ⚙️ Tecnologias Utilizadas

- **GitHub Actions** – Automatização do fluxo CI/CD
- **Node.js** – Base do projeto e build
- **JavaScript** – Action customizada
- **Vercel** – Deploy automático em ambiente de teste
- **SMTP (Gmail)** – Notificações por e-mail
- **Custom GitHub Action** – Verificação de arquivos essenciais (`lint-check`)

---

## 🧪 Pipeline CI/CD - Etapas

1. 🔄 Disparo automático em push na branch `main`
2. 📦 Instalação das dependências com `npm install`
3. 🕵️‍♂️ Validação da presença de arquivos obrigatórios (ex: `README.md`)
4. 🧪 Execução de testes unitários
5. 🛠️ Build da aplicação (`dist/index.html`)
6. 🚀 Criação de uma release com artefato no GitHub
7. ✅ Aprovação manual via GitHub Environments
8. 🌐 Deploy em ambiente de teste
9. 📧 Notificação via e-mail (em caso de sucesso ou falha)

---

## 🌍 Ambiente de Teste

A aplicação está publicada e acessível pelo link:

🔗 [https://desafio-cicd-github-actions-45e3lbirt-wilsondalas-projects.vercel.app](https://desafio-cicd-github-actions-45e3lbirt-wilsondalas-projects.vercel.app)

---

## 📁 Estrutura do Projeto

```
.
├── .github/
│   ├── workflows/
│   │   └── main.yml
│   └── actions/
│       └── lint-check/
│           ├── action.yml
│           ├── index.js
│           └── package.json
├── src/
├── dist/
│   └── index.html (gerado via build)
├── package.json
└── README.md
```

---

## 🙋‍♂️ Sobre o Autor

**Wilson Dala**  
DevOps Engineer com atuação prática e estratégica em projetos de automação, escalabilidade e entrega contínua de software.

🔗 [LinkedIn: linkedin.com/in/wilson-dala-7a7261286](https://www.linkedin.com/in/wilson-dala-7a7261286/)

---

## 📌 Instruções de Execução Local

```bash
# Instalar dependências
npm install

# Rodar testes (simulado)
npm test

# Gerar build com artefato em dist/
npm run build
```

---

## 📬 Contato

Em caso de dúvidas ou sugestões:
- 💼 LinkedIn: [Wilson Dala](https://www.linkedin.com/in/wilson-dala-7a7261286/)
- 📧 Email: (adicione se desejar)
