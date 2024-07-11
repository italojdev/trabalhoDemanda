let conteudo = document.querySelector('.conteudo');
let apresentacao = document.querySelector('.apresentacao');
let dados = document.getElementById('dados');
var h2_1 = dados.querySelectorAll('h2')[0];
var p1= dados.querySelectorAll('p')[0];
var h2_2 = dados.querySelectorAll('h2')[1];
var p2= dados.querySelectorAll('p')[1];
var h2_3 = dados.querySelectorAll('h2')[2];
var p3= dados.querySelectorAll('p')[2];
var h2_4 = dados.querySelectorAll('h2')[3];
var p4= dados.querySelectorAll('p')[3];
var h2_5 = dados.querySelectorAll('h2')[4];
var p5= dados.querySelectorAll('p')[4];
var div5= dados.querySelectorAll('div')[4];
let selectAdicionado1 = false;
let selectAdicionado2 = false;
let selectAdicionado3 = false;
let selectAdicionado4 = false;


function bacias() {
    apresentacao.style.display='none'
    dados.classList.remove('estilo');
    conteudo.innerHTML = '';
    h2_1.innerHTML='';
    p1.innerHTML='';
    h2_2.innerHTML='';
    p2.innerHTML='';
    h2_3.innerHTML='';
    p3.innerHTML='';
    h2_4.innerHTML='';
    p4.innerHTML='';
    h2_5.innerHTML=''
    p5.innerHTML=''

    var existenciaSelect2 = document.getElementById('selecao2');
    if (existenciaSelect2) {
        existenciaSelect2.remove();
        selectAdicionado2 = false;
    }
    var existenciaSelect3 = document.getElementById('selecao3');
    if(existenciaSelect3)
    {
        existenciaSelect3.remove();
        selectAdicionado3=false;
    }
    var existenciaSelect4 = document.getElementById('selecao4');
    if(existenciaSelect4)
    {
        existenciaSelect4.remove();
        selectAdicionado4=false;
    }

    if (selectAdicionado1) {
        return;
    }

    var select = document.createElement('select');
    select.setAttribute('id', 'selecao1');
    select.addEventListener('change', selecao);


    var selecaoDeOpcao = document.createElement('option');
    selecaoDeOpcao.value = '';
    selecaoDeOpcao.text = 'Selecione uma das bacias abaixo';
    selecaoDeOpcao.disabled = true;
    selecaoDeOpcao.selected = true;
    var opcao1 = document.createElement('option');
    opcao1.value = '1';
    opcao1.text = 'Estância Serrana';
    var opcao2 = document.createElement('option');
    opcao2.value = '2';
    opcao2.text = 'Oceano Atlântico Sul';
    var opcao3 = document.createElement('option');
    opcao3.value = '3';
    opcao3.text = 'Jardim de Angicos';

    select.appendChild(selecaoDeOpcao);
    select.appendChild(opcao1);
    select.appendChild(opcao2);
    select.appendChild(opcao3);

    var selecao = document.querySelector('.selecao');
    selecao.appendChild(select);

    selectAdicionado1 = true;

    function selecao(event) {
        const selecaoValor = event.target.value;
        dados.classList.remove('estilo');

        if (selecaoValor == '1') {
            conteudo.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d11577.611214633418!2d-43.96184940777029!3d-20.026600519160304!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spt-BR!2sbr!4v1720479160034!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

            h2_1.innerHTML='Localização'
            p1.innerHTML='Estr. São Sebastião das Águas Claras, 974-1296 - Bosque da Ribeira, Nova Lima - MG, 34000-000'
            h2_2.innerHTML='Operador'
            p2.innerHTML='SAMP'
            h2_3.innerHTML='Fluido Principal'
            p3.innerHTML='Gás'
            h2_4.innerHTML='Metadados de Localização'
            p4.innerHTML='Coordenadas: -20.026718, -43.962525'
            div5.style.display='none'
        }
        if (selecaoValor == '2') {
            conteudo.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d39074.50872851071!2d-39.01978439028256!3d-19.48587556234472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDMwJzAwLjAiUyAzOcKwMDAnMDAuMCJX!5e1!3m2!1spt-BR!2sbr!4v1720650075605!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

            h2_1.innerHTML='Localização'
            p1.innerHTML='Espirito Santo'
            h2_2.innerHTML='Operador'
            p2.innerHTML='Petrobras'
            h2_3.innerHTML='Fluido Principal'
            p3.innerHTML='Petróleo'
            h2_4.innerHTML='Metadados de Localização'
            p4.innerHTML='Coordenadas: -19.5, -39.0'
            div5.style.display='none'
        }
        if (selecaoValor == '3') {
            conteudo.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3066.4973290623334!2d-36.00150204276604!3d-5.499973295860739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwMzAnMDAuMCJTIDM2wrAwMCcwMC4wIlc!5e1!3m2!1spt-BR!2sbr!4v1720650406106!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

            h2_1.innerHTML='Localização'
            p1.innerHTML='Jardim de Angicos, Rio Grande do Norte'
            h2_2.innerHTML='Operador'
            p2.innerHTML='Repsol Sinopec'
            h2_3.innerHTML='Fluido Principal'
            p3.innerHTML='Petróleo'
            h2_4.innerHTML='Metadados de Localização'
            p4.innerHTML='Coordenadas: -5.5, -36.0'
            div5.style.display='none'
        }
        dados.classList.toggle('estilo')
    }
}
function campos() {
    apresentacao.style.display = 'none'
    dados.classList.remove('estilo');
    conteudo.innerHTML = '';
    h2_1.innerHTML='';
    p1.innerHTML='';
    h2_2.innerHTML='';
    p2.innerHTML='';
    h2_3.innerHTML='';
    p3.innerHTML='';
    h2_4.innerHTML='';
    p4.innerHTML='';
    h2_5.innerHTML=''
    p5.innerHTML=''

    var existenciaSelect1 = document.getElementById('selecao1');
    if (existenciaSelect1) {
        existenciaSelect1.remove();
        selectAdicionado1 = false;
    }
    var existenciaSelect3 = document.getElementById('selecao3');
    if (existenciaSelect3) {
        existenciaSelect3.remove();
        selectAdicionado3 = false;
    }
    var existenciaSelect4 = document.getElementById('selecao4');
    if (existenciaSelect4) {
        existenciaSelect4.remove();
        selectAdicionado4 = false;
    }

    if (selectAdicionado2) {
        return;
    }

    var select = document.createElement('select');
    select.setAttribute('id', 'selecao2');
    select.addEventListener('change', selecao);


    var selecaoDeOpcao = document.createElement('option');
    selecaoDeOpcao.value = '';
    selecaoDeOpcao.text = 'Selecione um dos campos abaixo';
    selecaoDeOpcao.disabled = true;
    selecaoDeOpcao.selected = true;
    var opcao1 = document.createElement('option');
    opcao1.value = '1';
    opcao1.text = 'Base da Petrobras';
    var opcao2 = document.createElement('option');
    opcao2.value = '2';
    opcao2.text = 'Coari';
    var opcao3 = document.createElement('option');
    opcao3.value = '3';
    opcao3.text = 'Jacuruna';

    select.appendChild(selecaoDeOpcao);
    select.appendChild(opcao1);
    select.appendChild(opcao2);
    select.appendChild(opcao3);

    var selecao = document.querySelector('.selecao');
    selecao.appendChild(select);

    selectAdicionado2 = true;

    function selecao(event) {
        const selecaoValor = event.target.value;
        dados.classList.remove('estilo');

        if (selecaoValor == '1') {
            conteudo.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1526.7463072025646!2d-72.65017255168878!3d-7.61760091666237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9199cd97455e9e1f%3A0x989297af5ed6ec04!2sBase%20da%20Petrobras!5e1!3m2!1spt-BR!2sbr!4v1720478940717!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

            h2_1.innerHTML='Localização'
            p1.innerHTML='Cruzeiro do Sul - AC, 69895-000'
            h2_2.innerHTML='Operador'
            p2.innerHTML='Petrobras'
            h2_3.innerHTML='Fluido Principal'
            p3.innerHTML='Sem extração'
            h2_4.innerHTML='Metadados de Localização'
            p4.innerHTML='Coordenadas: -7.617696, -72.649660'
            div5.style.display='none'
        }
        if (selecaoValor == '2') {
            conteudo.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d767.378287433269!2d-65.35038421603706!3d-4.879907166140933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwNTInNDguMCJTIDY1wrAyMScwMC4wIlc!5e1!3m2!1spt-BR!2sbr!4v1720650628312!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

            h2_1.innerHTML='Localização'
            p1.innerHTML='Urucu, Coari - AM'
            h2_2.innerHTML='Operador'
            p2.innerHTML='Petrobras'
            h2_3.innerHTML='Fluido Principal'
            p3.innerHTML='Petroleo'
            h2_4.innerHTML='Metadados de Localização'
            p4.innerHTML='Coordenadas: -4.88, -65.35'
            div5.style.display='none'
        }
        if (selecaoValor == '3') {
            conteudo.innerHTML= '<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d459.0980308312371!2d-38.90019140507127!3d-13.09990350800468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDA2JzAwLjAiUyAzOMKwNTQnMDAuMCJX!5e1!3m2!1spt-BR!2sbr!4v1720650749835!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

            h2_1.innerHTML='Localização'
            p1.innerHTML='Jacuruna, Jaguaripe - BA, 44480-000'
            h2_2.innerHTML='Operador'
            p2.innerHTML='Petrobras'
            h2_3.innerHTML='Fluido Principal'
            p3.innerHTML='Petroleo'
            h2_4.innerHTML='Metadados de Localização'
            p4.innerHTML='Coordenadas: -13.10, -38.90'
            div5.style.display='none'
        }
        dados.classList.toggle('estilo')
    }
}
function blocos(){
    apresentacao.style.display = 'none'
    dados.classList.remove('estilo');
    conteudo.innerHTML = '';
    h2_1.innerHTML='';
    p1.innerHTML='';
    h2_2.innerHTML='';
    p2.innerHTML='';
    h2_3.innerHTML='';
    p3.innerHTML='';
    h2_4.innerHTML='';
    p4.innerHTML='';
    h2_5.innerHTML=''
    p5.innerHTML=''

    var existenciaSelect1 = document.getElementById('selecao1');
    if (existenciaSelect1) {
        existenciaSelect1.remove();
        selectAdicionado1 = false;
    }
    var existenciaSelect2 = document.getElementById('selecao2');
    if (existenciaSelect2) {
        existenciaSelect2.remove();
        selectAdicionado2 = false;
    }
    var existenciaSelect4 = document.getElementById('selecao4');
    if (existenciaSelect4) {
        existenciaSelect4.remove();
        selectAdicionado4 = false;
    }


    if (selectAdicionado3) {
        return;
    }

    var select = document.createElement('select');
    select.setAttribute('id', 'selecao3');
    select.addEventListener('change', selecao);


    var selecaoDeOpcao = document.createElement('option');
    selecaoDeOpcao.value = '';
    selecaoDeOpcao.text = 'Selecione um dos blocos exploratórios abaixo';
    selecaoDeOpcao.disabled = true;
    selecaoDeOpcao.selected = true;
    var opcao1 = document.createElement('option');
    opcao1.value = '1';
    opcao1.text = 'Refinaria Reduc Petrobrás';
    var opcao2 = document.createElement('option');
    opcao2.value = '2';
    opcao2.text = 'Santo Amaro das Brotas';
    var opcao3 = document.createElement('option');
    opcao3.value = '3';
    opcao3.text = 'Natingui';

    select.appendChild(selecaoDeOpcao);
    select.appendChild(opcao1);
    select.appendChild(opcao2);
    select.appendChild(opcao3);

    var selecao = document.querySelector('.selecao');
    selecao.appendChild(select);

    selectAdicionado3 = true;

    function selecao(event) {
        const selecaoValor = event.target.value;
        dados.classList.remove('estilo');

        if (selecaoValor == '1') {
            conteudo.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1127.7317131267419!2d-43.28431087410657!3d-22.716319925112174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99716dd585bce9%3A0x531e12452c4d35b9!2sRefinaria%20Reduc%20Petrobr%C3%A1s!5e1!3m2!1spt-BR!2sbr!4v1720479394010!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

            h2_1.innerHTML='Localização'
            p1.innerHTML='Estr. da Petrobrás - Vila Actura, Duque de Caxias - RJ, 25265-008'
            h2_2.innerHTML='Operador'
            p2.innerHTML='Petrobras'
            h2_3.innerHTML='Fluido Principal'
            p3.innerHTML='Petróleo'
            h2_4.innerHTML='Metadados de Localização'
            p4.innerHTML='Coordenadas: -22.715989, -43.284386'
            div5.style.display='none'
        }
        if (selecaoValor == '2') {
            conteudo.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d378.2641350233787!2d-36.95014832730096!3d-10.79996407358133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDQ4JzAwLjAiUyAzNsKwNTcnMDAuMCJX!5e1!3m2!1spt-BR!2sbr!4v1720651163362!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

            h2_1.innerHTML='Localização'
            p1.innerHTML='Santo Amaro das Brotas - SE'
            h2_2.innerHTML='Operador'
            p2.innerHTML='Petrobras'
            h2_3.innerHTML='Fluido Principal'
            p3.innerHTML='Petróleo'
            h2_4.innerHTML='Metadados de Localização'
            p4.innerHTML='Coordenadas: 10.80, -36.95'
            div5.style.display='none'
        }
        if (selecaoValor == '3') {
            conteudo.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d836.7089720832489!2d-51.000446852925236!3d-23.999951896875675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDAwJzAwLjAiUyA1McKwMDAnMDAuMCJX!5e1!3m2!1spt-BR!2sbr!4v1720651303274!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

            h2_1.innerHTML='Localização'
            p1.innerHTML='Natingui, Ortigueira - PR, 84350-000'
            h2_2.innerHTML='Operador'
            p2.innerHTML='Petrobras'
            h2_3.innerHTML='Fluido Principal'
            p3.innerHTML='Petróleo'
            h2_4.innerHTML='Metadados de Localização'
            p4.innerHTML='Coordenadas: -24.00, -51.00'
            div5.style.display='none'
        }
        dados.classList.toggle('estilo')
    }
}
function pocos() {
    apresentacao.style.display = 'none'
    dados.classList.remove('estilo');
    conteudo.innerHTML = '';
    h2_1.innerHTML='';
    p1.innerHTML='';
    h2_2.innerHTML='';
    p2.innerHTML='';
    h2_3.innerHTML='';
    p3.innerHTML='';
    h2_4.innerHTML='';
    p4.innerHTML='';
    h2_5.innerHTML=''
    p5.innerHTML=''

    var existenciaSelect1 = document.getElementById('selecao1');
    if (existenciaSelect1) {
        existenciaSelect1.remove();
        selectAdicionado1 = false;
    }
    var existenciaSelect2 = document.getElementById('selecao2');
    if (existenciaSelect2) {
        existenciaSelect2.remove();
        selectAdicionado2 = false;
    }
    var existenciaSelect3 = document.getElementById('selecao3');
    if (existenciaSelect3) {
        existenciaSelect3.remove();
        selectAdicionado3 = false;
    }

    if (selectAdicionado4) {
        return;
    }

    var select = document.createElement('select');
    select.setAttribute('id', 'selecao4');
    select.addEventListener('change', selecao);


    var selecaoDeOpcao = document.createElement('option');
    selecaoDeOpcao.value = '';
    selecaoDeOpcao.text = 'Selecione um dos poços abaixo';
    selecaoDeOpcao.disabled = true;
    selecaoDeOpcao.selected = true;
    var opcao1 = document.createElement('option');
    opcao1.value = '1';
    opcao1.text = 'Subsea Drilling do Brasil';
    var opcao2 = document.createElement('option');
    opcao2.value = '2';
    opcao2.text = 'Rio Fundo';
    var opcao3 = document.createElement('option');
    opcao3.value = '3';
    opcao3.text = 'Piaçabuçu';

    select.appendChild(selecaoDeOpcao);
    select.appendChild(opcao1);
    select.appendChild(opcao2);
    select.appendChild(opcao3);

    var selecao = document.querySelector('.selecao');
    selecao.appendChild(select);

    selectAdicionado4 = true;

    function selecao(event) {
        const selecaoValor = event.target.value;
        dados.classList.remove('estilo');

        if (selecaoValor == '1') {
            conteudo.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d672.0844241197364!2d-41.860350038345196!3d-22.40174965170704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x963501b3494001%3A0xc2df6f9f9f698ae2!2sSubsea%20Drilling%20do%20Brasil!5e1!3m2!1spt-BR!2sbr!4v1720479773233!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

            div5.style.display='block'
            h2_1.innerHTML='Localização'
            p1.innerHTML='Estrada Helio Rosa Dos Santos - Imboassica, Macaé - RJ'
            h2_2.innerHTML='Operador'
            p2.innerHTML='TecnoFine'
            h2_3.innerHTML='Fluido Principal'
            p3.innerHTML='Gás'
            h2_4.innerHTML='Metadados de Localização'
            p4.innerHTML='Coordenadas: -22.401811, -41.859391'
            h2_5.innerHTML='Tipo de Poço'
            p5.innerHTML='Injeção'
        }
        if (selecaoValor == '2') {
            conteudo.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1264.904490006715!2d-38.64561843429098!3d-12.430099979200488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDI1JzQ5LjIiUyAzOMKwMzgnNDAuOCJX!5e1!3m2!1spt-BR!2sbr!4v1720651468455!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

            div5.style.display='block'
            h2_1.innerHTML='Localização'
            p1.innerHTML='Rio Fundo, Terra Nova - BA'
            h2_2.innerHTML='Operador'
            p2.innerHTML='Petrobras'
            h2_3.innerHTML='Fluido Principal'
            p3.innerHTML='Gás'
            h2_4.innerHTML='Metadados de Localização'
            p4.innerHTML='Coordenadas: 12.430322, -38.644676'
            h2_5.innerHTML='Tipo de Poço'
            p5.innerHTML='estratigráfico'
        }
        if (selecaoValor == '3') {
            conteudo.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d450.42367943469117!2d-36.43153901486671!3d-10.399147963757787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDIzJzU2LjkiUyAzNsKwMjUnNTMuMiJX!5e1!3m2!1spt-BR!2sbr!4v1720651754153!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

            div5.style.display='block'
            h2_1.innerHTML='Localização'
            p1.innerHTML='Piaçabuçu - AL'
            h2_2.innerHTML='Operador'
            p2.innerHTML='Petrobras'
            h2_3.innerHTML='Fluido Principal'
            p3.innerHTML='Petroleo'
            h2_4.innerHTML='Metadados de Localização'
            p4.innerHTML='Coordenadas: -10.399146, -36.431455'
            h2_5.innerHTML='Tipo de Poço'
            p5.innerHTML='Jazida mais rasa'
        }
        dados.classList.toggle('estilo')
    }
}