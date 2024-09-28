Aqui estão as tasks com mais detalhes:

### 1. **Configuração Inicial do Projeto**

- **Task 1.1: Configuração do Ambiente**

  - Instalar o Node.js, Yarn/NPM, e React Native CLI.
  - Configurar o ambiente para desenvolvimento em Android (Android Studio) e iOS (Xcode).
  - Verificar a compatibilidade de bibliotecas necessárias, como React Navigation e Axios.

- **Task 1.2: Estruturação do Projeto**

  - Criar a estrutura inicial do projeto com diretórios para `components`, `screens`, `services`, `hooks`, `assets`, e `navigation`.
  - Configurar ESLint e Prettier para padronização do código.
  - Configurar o `tsconfig.json` se estiver usando TypeScript.

- **Task 1.3: Configuração da Navegação**
  - Instalar e configurar o React Navigation com a navegação em abas.
  - Criar um arquivo `AppNavigator.tsx` para gerenciar as rotas principais.
  - Configurar as telas iniciais de Login, Cadastro, Feed e Perfil na Bottom Tab Navigation.

### 2. **Autenticação e Cadastro**

- **Task 2.1: Tela de Login**

  - Criar os campos de input para email e senha.
  - Implementar a lógica de validação de email e senha.
  - Adicionar botões para login e redirecionamento para a tela de cadastro.
  - Implementar um indicador de carregamento durante a tentativa de login.

- **Task 2.2: Tela de Cadastro**

  - Criar o formulário com campos de email, senha, confirmação de senha e upload de foto do rosto.
  - Implementar validações para email, força da senha e correspondência da confirmação de senha.
  - Adicionar lógica para tirar ou escolher foto do rosto utilizando a câmera ou galeria.
  - Implementar um indicador de progresso durante o cadastro.

- **Task 2.3: Integração com Backend**

  - Configurar a comunicação com o backend utilizando Axios ou Fetch API.
  - Implementar a chamada para o endpoint de login.
  - Implementar a chamada para o endpoint de cadastro de usuário.
  - Implementar o armazenamento seguro do token de autenticação utilizando AsyncStorage ou SecureStore.

- **Task 2.4: Recuperação de Senha**
  - Criar uma tela com campo de input para email e botão de recuperação de senha.
  - Implementar a lógica para envio do email de recuperação de senha.
  - Exibir mensagens de feedback ao usuário, como "Email enviado com sucesso".

### 3. **Feed de Anúncios**

- **Task 3.1: Tela Principal de Feed**

  - Implementar a UI do feed utilizando FlatList ou SectionList.
  - Adicionar suporte a pull-to-refresh para recarregar anúncios.
  - Implementar a lógica para carregamento inicial de anúncios com paginação.

- **Task 3.2: Filtragem de Anúncios**

  - Implementar filtros por localização, preço, e categorias de produtos.
  - Adicionar opções de filtragem por proximidade geográfica usando a localização do usuário.
  - Integrar os filtros ao backend e exibir os resultados no feed.

- **Task 3.3: Componente de Anúncio**
  (Pedro Andrade) - Desenvolver o componente de card do anúncio contendo imagem, título, preço/troca, e uma breve descrição.
  (Pedro Andrade) - Implementar a navegação para a tela de detalhes do anúncio ao clicar no card.
  (Pedro Andrade) - Adicionar suporte a diferentes estados de exibição, como "vendido", "disponível para troca", etc.

### 4. **Detalhes do Anúncio**

## **(Enzo Alencar)**

- **Task 4.1: UI da Tela de Detalhes**

  - Criar a tela com exibição da imagem em destaque, título, descrição completa, preço/troca, e link para WhatsApp.
  - Adicionar botões para ações rápidas, como "Abrir WhatsApp", "Ver no Google Maps", e "Compartilhar".

- **Task 4.2: Integração de Funcionalidades**
  (Enzo Alencar) - Implementar a funcionalidade para abrir o Google Maps utilizando a latitude e longitude do anúncio.

  - Implementar o link direto para iniciar uma conversa no WhatsApp com o vendedor.
  - Adicionar o campo de horários de atendimento e exibir uma mensagem de aviso caso o horário atual não esteja dentro do período especificado.

- **Task 4.3: Configuração do Google Maps**
  - Integrar o Google Maps SDK para gerar links dinâmicos com base na localização do anúncio.
  - Adicionar lógica para verificar se o aplicativo do Google Maps está instalado e, se não, abrir a versão web no navegador.

### 5. **Adicionar Produto**

## **(Enzo Cambras)**

- **Task 5.1: UI da Tela de Adicionar Produto**

  - Criar o formulário com campos para upload de foto, título, descrição, preço/troca, link para WhatsApp, horários de atendimento, e endereço.
  - Implementar a lógica para capturar a localização atual do usuário e preencher automaticamente o campo de endereço.

- **Task 5.2: Validações do Formulário**

  - Adicionar validações para campos obrigatórios, como título e preço/troca.
  - Implementar um alerta para campos não preenchidos ou preenchidos incorretamente antes de permitir o envio.
  - Adicionar pré-visualização da imagem antes de confirmar o upload.

- **Task 5.3: Integração com Backend**
  - Implementar a lógica para enviar os dados do formulário para o backend, incluindo upload da foto do produto.
  - Implementar feedback de sucesso ou erro após o envio dos dados.
  - Atualizar automaticamente o feed com o novo produto após a criação.

### 6. **Perfil do Usuário**

- **Task 6.1: Tela de Perfil**

  - Criar a tela que exibe as informações do usuário, incluindo nome, email, e foto de perfil.
  - Exibir a lista de produtos anunciados pelo usuário e permitir acesso rápido para editar ou excluir anúncios.

- **Task 6.2: Edição do Perfil**

  - Implementar a funcionalidade de edição do perfil, permitindo alterar nome, email, senha, e foto.
  - Validar as mudanças antes de enviar os dados para o backend.
  - Implementar feedback visual para indicar o sucesso da atualização.

- **Task 6.3: Gerenciamento de Anúncios**
  - Criar uma tela de gerenciamento de anúncios onde o usuário pode ver, editar, ou excluir seus produtos.
  - Implementar lógica de confirmação para excluir um anúncio.
  - Adicionar filtros para organizar os anúncios por categoria, data de criação, ou status.

### 7. **Integração e Testes**

- **Task 7.1: Integração com APIs Externas**

  - Integrar a API do Google Maps para gerar links de localização.
  - Configurar a API do WhatsApp para criar links diretos para conversa.
  - Garantir que as chamadas de API estejam utilizando token de autenticação quando necessário.

- **Task 7.2: Testes em Diferentes Dispositivos**

  - Testar a responsividade e performance do aplicativo em diversos dispositivos, incluindo diferentes tamanhos de tela e sistemas operacionais.
  - Corrigir bugs identificados durante os testes, como problemas de layout, desempenho, ou falhas nas funcionalidades principais.

- **Task 7.3: Implementação de Testes Unitários**
  - Implementar testes unitários para os componentes principais, como o feed de anúncios, tela de login, e cadastro de produto.
  - Utilizar bibliotecas como Jest e React Native Testing Library para garantir a estabilidade do código.

### 8. **Deploy**

- **Task 8.1: Configuração de Ambiente de Deploy**

  - Configurar o ambiente para build em Android e iOS, incluindo as configurações específicas de cada plataforma.
  - Criar scripts automatizados para o processo de build e deploy.

- **Task 8.2: Testes de Build**

  - Realizar builds de teste para Android e iOS, garantindo que o aplicativo funcione corretamente em ambas as plataformas.
  - Corrigir quaisquer problemas de compatibilidade ou bugs que surgirem durante o processo de build.

- **Task 8.3: Publicação do Aplicativo**
  - Preparar os assets necessários para a publicação, como ícones, splash screens, e descrições.
  - Configurar as contas de desenvolvedor no Google Play e App Store.
  - Submeter o aplicativo para revisão e publicação nas lojas, e monitorar o processo até a aprovação.

Essas tarefas agora estão detalhadas para cobrir todos os aspectos do desenvolvimento, desde a configuração inicial até o deploy final do aplicativo. Se precisar de mais ajustes ou quiser adicionar algo específico, estou à disposição!
