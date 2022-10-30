# Jessen ruokarähinä 🥕

> Pääset testamaan rähinää suoraan osoitteessa https://jessen-ruokarahina.netlify.app/

Sivusto on toteutettu ei-niin yleisellä tavalla parsimalla Finelin avoimen rajapinnan .csv tiedostot markdown-dokumenteiksi, jotka upotin MkDocsilla rakennettuun sivustoon, jossa pyörii Vuella toteutettu "taistelukenttä". Tämä toimintaa mahdollistaa sivuston käytön ilman aktiivista backendiä ja on tavallaan Jamstack-toteutus. Sivustolla on huomioitu myös tumma/vaalea väriteema ja kilpailijoiden haku taisteluominaisuuksien tutkimista varten.

Käytetyt teknologiat:

1. Vue.js (ruokarähinä toimintalogiikka)
2. MkDocs (sivuston "moottori", jonka päällä toimii eri ruokien haku)
3. CSS
4. HTML
5. Javascript 
6. Python (parsin tällä .csv tiedostot)
7. Jupyter Notebook (data-analytiikan käyttöliittymä Pythonille, jonka kautta hyödynsin Pythonia)

Aloitin ruokarähinän parsimalla sivuston backendin tiedostot (taisteluominaisuudet) Pythonilla Finelin avoimesta datasetistä (datasetit löytyvät polusta: [/create_documents/Fineli_Rel20/](/create_documents/Fineli_Rel20/)) Hyödynsin Jupyter Notebookkia, koska olen tottunut käyttämään sitä ajoilta kun olin töissä data-analytiikan ja koneoppimisen parissa.

Suodatin ruokakategorioiksi seuraavat:

* Omenahedelmät
* Sitrushedelmät
* Muut hedelmät
* Marjat
* Kaalit
* Sienet
* Peruna
* Juuri- ja mukulakasvit


 Parsintatiedosto löytyy polusta [/create_documents/parsefineli-docs.ipynb](/create_documents/parsefineli-docs.ipynb)

Tämän jälkeen ajoin tiedostot MkDocsin läpi, jonka kautta muodostin yksinkertaisen hakuindeksin [/search_index/parse_search_index.ipynb](/search_index/parse_search_index.ipynb). Muokkasin haluamani ominaisuudet indeksiin ("taisteluominaisuudet") ja tämän jälkeen tiedostot sekä hakuominaisuus oli valmis jonka avulla pystyy etsimään vihanneskilpailijoita. Tässä vaiheessa ei ole vielä mitään "ruokarähinää", ainoastaan tiedostot tutkittavassa muodossa frontendissä.

Datan muodostuksen jälkeen laitoin MkDocsilla ympäristön pyörimään ja aloin kasaamaan Vuella "ruokarähinää". Vuella haen aiemmin muodostamani indeksin. Indeksin haun jälkeen lisään indeksin kilpailijavaihtoehdot valintalaatikoihin ja kilpailun aloittamisen jälkeen kaksi intervalli funktiota alkaa pyörimään kilpailijoiden "hitaus" ominaisuuden nopeudella. Millisekunneilla kilpailun pystyy pyöräyttämään nopeasti läpi valituilla hahmoilla. Hahmot hyökkäävät toistensa kimppuun asynkronisesti hyökkäysvoimalla jota hidastaa puolustusvoima. Kilpailun syöte tulostuu ruudulle.

Vue.js toteutus löytyy polusta: [/frontend/overrides/home.html](/frontend/overrides/home.html)

> Vue.js ja axios.js kirjastot lisätään CDN:nnän kautta, mikä ei ole optimaalisin tapa, mutta käytössä ajanpuutteen vuoksi

Lisäsin [instant.pagen](https://instant.page/ ) linkkien esilatausta varten.