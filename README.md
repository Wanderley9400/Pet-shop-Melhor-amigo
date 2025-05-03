Este projeto foi iniciado com foco em performance, escalabilidade e produtividade no desenvolvimento front-end.
Abaixo segue uma explicação sobre cada arquivo e pasta presente na raiz do repositório:

📁 Pastas
src/: Contém todo o código-fonte da aplicação, incluindo componentes, estilos, serviços e lógica principal.

.bolt/: Pasta interna utilizada por ferramentas de gerenciamento de pacotes ou configurações específicas (dependendo do contexto da aplicação).

📄 Arquivos de Configuração
index.html: Arquivo principal HTML que serve como ponto de entrada para o Vite carregar a aplicação.

package.json: Gerencia as dependências do projeto, scripts de build/dev, e configurações de ferramentas.

package-lock.json: Garante a instalação consistente das dependências, travando suas versões.

vite.config.ts: Configuração do Vite, o bundler moderno que oferece uma experiência de desenvolvimento rápida.

tailwind.config.js: Arquivo que define as customizações do Tailwind CSS, como temas, cores e breakpoints.

postcss.config.js: Utilizado para configurar o PostCSS, que processa o CSS do projeto junto com o Tailwind.

eslint.config.js: Define as regras do ESLint, ferramenta que ajuda a manter o código limpo e padronizado.

.gitignore: Especifica quais arquivos e pastas devem ser ignorados pelo controle de versão Git (ex: node_modules).

🧠 Configurações TypeScript
tsconfig.json: Arquivo principal de configuração do TypeScript.

tsconfig.app.json: Define opções específicas para a compilação da aplicação.

tsconfig.node.json: Define configurações voltadas para o ambiente Node.js (scripts ou ferramentas auxiliares).


