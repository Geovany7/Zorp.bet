document.addEventListener('DOMContentLoaded', () => {
    const campoBusca = document.getElementById('searchInput');
    const botoesTutorial = document.querySelectorAll('.tutorial-button');
    const areaResultados = document.getElementById('results');
    const imagemPschan = document.getElementById('pschanImage');

    const videos = {
        conservacao: [
            'videos/como--conservar--o--play--2.mp4',
            'videos/freddie-mercury-ensinando-como-conservar-um-ps2-versão-gangstas-paradise.mp4'
        ],
        opl: [
            'videos/qual-é-a-melhor-farm-do-minecraft--a-revanche-final.mp4',
            'videos/Vídeo sem título ‐ Feito com o Clipchamp.mp4'
        ],
        hot: [
            'videos/umavez.mp4',
            'videos/luangameplay-dublagem.mp4'
        ]
    };

    function exibirVideos(urlsDeVideos) {
        areaResultados.innerHTML = urlsDeVideos.length 
            ? urlsDeVideos.map(url => `
                <div class="result-item">
                    <video class="video" controls>
                        <source src="${url}" type="video/mp4">
                        Seu navegador não suporta a tag de vídeo.
                    </video>
                </div>
            `).join('') 
            : '<div class="result-item">Nenhum vídeo encontrado.</div>';
    }

    campoBusca.addEventListener('input', () => {
        const termoBusca = campoBusca.value.toLowerCase().replace(/\s+/g, '-');
        const urlsFiltradas = [];

        Object.keys(videos).forEach(categoria => {
            videos[categoria].forEach(videoUrl => {
                const nomeVideo = videoUrl.split('/').pop().toLowerCase();

                if (nomeVideo.includes(termoBusca)) {
                    urlsFiltradas.push(videoUrl);
                }
            });
        });

        exibirVideos(urlsFiltradas);

        imagemPschan.style.display = urlsFiltradas.length ? 'none' : 'block';
    });

    botoesTutorial.forEach(botao => {
        botao.addEventListener('click', () => {
            const filtro = botao.getAttribute('data-filter');
            const urlsDeVideos = videos[filtro] || [];
            exibirVideos(urlsDeVideos);
            imagemPschan.style.display = 'none';
        });
    });
});

const anuncios = [
    { className: "anuncio", img1: "socasadas.png", img2: "carlosps2anuncion.png" },
    { className: "anuncio2", img1: "anvisa.png", img2: "anuncio7684.png" }
];

function alternarImagens() {
    anuncios.forEach((anuncio) => {
        const elemento = document.querySelector(`.${anuncio.className}`);
        if (elemento.getAttribute('src') === anuncio.img1) {
            elemento.setAttribute('src', anuncio.img2);
        } else {
            elemento.setAttribute('src', anuncio.img1);
        }
    });
}

setInterval(alternarImagens, 5000);
