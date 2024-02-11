import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css'
                , 'resources/js/app.js'
                , 'resources/js/ClientSide/main.js'
                , 'resources/js/ClientSide/home/main.js'
                , 'resources/js/ClientSide/header.js'
                , 'resources/js/Dashboard/main.js'
                , 'resources/js/auth/login.js'
                , 'resources/js/auth/helpers/checkToken.js'
                , 'resources/js/auth/helpers/logout.js'
                , 'resources/js/Dashboard/Services/Service/main.js'
                , 'resources/js/Dashboard/Services/Package/main.js'
                , 'resources/scss/main.scss'
                , 'resources/SCSS/custom/ClientSide/styles.scss'
                , 'resources/js/ClientSide/Services/ExclusiveProperty/list.js'
                ,'resources/js/ClientSide/Services/Project/register.js'
                , 'resources/css/fontawesome/all.min.css'
                , 'resources/js/fontawesome/all.min.js'

            ],
            refresh: true,
        }),
    ],
});
