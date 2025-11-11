# Laravel структура коммерческого Enterprise-проекта

<img src="./lr.png">

Бесплатная структура коммерческого enterprise Laravel проекта на базе `React`.

## Архитектура

Здесь установлен пакет атрибутов роутов, чтобы обьявлять роуты прямо в контроллерах.


[Ссылка на оригинальный репозиторий](https://github.com/spatie/laravel-route-attributes)

Это необходимо для реализации компонентного подхода, где компонент хранит сразу бэк и фронт часть.

Алгоритм действий:
1. Хотите создать новую страницу? Добавляйте роут в `./routes/web.php` ведущий в ваш новый `.blade.php` файл в котором будет происходить инициализация вашего нового `./resources/js/Pages/MyPage.jsx` файла, в котором будет подключение всех ваших компонентов, они будут хранится в `./src/Components` и содержать папку с одним `.jsx` и одним `.css` файлом а так же дополнительным экшн-файлом, обычный контроллер формата `MyComponentView.php`.
2. Хотите создать универсальный API-роут независимый от jsx-компонента? `./app/Http/Controllers/API/V1/` - сюда храним контроллеры а логику выносим в `./app/Services`. В будущем либо выносим в модули либо в домены.

В проекте уже реализвоана одна страница и один компонент, можете ознакомиться.

## Установка в 5 шагов

`git clone git@github.com:wemmbley/react-laravel-structure.git` [Скачать бесплатно GIT на ПК](https://git-scm.com/install/)

`composer install` [Скачать композер на ПК бесплатно](https://getcomposer.org/download/)

`php artisan serve` [Скачать PHP если отсутствует на ПК](https://www.php.net/downloads.php)

`npm i` [Скачать node.js на ПК бесплатно](https://nodejs.org/en/download)

`npm run dev`

## Бесплатная база знаний

[Мой ютуб канал с бесплатными знаниями по IT](https://www.youtube.com/@RustamProIT/videos) <br>
[Мой сайт с авторскими статьями тем кто хочет глубже разобраться в Laravel](https://rustam.astre.ws/) <br>
[Плейлист с Enterprise-Архитектурой на Laravel для новичков](https://www.youtube.com/watch?v=Bbz7NnhWou8&list=PLFQy1WSCvUO_juLt1tz1VwF0u8fZ3Fxfj&index=1) <br>
[React за 27 минут для новичков](https://www.youtube.com/watch?v=T3LAHIyPmlw&list=PLFQy1WSCvUO9dSOdly1QVNQqZymqVY6Ao)
