# TOWER - стартовый шаблон для фронтенда


## Для чего всё это?

Этот шаблон предназначен для автоматизации рутинных задач в процессе вёрстки. Он не подойдёт для разработки приложений на ReactJS или другом «модном фреймворке» 🤕, но отлично потянет вёрстку с JavaScript функционалом.

## Установка

- Скачать и установить [Node.js](https://nodejs.org/en/). Если уже стоит, то проверьте версию на всякий случай
- Склонировать этот проект и удалить `.git`, чтобы привязать свой репозиторий
- Установить зависимости `npm i`

## Что под капотом?

- Компиляция [pug](https://pugjs.org/api/getting-started.html) шаблонов
- Компиляция [stylus](http://stylus-lang.com/)
- Сборка svg-спрайта
- Добавление вендорных префиксов к свойствам
- Минификация css с помощью [csso](https://github.com/css/csso)
- ES6
- Конкатенация и минификация js
- Оптимизация картинок
- Автоматическое обновление страницы в браузере
- Валидация html на w3c
- Слежение за изменениями файлов
- Генерация файлов страниц и блоков

## Файловая структура

- `src` - исходные файлы проекта
- `dist` - результат компиляции

### Структура папки `src`

- `assets`
  - `styles` - глобальные стили проекта
  - `images` - картинки проекта
    - `svg` - svg-иконки для спрайта
  - `scripts` - глобальные скрипты для проекта
- `templates`
  - `blocks` - независимые блоки, из которых собираются страницы
  - `layouts` - шаблоны лейаутов, который наследуют страницы
  - `pages` - шаблоны страниц

## Как это всё работает?

В `gulpfile.js` описаны таски, которые выполняют те или иные действия. Таски можно вызывать по отдельности и группами. В проекте настроен вызов групповых тасков через npm. Для вызова индивидуального таска достаточно набрать `gulp` + `название таска`

### Генератор файлов страниц и блоков
Кажется, что это мелочь, но на самом деле на создание новых файлов для блоков (особенно блоков) и страниц уходит туча времени. Поэтому этот процесс автоматизирован. Всего одна команда `npm run add` позволит создать:
- файл новой страницы
- папку нового компонента с шаблоном компонента, файлом стилей и файлом js

### Групповые таски

- `npm start` - компиляция файлов + запуск сервера для разработки с отслеживанием изменений
- `npm run prod` - компиляция файлов для передачи клиенту и создание архива с скомпилированными файлами
- `npm run validate` - валидация html

## Структура стилей

Глобальные стили для всего проекта хранятся в файле `settings.styl`, полезные миксины - в файле `mixins.styl`, переменные - в файле `variables.styl`. Стили для блоков хранятся в папке блока. Например, `templates/blocks/header/header.styl`. Файл `main.styl` является главным стилевым файлом, в котором подключаются все остальные файлы, в том числе файлы блоков. В нём ничего писать не надо. Если бы мы использовали scss, или sass, то вам бы пришлось писать инклюд для каждого созданного вами css файла блока. Но мы используем stylus, и можем подключить все файлы блоков одной строчкой. Круто? Поэтому мы и используем stylus.
Для упрощения написания медиазапросов к проекту подключен плагин [`rupture`](https://github.com/jescalan/rupture), который позволяет писать вот так:
```css
.test
  color: red

  +below(700px)
    color: blue
```

Если вы жить не можете без сеток, то и тут есть помощник: [`lost`](https://github.com/peterramsing/lost). Очень мощная штука.

## Блоки

Для каждого блока создаётся своя папка в каталоге `templates/blocks`. Название папки соответствует названию блока. Например, блок `header`: его родина - папка `header`, в которой лежат `header.pug` и `header.styl`. Если бы для этого блока был необходим js, то он бы лежал здесь же и назывался бы... `header.js`.
Разметка блока оформляется как jade миксин, который потом просто подключается на странице.

## Pug

В качестве html-шаблонизатора в проекте используется [`pug`](https://pugjs.org/api/getting-started.html). Почему? В двух словах:
- Синтаксис очень похож на тот, что используется в CSS
- Система отступов: благодаря им обеспечивается правильный каскад
- Переменные
- Миксины
- Includes
- Читаемость (сперва будет непривычно, но спустя время – это будет казаться очень даже удобным)
- Большое количество учебных материалов
Для еще большего ускорения верстки в проекте подключены миксины [`bemto`](https://github.com/kizu/bemto), существенно облегчающие использование методологии БЭМ. Попробуйте - вам понравится.

## ES6

В шаблоне подключен Babel, так что смело можно использовать все прелести ES6:
- `const` и `let`
- Template literals
- Стрелочные функции
- Промисы
- Новые функции работы с массивами и т.д.
