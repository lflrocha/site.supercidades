(function () {
    "use strict";
    
    app.controller('gameController', gameController);
    
    gameController.$inject = ['$scope', 'apiFactory','$route'];
    
    function gameController ($scope, apiFactory,$route) {
        var allCards = apiFactory.getCards();
        
        allCards = refactorKeys(allCards);
        
        $scope.nomeJogador = "Você";
        
        $scope.human = {
            id: 1,
            name: $scope.nomeJogador,
            deck: allCards[0]
        }
        
        $scope.computer = {
            id: 2,
            name: 'IBGE',
            deck: allCards[1]
        }
        
        $scope.esconderCarta = true;
        $scope.placarHuman = 0;
        $scope.placarComputer = 0;
        $scope.qtdPartidas = 10;
        
        recuperarCarta(1);
        recuperarCarta(2);
        
        
        $scope.carregarModal = function () {
            
            $(document).ready(function(){
            $('.modal').modal({dismissible: false});
            
            $('#modalInputNome').modal('open');
            });
    
        }
        
        function recuperarCarta(numero) {
            if(numero == 1){
                
                $scope.cartaHumano = $scope.human.deck[Math.floor(Math.random() * 9 + 0)];
                    
            }else{
                
                $scope.cartaComputador = $scope.computer.deck[Math.floor(Math.random() * 9 + 0)];
                
            }
            
            
        }
        
        $scope.validarNome = function () {
            
            if($scope.human.name.length == 0){
                
                $scope.human.name = "Você";
                
            }
            
            $('#modalInputNome').modal('close');
            
        }
        
        $scope.calcularResultadoPartida = function(cardHuman, cardPc,feature){
            
            if($scope.desabilitarMatch){
                return;
            }
            
            $scope.esconderCarta = false;
            
            var dados = calcularResultado(cardHuman,cardPc);
            
            $scope.opcao = feature;
            
            if(dados.winner != 0){
             
                Materialize.toast(dados.winner.name + " Venceu!", 3000, 'rounded');
                
                if(dados.winner.name == $scope.human.name){
                    
                    $scope.placarHuman = $scope.placarHuman + 1;
                    
                }else{
                    
                    $scope.placarComputer = $scope.placarComputer + 1;
                    
                }

                
            }else{
                
                $scope.mensagemGame = "Houve um Empate!";
                
            }
            
            if($scope.qtdPartidas == $scope.placarHuman || $scope.qtdPartidas == $scope.placarComputer){
                
                $scope.finalizarPartida;
                
            }
            
            $scope.desabilitarMatch = true;
            $scope.opacidadeCarta = 0.8;
            
        }
        
        $scope.proximaRodada = function () {
            
            recuperarCarta(1);
            recuperarCarta(2);
            $scope.desabilitarMatch = false;
            $scope.esconderCarta = true;
            $scope.mensagemGame = "Selecione uma opção.";
            window.scrollTo(0,0);
            $scope.opacidadeCarta = 1;
            
        }
        
        $scope.finalizarPartida = function () {
            
            if($scope.placarComputer > $scope.placarHuman){
                
                $scope.winnerGame = "COMPUTADOR venceu o jogo com " + $scope.placarComputer + " pontos!";
                
            }else if($scope.placarComputer < $scope.placarHuman){
                
                $scope.winnerGame = $scope.human.name.toUpperCase() + " venceu o jogo com " + $scope.placarHuman + " pontos!";
                
            }else{
                
                $scope.winnerGame =" Houve um Empate!";
                
            }
            
            $('#modalEndGame').modal('open');
            
        }
        
        function calcularResultado(cardHuman, cardPc) {
            
            var winner;
            
            if (cardHuman > cardPc) {
                winner = $scope.human; // humano ganha
            } else if (cardHuman < cardPc) {
                winner = $scope.computer; // pc ganha
            } else {
                winner = 0; // empate
            }
            
            return {
                winner: winner,
                cards:[cardHuman, cardPc]
            };
        };
        
        // guarda os resultados dos jogos calculados por $scope.match()
        // padrão de cada item da array: {winner: playerId, feature: métrica comparada, cards: [cartaHumano, cartaPc]}
        // em caso de empate: playerId == 0
        $scope.matchResults = [];
        
        
        // calcula o resultado do jogo
        // conta quantas vezes cada player ganhou
        $scope.gameResult = function () {
            var winner;
            var scores = [];
            var largestScore = 0;
            
            $scope.matchResults.forEach(function (match) {
                // só computa o que não for empate
                if (match.winner != 0) {
                    scores[match.winner] = scores[match.winner] ? scores[match.winner]++ : 1;
                }
            });
            
            if (scores[1] > scores[2]) {
                return 1;
            } else if (scores[1] < scores[2]) {
                return 2;
            } else {
                return 0;
            }
        };
        
        $scope.recarregarJogo = function () {
        
            $route.reload();
            
            $('#modalEndGame').modal('close');
            
        }
        
    }
    
    
    // Refatora as keys do campo "dados" de cada carta para melhorar legibilidade
    function refactorKeys (decks) {
        return decks.map(function (deck) {
            return deck.map(function (card) {
                return {
                    'Cidade': card.cidade,
                    'UF': card.uf,
                    'Dados': {
                        'Esgotamento': Number(card.dados.esgotamento),
                        'PopulacaoEstimada': Number(card.dados.pop_estimada),
                        'IDH': Number(card.dados.idh),
                        'SalarioMedio': Number(card.dados.salario_medio),
                        'Urbanizacao': Number(card.dados.urbanizacao),
                        'Arborizacao': Number(card.dados.arborizacao)
                    }
                };
            });
        });
    }
})();
