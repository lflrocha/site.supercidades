app.controller('TelaInicialCtrl',

function($scope) {           
    
    carregarTela();
    
    $scope.idiomaIngles = function (){
        
        idiomaIngles();
        
    }
    
    $scope.idiomaPortugues = function (){
        
        idiomaPortugues();
        
    }
    
    $scope.idiomaEspanhol = function (){
        
        idiomaEspanhol();
        
    }
    
    $scope.abrirMenu = function(){
        
        $('.button-collapse').off('click').sideNav({
              menuWidth: 250,
              edge: 'left', 
              closeOnClick: true, 
              draggable: true
            }

        );
        
        $('.button-collapse').sideNav('show');
        
        Materialize.showStaggeredList('#slide-out');
            
    }
    
    $scope.carregarSlider = function (){
        
        $(document).ready(function(){
            $('.slider').slider();
        });
        
    }
    
    $scope.carregarParallax = function (){
        
        $(document).ready(function(){
            $('.parallax').parallax();
        });
        
        $(document).ready(function(){
            $('.tooltipped').tooltip({delay: 50});
        });
        
        $(document).ready(function(){
            $('.modal').modal();
        });
        
    }
    
    $scope.carregarTooltip = function (){
        
        $(document).ready(function(){
            $('.tooltipped').tooltip({delay: 50});
        });
        
    }
    
    function carregarTela(){
        
        idiomaPortugues();
        
        $(document).ready(function(){
            $('.parallax').parallax();
        });
        
        $(document).ready(function(){
            $('.tooltipped').tooltip({delay: 50});
        });
        
        $(".drag-target").on("swipeleft", function () {
              $("#sidenav-overlay").trigger("click");
            });
        
        $(document).ready(function(){
            $('.slider').slider();
        });
                
    }
    
    function idiomaIngles(){
        
        if($scope.inicio == "Home"){
           
            return;
            
        }else{
            
            var $toastContent = $('<span class="valign-wrapper"><img style="height:40px;" src="resources/united-states.png">&nbsp&nbspEnglish</span>');
        
            Materialize.toast($toastContent, 1600,'rounded');
        
        /*---------------------------- Menu ---------------------------------------*/
        
        $scope.inicio =                     "Home";   
        
        $scope.logo =                       "Super Cities - The Game";   
        
        $scope.ranking =                    "About";
        
        $scope.cartas =                     "Cards";
        
        $scope.sobre =                      "Game";
        
        /*---------------------------- Menu ---------------------------------------*/
        
        /*---------------------------- Slider -------------------------------------*/
        
        $scope.comeceJogar =                "Start Game!";
        
        $scope.resumo =                     "The Card Game";
        
        $scope.desenvolvedor =              "In colaboration with IBGE";
        
        $scope.bemVindo =                   "Welcome to Super Cities!";
        
        $scope.anos =                       "Anos";
        
        $scope.resumo =                     "Summary";
        
        $scope.cafe =                       "The game consists on winning the adversary's card";
        
        $scope.apaixonadoHTML =             "The card with the best statistics win!";
        
        $scope.dica =                       "Avaiable on the smartphone";
        
        $scope.tenteMobile =                "Play on the go!";
        
        $scope.contatoSlider =              "Sobre";
        
        /*---------------------------- Slider -------------------------------------*/
        
        /*---------------------------- Tela Inicial -------------------------------*/
        
        $scope.comoJogar =                  "How to Play";
        
        $scope.regra1 =                     "This game compares municipalities according to official IBGE data.";
        
        $scope.regra2 =                     "Your objective is to choose the character of the city in your card with more chances of being superior to that of the opposing card.";
        
        $scope.regra3 =                     "The computer compares the chosen feature with that of the equivalent city and demonstrates the winner.";
        
        $scope.regra4 =                     "The winner accumulates points.";
        
        $scope.qualificacoes =              "The Game";
        
        $scope.linguagens =                 "Avaiable Cards";
        
        $scope.basico =                     "Basic";
        
        $scope.versionamento =              "Versioning";
        
        $scope.tecnologias =                "Technologies";
        
        $scope.teste =                      "Test";
        
        $scope.ferramentas =                "Tools";
        
        $scope.idiomas =                    "Languages";
        
        $scope.portugues =                  "Portuguese";
        
        $scope.ingles =                     "English";
        
        $scope.espanhol =                   "Spanish";
        
        /*---------------------------- Tela Inicial -------------------------------*/
        
        /*---------------------------- Experiencias -------------------------------*/
        
        $scope.informatica =                "Computing";
        
        $scope.periodo =                    "Period";
        
        $scope.ate =                        "until";
        
        $scope.cargo =                      "Function";
        
        $scope.estagiario =                 "Trainee";
        
        $scope.desenvolvimento =            "Development";
        
        $scope.area =                       "Role";
        
        $scope.participacoes =              "Contributions";
        
        $scope.projetos =                   "Projects";
        
        $scope.sisgepiTooltip =             "Intellectual Property Management System";
        
        /*---------------------------- Experiencias -------------------------------*/
        
        /*---------------------------- Formacao -----------------------------------*/
        
        $scope.catolica =                   "Universidade Católica de Brasília (Catholic University of Brasilia)";
        
        $scope.curso =                      "Course";
        
        $scope.sistemasInformacao =         "Information Systems";
        
        $scope.semestre =                   "Semester";
        
        /*---------------------------- Formacao -----------------------------------*/
        
        /*---------------------------- Certificados -------------------------------*/
        
        $scope.cursos =                     "Courses";
        
        $scope.certificado =                "Certificate";
        
        $scope.descricaoAngular =           "build powerful webapps";
        
        $scope.descricaoUnity =             "Mobile Games with Unity: Fun with the Game Engine";
        
        $scope.descricaoJava8 =             "Java 8: Take advantage of the new language features";
        
        $scope.descricaoTesteTDD =          "Test: TDD with Java";
        
        $scope.descricaoSelenium =          "Selenium: Your webapp tested all the way with java";
        
        $scope.descricaoDesignPatternsJava1="Design Patterns Java I: Good Programming Practices";
        
        $scope.descricaoWebHTML1 =          "HTML5 and CSS3 I: Your First Web Pages";
        
        $scope.descricaoWebHTML2 =          "HTML5 and CSS3 II: Leveling up your webpages";
        
        $scope.descricaoLinguagemcSharp =   "C# I: Language Fundamentals";
        
        $scope.descricaoLinguagemPHP =      "PHP e MySQL I: Fundamentals to build a Web System";
        
        $scope.descricaoJavascript =        "JavaScript: Programming on the web language";
        
        $scope.descricaoFlexbox =           "Flexbox: Positioning elements on the screen";
        
        $scope.descricaoUX1 =               "UX: what is user experience?";
        
        $scope.descricaoUX2 =               "UX Strategy: Diverging and tapering ideas";
        
        $scope.descricaoUX3 =               "UX Usability: Make your mobile life easier";
        
        $scope.descricaoUX4 =               "UX Research: Begin to understand the user";
        
        $scope.descricaoUX5 =               "UX Produto: Monitor, measure and test your project";
        
        $scope.descricaoMicrocopy =         "Microcopy: The influence of micro copy on the user experience";
        
        $scope.descricaoEADHackatruck =     "EAD Hackatruck - Concepts and Fundamentals SWIFT";
        
        $scope.descricaoHackatruck =        "Presential Hackatruck Development SWIFT";
        
        /*---------------------------- Certificados -------------------------------*/
        
        /*---------------------------- Contato ------------------------------------*/
        
        $scope.redesSociais =               "Social Media";
        
        /*---------------------------- Contato ------------------------------------*/
        
        /*---------------------------- Footer -------------------------------------*/
        
        $scope.footer =                     "Created with";
        
        $scope.footer2 =                    "© 2017 Created and Developed for the IBGE Hackathon CPBSB";
        
        /*---------------------------- Footer -------------------------------------*/
            
        }
        
        
    }
    
    function idiomaPortugues(){
        
        if($scope.inicio == "Início"){
           
            return;
            
        }else{
            
        if($scope.inicio != undefined){

            var $toastContent = $('<span class="valign-wrapper"><img style="height:40px;" src="resources/brazil.png">&nbsp&nbspPortuguês PT-BR</span>');

            Materialize.toast($toastContent, 1600, 'rounded');

        }
        
        /*---------------------------- Menu ---------------------------------------*/
        
        $scope.inicio =                     "Início";   
        
        $scope.logo =                       "Super Cidades - O Jogo";   
        
        $scope.ranking =                    "Sobre";
        
        $scope.cartas =                     "Cartas";
        
        $scope.sobre =                      "Jogo";
        
        /*---------------------------- Menu ---------------------------------------*/
        
        /*---------------------------- Slider -------------------------------------*/
        
        $scope.comeceJogar =                "Comece a Jogar!";
        
        $scope.resumo =                     "O Jogo das Cartas";
        
        $scope.desenvolvedor =              "Em colaboração com o IBGE";
        
        $scope.bemVindo =                   "Bem Vindo a Super Cidades!";
        
        $scope.anos =                       "Anos";
        
        $scope.resumo =                     "Resumo";
        
        $scope.cafe =                       "O jogo consiste em vencer a carta do inimigo";
        
        $scope.apaixonadoHTML =             "A carta com as melhores estatísticas vence!";
        
        $scope.dica =                       "Jogue do seu Celular";
        
        $scope.tenteMobile =                "Acesse esse jogo no mobile!";
        
        $scope.contatoSlider =              "Conheça o Ranking";
        
        /*---------------------------- Slider -------------------------------------*/
        
        /*---------------------------- Tela Inicial -------------------------------*/
        
        $scope.comoJogar =                  "Como Jogar";
        
        $scope.regra1 =                     "Este jogo compara municípios de acordo com dados oficiais do IBGE.";
        
        $scope.regra2 =                     "Seu objetivo é escolher a característica da cidade na sua carta com mais chances de ser superior ao da carta adversária.";
        
        $scope.regra3 =                     "O computador compara a característica escolhida com a da cidade equivalente e demonstra o ganhador.";
        
        $scope.regra4 =                     "O ganhador acumula pontos.";
        
        $scope.qualificacoes =              "Conheça o Jogo";
        
        $scope.linguagens =                 "Cartas Disponíveis";
        
        $scope.basico =                     "Básico";
        
        $scope.versionamento =              "Versionamento";
        
        $scope.tecnologias =                "Tecnologias";
        
        $scope.teste =                      "Teste";
        
        $scope.ferramentas =                "Ferramentas";
        
        $scope.idiomas =                    "Idiomas";
        
        $scope.portugues =                  "Português";
        
        $scope.ingles =                     "Inglês";
        
        $scope.espanhol =                   "Espanhol";
        
        /*---------------------------- Tela Inicial -------------------------------*/
        
        /*---------------------------- Experiencias -------------------------------*/
        
        $scope.informatica =                "Informática";
        
        $scope.periodo =                    "Período";
        
        $scope.ate =                        "até";
        
        $scope.cargo =                      "Cargo";
        
        $scope.estagiario =                 "Estagiário";
        
        $scope.desenvolvimento =            "Desenvolvimento";
        
        $scope.area =                       "Área";
        
        $scope.participacoes =              "Contribuições";
        
        $scope.projetos =                   "Projetos";
        
        
        /*---------------------------- Experiencias -------------------------------*/
        
        /*---------------------------- Formacao -----------------------------------*/
        
        $scope.catolica =                   "Universidade Católica de Brasília";
        
        $scope.curso =                      "Curso";
        
        $scope.sistemasInformacao =         "Sistemas da Informação";
        
        $scope.semestre =                   "Semestre";
        
        /*---------------------------- Formacao -----------------------------------*/
        
        /*---------------------------- Certificados -------------------------------*/
        
        $scope.cursos =                     "Cursos";
        
        $scope.certificado =                "Certificado";
        
        $scope.descricaoAngular =           "crie webapps poderosas";
        
        $scope.descricaoUnity =             "Jogos mobile com Unity: Diversão com a Game Engine";
        
        $scope.descricaoJava8 =             "Java 8: Tire proveito dos novos recursos da linguagem";
        
        $scope.descricaoTesteTDD =          "Testes: TDD com Java";
        
        $scope.descricaoSelenium =          "Selenium: Sua webapp testada de ponta a ponta em java";
        
        $scope.descricaoDesignPatternsJava1="Design Patterns Java I: Boas práticas de programação";
        
        $scope.descricaoWebHTML1 =          "HTML5 e CSS3 I: Suas primeiras páginas da Web";
        
        $scope.descricaoWebHTML2 =          "HTML5 e CSS3 II: Turbinando as suas páginas";
        
        $scope.descricaoLinguagemcSharp =   "C# I: Fundamentos da linguagem";
        
        $scope.descricaoLinguagemPHP =      "PHP e MySQL I: Fundamentos para criar um sistema na Web";
        
        $scope.descricaoJavascript =        "JavaScript: Programando na linguagem da web";
        
        $scope.descricaoFlexbox =           "Flexbox: Posicione elementos na tela";
        
        $scope.descricaoUX1 =               "UX: o que é experiência de usuário";
        
        $scope.descricaoUX2 =               "UX Strategy: divergindo e afunilando ideias";
        
        $scope.descricaoUX3 =               "UX Usability: facilite a vida do seu usuário no mobile";
        
        $scope.descricaoUX4 =               "UX Research: Comece a entender o seu usuário";
        
        $scope.descricaoUX5 =               "UX Produto: monitore, mensure e teste o seu projeto";
        
        $scope.descricaoMicrocopy =         "Microcopy: a influência do micro copy na experiência do usuario";
        
        $scope.descricaoEADHackatruck =     "EAD Hackatruck - Conceitos e Fundamentos SWIFT";
        
        $scope.descricaoHackatruck =        "Presencial Hackatruck Desenvolvimento SWIFT";
        
        /*---------------------------- Certificados -------------------------------*/
        
        /*---------------------------- Contato ------------------------------------*/
        
        $scope.redesSociais =               "Redes Sociais";
        
        /*---------------------------- Contato ------------------------------------*/
        
        /*---------------------------- Footer -------------------------------------*/
        
        $scope.footer =                     "Desenvolvido com";
        
        $scope.footer2 =                    "© 2017 Desenvolvido para o Hackathon IBGE #CPBSB";
        
        /*---------------------------- Footer -------------------------------------*/
            
        }
        
    }
    
    function idiomaEspanhol(){
        
        $scope.logo = "Curriculum ES - Breno Prata";     
        
    }
    
});