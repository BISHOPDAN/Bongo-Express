let platform = window.location.hostname !== 'localhost' ? 'production' : 'local';
let settings ={};

if(platform === 'local'){
    settings ={
    // 'https://tracking.goterem.com',
        appName: 'BongoExpress',
        subect: 'BongoExpress',
        baseUrl:'http://127.0.0.1:8000',
        
    }
}else {
    settings ={
    //'https://tracking.goterem.com',
        appName: 'BongoExpress',
        subect: 'BongoExpress',
        baseUrl: 'http://127.0.0.1:8000',
    }
}

export default settings