const resource = [
    /* --- CSS --- */
    '/AmoyFeels/assets/css/style.css',

    /* --- PWA --- */
    '/AmoyFeels/app.js',
    '/AmoyFeels/sw.js',

    /* --- HTML --- */
    '/AmoyFeels/index.html',
    '/AmoyFeels/404.html',

    
        '/AmoyFeels/categories/',
    
        '/AmoyFeels/tags/',
    
        '/AmoyFeels/archives/',
    
        '/AmoyFeels/about/',
    

    /* --- Favicons & compressed JS --- */
    
    
        '/AmoyFeels/assets/img/favicons/android-chrome-192x192.png',
        '/AmoyFeels/assets/img/favicons/android-chrome-512x512.png',
        '/AmoyFeels/assets/img/favicons/apple-touch-icon.png',
        '/AmoyFeels/assets/img/favicons/favicon-16x16.png',
        '/AmoyFeels/assets/img/favicons/favicon-32x32.png',
        '/AmoyFeels/assets/img/favicons/favicon.ico',
        '/AmoyFeels/assets/img/favicons/mstile-150x150.png',
        '/AmoyFeels/assets/js/dist/categories.min.js',
        '/AmoyFeels/assets/js/dist/commons.min.js',
        '/AmoyFeels/assets/js/dist/home.min.js',
        '/AmoyFeels/assets/js/dist/misc.min.js',
        '/AmoyFeels/assets/js/dist/page.min.js',
        '/AmoyFeels/assets/js/dist/post.min.js'
];

/* The request url with below domain will be cached */
const allowedDomains = [
    

    'restush.github.io',

    

    'fonts.gstatic.com',
    'fonts.googleapis.com',
    'cdn.jsdelivr.net',
    'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
    
];

