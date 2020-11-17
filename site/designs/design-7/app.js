const form = document.querySelector('#searchForm');
const button = document.querySelector('#searchForm button');

form.addEventListener('submit', async function(e){
    e.preventDefault();

    const images = document.querySelector('.images');

    while (images.hasChildNodes()) {  
        images.removeChild(images.firstChild);
      };
      
    const searchTerm = form.elements.q.value;

    const config = { headers: { Accept: 'application/json' },params:{q:searchTerm} }
    const res = await axios.get('https://api.tvmaze.com/search/shows',config);

    console.log(res.data);

    showImages(res.data);

    form.elements.q.value = '';

    })

    const showImages = (shows)=>{
        for(let element of shows){
            if(element.show.image){
                const h2 = document.createElement('H2');
                h2.textContent = 'Show: '+ element.show.name;
                const h3 = document.createElement('H3');
                h3.textContent = 'Score: '+ element.score;
                const p = document.createElement('P');
                p.textContent = 'Language: '+ element.show.language;
                const button = document.createElement('BUTTON');
                button.textContent = 'Learn More';
                const a = document.createElement('A');
                a.append(button);
                a.href = element.show.url;
                a.target = '_blank';
                
                const div1 = document.createElement('div');
                div1.classList.add('content');
                div1.append(h2);
                div1.append(h3);
                div1.append(p);
                div1.append(a);

                const img = document.createElement('IMG');
                img.src = element.show.image.medium;

                const imgbx = document.createElement('div');
                imgbx.classList.add('imgbx');
                imgbx.append(img);
                const card = document.createElement('div');
                card.classList.add('card');
                card.append(imgbx);
                card.append(div1);

                img.title = element.show.name;
                document.querySelector('.images').append(card);
            }
            
        }

    }

    // console.log(res.data[1].show.image.original);
    // const img = document.createElement('IMG');
    // img.src = res.data[0].show.image.medium;
    // img.src = "http://static.tvmaze.com/uploads/images/medium_portrait/247/617876.jpg";
    // document.body.append(img);