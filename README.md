# 📝 toDoList

<p align="center">
  <img src="https://img.shields.io/badge/Expo-48.0.18-blue?logo=expo" alt="Expo"/>
  <img src="https://img.shields.io/badge/React%20Native-0.71.8-blue?logo=react" alt="React Native"/>
  <img src="https://img.shields.io/badge/license-MIT-green" alt="License"/>
</p>

<p align="center">
  <b>Aplicativo simples de lista de tarefas (ToDo) desenvolvido com React Native e Expo.</b>
</p>

---

## 📑 Sumário
- [📋 Sobre o Projeto](#-sobre-o-projeto)
- [🚀 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [🏛️ Padrões de Projeto](#-padrões-de-projeto)
- [⚙️ Configuração e Setup](#️-configuração-e-setup)
- [📁 Estrutura de Pastas](#-estrutura-de-pastas)
- [👤 Autor](#-autor)

---

## 📋 Sobre o Projeto
Aplicativo mobile para gerenciamento de tarefas, com adição e remoção de itens em uma lista, utilizando arquitetura baseada em componentes e serviços.

---

## 🚀 Tecnologias Utilizadas

<div align="center">
  <img src="https://img.shields.io/badge/Expo-48.0.18-blue?logo=expo" alt="Expo"/>
  <img src="https://img.shields.io/badge/React%20Native-0.71.8-blue?logo=react" alt="React Native"/>
  <img src="https://img.shields.io/badge/React-18.2.0-61dafb?logo=react" alt="React"/>
  <img src="https://img.shields.io/badge/Babel-7.20.0-f9dc3e?logo=babel" alt="Babel"/>
</div>

- [Expo](https://expo.dev/) `~48.0.18`
- [React Native](https://reactnative.dev/) `0.71.8`
- [React](https://react.dev/) `18.2.0`
- [expo-status-bar](https://docs.expo.dev/versions/latest/sdk/status-bar/) `~1.4.4`
- [@babel/core](https://babeljs.io/) `^7.20.0`

---

## 🏛️ Padrões de Projeto
- **Componentização:** Separação de responsabilidades em componentes reutilizáveis (`Form`, `ToDoList`).
- **Service Layer:** Serviços para abstração de chamadas à API (`ToDoService`, `ApiServices`).
- **Hooks e Ciclo de Vida:** Uso de hooks (`useState`, `useEffect`, `useCallback`) para controle de estado e efeitos colaterais.

---

## ⚙️ Configuração e Setup

> Siga os passos abaixo para rodar o projeto localmente:

1. **Pré-requisitos:**
   - [Node.js](https://nodejs.org/) (recomendado: >= 14.x)
   - [Yarn](https://classic.yarnpkg.com/) ou [npm](https://www.npmjs.com/)
   - [Expo CLI](https://docs.expo.dev/get-started/installation/):
     ```bash
     npm install -g expo-cli
     ```

2. **Instalação das dependências:**
   ```bash
   yarn install
   # ou
   npm install
   ```

3. **Configuração da API:**
   - O serviço espera uma API rodando em:
     ```
     http://192.168.15.6:3002/api/react-native/
     ```
   - Altere o endereço em `src/services/apiServices.js` caso necessário.

4. **Executando o projeto:**
   ```bash
   yarn start
   # ou
   npm start
   ```
   - Use o app Expo Go para testar no dispositivo físico ou emulador.

---

## 📁 Estrutura de Pastas

```
assets/           # Imagens e ícones do app
src/
  components/     # Componentes reutilizáveis (Form, ToDoList)
  services/       # Serviços de acesso à API
App.js            # Componente principal
babel.config.js   # Configuração do Babel
app.json          # Configuração do Expo
```

---


## 👤 Autor
by **Rodolfo M. F. Abreu**

---

<p align="center">
  Feito com 💙 usando <b>React Native + Expo</b>
</p> 