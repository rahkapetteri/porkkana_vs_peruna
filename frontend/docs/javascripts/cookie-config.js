
  var cookieconsent = initCookieConsent();
  cookieconsent.run({
      autorun : true, 							
      current_lang : 'fi',	
      autoclear_cookies : true,	
      page_scripts: true,
      remove_cookie_tables: true,
      
      onAccept: function(cookie){				

      },

      onChange: function(cookie, changed_preferences){
    
                if(changed_preferences.indexOf('analytiikka') > -1){

                if(!cookieconsent.allowedCategory('analytiikka')){

                    window.dataLayer = window.dataLayer || [];
                    function gtag() { dataLayer.push(arguments); }
                    gtag('consent', 'default', {
                        'ad_storage': 'denied',
                        'analytics_storage': 'denied'
                    });
                }
                }

      },
      
      languages : {
          fi : {	
              consent_modal : {
                  title :  "Käytämme evästeitä taataksemme hyvän selailukokemuksen. 🍪",
                  description : 'Evästeet sisältävät sivuston toiminnallisuuden kannalta pakolliset toiminnot sekä kävijäanalytiikan. Voit ottaa käyttöön kaikki evästeet, pelkät välttämättömät evästeet tai voit <a class="cc-link" data-cc="c-settings">tarkastella asetuksiasi</a>."',
                  primary_btn: {
                      text: 'Hyväksyn kaikki!',
                      role: 'accept_all',
                  },
                  secondary_btn: {
                      text : 'Vain pakolliset',
                      role : 'accept_necessary'	
                  },
              },
              settings_modal : {
                  title : 'Evästevalinnat',
                  save_settings_btn : "Tallenna asetukset",
                  accept_all_btn : "Hyväksyn kaikki!",
                  close_btn_label: "Sulje evästeasetukset",
                  cookie_table_headers : [
                      {col1: "Nimi" }, 
                      {col2: "Domain" }, 
                      {col3: "Voimassaolo" }, 
                      {col4: "Selite" }, 
                      {col5: "Tyyppi" }
                  ],
                  blocks : [
                      {
                          title : "Evästekäytänteet",
                          description: 'Keräämme tietoa sivuston kävijöistä evästeiden sekä analytiikkapalvelun (Google Analytics ja Microsoft Clarity) avulla. Näitä tietoja kerätään sivuston toimivuuden ja laadun takaamiseksi.'
                      },{
                          title : "Toiminnalliset evästeet",
                          description: 'Nämä evästeet sisältävät olennaisia tietoja sivuston toimivuuden takaamiseksi',
                          toggle : {
                              value : 'necessary',
                              enabled : true,
                              readonly: true
                          }
                      },{
                          title : "Analytiikkaevästeet",
                          description: 'Nämä evästeet keräävät tietoa kuinka käytät verkkosivua, millä sivuilla vierailet ja mitä linkkejä olet klikannut.',
                          toggle : {
                              value : 'analytiikka',
                              enabled : false,
                              readonly: false
                          },
                          cookie_table: [
                              {
                                  col1: '^_ga',
                                  col2: 'google.com',
                                  col3: '2 vuotta',
                                  col4: 'Käytetään käyttäjien erottamiseen.' ,
                                  col5: 'Pysyvä eväste',
                                  is_regex: true
                              },
                              {
                                  col1: '^_ga_',
                                  col2: 'google.com',
                                  col3: '2 vuotta',
                                  col4: 'Käytetään istunnon tilan ylläpitämiseen.' ,
                                  col5: 'Pysyvä eväste',
                                  is_regex: true
                              },
                              {
                                  col1: '_gid',
                                  col2: 'google.com',
                                  col3: '1 päivä',
                                  col4: 'Käytetään käyttäjien erottamiseen.' ,
                                  col5: 'Pysyvä eväste'
                              },
                              {
                                  col1: '^_cl',
                                  col2: 'clarity.microsoft.com',
                                  col3: '1 päivä',
                                  col4: 'Käytetään käyttäjien erottamiseen.' ,
                                  col5: 'Pysyvä eväste',
                                  is_regex: true
                              }
                          ]
                      },
                      
                      
                      {
                          title : "Lisätiedot",
                          description: "Käytämme tällä sivustolla evästeitä sivuston analysointiin. Kun vierailet verkkosivuillamme, sivustomme saattaa ajoittain tallentaa laitteellesi evästeitä (cookies). Evästeet ovat pieniä tekstitiedostoja, jotka tallentuvat kävijän tietokoneelle ja tallentavat dataa. Yksinkertaisimmillaan eväste on tiedosto, joka kertoo verkkosivustolle, oletko sulkenut evästeilmoituksen hyväksymällä evästeitä. Ilman näitä tiedostoja kävijäanalytiikka ja sivuston täysi toiminnallisuus eivät olisi mahdollisia. <br><br>Kävijällä on mahdollisuus estää evästeiden käyttö sivustolle saapuessaan. Samalla kävijä hyväksyy, että joidenkin palveluiden osalta evästeiden käytön estäminen saattaa vaikuttaa sivujen toiminnallisuuteen.<br><br>Sivuston seurantaan käytämme Google Analytics ja Microsoft Clarity -palveluita. Seurannan tarkoitus on kerätä tilastotietoa esimerkiksi sivun kävijämääristä ja suosituimmista sisällöistä. Analytiikkatietoja käytetään käyttökokemuksen parantamiseksi. <br><br><a href='https://policies.google.com/privacy?hl=fi'>Tutustu Googlen tietosuojaselosteeseen tästä</a> <br><br> <a href='https://privacy.microsoft.com/fi-fi/privacystatement'>Tutustu Microsoftin tietosuojaselosteeseen tästä.</a>" ,
                      }
                  ]
              }
          }
      }
  });