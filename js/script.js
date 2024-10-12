const defaultPath = 'images';

function changeImage(path){
    const fullPath = `${defaultPath}/${path}`;
    
    document.getElementById('image').src = fullPath;
    document.getElementById('image').alt = path;
}