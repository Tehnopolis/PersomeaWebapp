# Подготовка

Если у вас еще не установлен pnpm, то установите его – https://pnpm.io/installation
Это можно сделать, например, через Corepack (есть у каждого, у кого установлена Node.js v16.13+)

```bash
corepack enable
```

Для начала установите все зависимости:

```bash
pnpm i
```

# Запуск локально

Чтобы запустить приложение локально:

```bash
pnpm dev
```

# Примечания

### Воркфлоу работы

Над проектом одновременно работает не один человек, поэтому нужно все оформлять по упрощенному гит флоу:

1. Создаешь ветку от main - `feature/Some_feature` (где Some_feature - краткое название фичи/задачи на английском)
2. Работаешь над задачей в ветке, делаешь коммиты с минимальным описанием
3. Когда закончил задачу - создаешь Pull Request (из твоей ветки `feature/...` в `main`), ждешь пока её примут

### PNPM

Мы используем PNPM вместо NPM, пожалуйста, используйте команду `pnpm` вместо `npm`.

### Eslint, Prettier

В проекте настроены линтер и преттиер, по умолчанию стоит `formatOnSave` (форматирование при сохранении файла), который
не стоит отключать, также как и не стоит глушить линтер.
Везде в коде мы используем табы - в IDE вы можете настроить себе ширину табов (2/4 пробела).

### SCSS

Мы используем самый понятный препроцессор - SCSS, готовые компонентные библиотеки использовать не нужно, также как и Tailwind - проект слишком мал, чтобы тащить сюда лишнее.
