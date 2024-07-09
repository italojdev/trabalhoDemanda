let conteudo = document.querySelector('.conteudo');

function bacias(){
    let bacias = document.querySelector('.bacias');
    bacias.style.opacity = '1';
    let campos = document.querySelector('.campos');
    campos.style.opacity = '0';
    let blocos = document.querySelector('.blocos');
    blocos.style.opacity = '0';
    let pocos = document.querySelector('.pocos');
    pocos.style.opacity = '0';

    conteudo.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d11577.611214633418!2d-43.96184940777029!3d-20.026600519160304!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spt-BR!2sbr!4v1720479160034!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
}
function campos(){
    let bacias = document.querySelector('.bacias');
    bacias.style.opacity = '0';
    let campos = document.querySelector('.campos');
    campos.style.opacity = '1';
    let blocos = document.querySelector('.blocos');
    blocos.style.opacity = '0';
    let pocos = document.querySelector('.pocos');
    pocos.style.opacity = '0';
    
    conteudo.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1526.7463072025646!2d-72.65017255168878!3d-7.61760091666237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9199cd97455e9e1f%3A0x989297af5ed6ec04!2sBase%20da%20Petrobras!5e1!3m2!1spt-BR!2sbr!4v1720478940717!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
}
function blocos(){
    let bacias = document.querySelector('.bacias');
    bacias.style.opacity = '0';
    let campos = document.querySelector('.campos');
    campos.style.opacity = '0';
    let blocos = document.querySelector('.blocos');
    blocos.style.opacity = '1';
    let pocos = document.querySelector('.pocos');
    pocos.style.opacity = '0';
    
    conteudo.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1127.7317131267419!2d-43.28431087410657!3d-22.716319925112174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99716dd585bce9%3A0x531e12452c4d35b9!2sRefinaria%20Reduc%20Petrobr%C3%A1s!5e1!3m2!1spt-BR!2sbr!4v1720479394010!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
}
function pocos(){
    let bacias = document.querySelector('.bacias');
    bacias.style.opacity = '0';
    let campos = document.querySelector('.campos');
    campos.style.opacity = '0';
    let blocos = document.querySelector('.blocos');
    blocos.style.opacity = '0';
    let pocos = document.querySelector('.pocos');
    pocos.style.opacity = '1';

    conteudo.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d672.0844241197364!2d-41.860350038345196!3d-22.40174965170704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x963501b3494001%3A0xc2df6f9f9f698ae2!2sSubsea%20Drilling%20do%20Brasil!5e1!3m2!1spt-BR!2sbr!4v1720479773233!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
}

    