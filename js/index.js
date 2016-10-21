// JavaScript Document
var app = angular.module('temporada', []);
app


.constant('ratingConfig', {
  max: 5,
})

.directive('rating', ['ratingConfig', function(ratingConfig) {
	
    return {
        restrict: 'EA',
        replace: true,
        scope: {
            value: '=',
        },
        template: '<section class="rating"><i ng-repeat="number in range" ng-mouseenter="enter(number)" ng-class="{\'glyphicon glyphicon-star\': number <= val, \'glyphicon glyphicon-star-empty\': number > val}"></i></section>',
        link: function(scope, element, attrs) {
            var maxRange = angular.isDefined(attrs.max) ? scope.$eval(attrs.max) : ratingConfig.max;

            scope.range = [];
            for(var i = 1; i <= maxRange; i++ ) {
                scope.range.push(i);
            }

            scope.$watch('value', function(value) {
                scope.val = value;
            });

            scope.assign = function(value) {
                scope.value = value;
            }

            scope.enter = function(value) {
                scope.val = value;
            }

            scope.reset = function() {
                scope.val = angular.copy(scope.value);
            }
            scope.reset();

        }
    };
}]);

app.controller('gamesController', function ($scope) {
	
  	$scope.rate1 = 3;
   	$scope.rate2 = 6;
   	$scope.search = "";
	$scope.order = "-stars";
	$scope.selectedIndex = null;
	$scope.selectedgame = null;
	$scope.filters = { };

	$scope.filtergamesByProducer = function(producer){
               $scope.search = producer;
    };
	
	$scope.filtergamesByCategories = function(categories){
               $scope.search = categories;
    };
	
	$scope.filtergamesByPlatform = function(platform){
               $scope.search = platform;
    };
	
	$scope.arrayToString = function(string){
    	return string.join(", ");
	};

	$scope.filter = 'name';
    
    $scope.getFilter = function() {
        var filter = {};
        filter[$scope.filter] = $scope.search;
        return filter;
    };

	$scope.producers = ["Atlus"];
	$scope.categories = ["RPG", "Corrida", "Simulação","Luta","Aventura","Terror" ];
	$scope.platform = ["Nintendo DS", "PSP", "PS2","PC", "Super Nintendo"];
	$scope.stars = [1,2,3,4,5]
	$scope.games = [

		{
			"name": "Phoenix Wright: Ace Attorney Trials and Tribulations",
			"premiere": "2012",
			"image": "http://crit.home.xs4all.nl/andrea/images-portfolio/trials-and-tribulations.jpg",
			"imagelarger": "http://crit.home.xs4all.nl/andrea/images-portfolio/trials-and-tribulations_larger.jpg",
			"stars": "3",
			"comment": "Terceiro jogo da franquia Ace Attorney, além de ser meu favorito dentre os que joguei. Para quem não conhece Ace Attorney, trata-se de um jogo no qual você é um advogado de defesa, tentando livrar seus clientes de acusações de assassinato. Trata-se de uma obra prima, com personagens extremamente carismáticos e memoráveis, incluindo aqueles com aparições breves. Nesta edição em especial, me emocionei bastante com a trama, que foi especialmente intensa."
		},
		{
			"name": "Atelier Iris 2 - The Azoth of Destiny",
			"premiere": "2011",
			"platform": "PS2",
			"image": "http://crit.home.xs4all.nl/andrea/images-portfolio/atelier.png",
			"imagelarger": "http://crit.home.xs4all.nl/andrea/images-portfolio/atelier_larger.jpg",
			"stars": "5",
			"comment": "A melhor definição deste jogo é: Fofo. Personagens fofos, história fofa, gráficos fofos, trilha sonora, e por aí vai. Tanto este quanto o primeiro jogo da franquia me deixaram ansiosa pelo PS3 para jogar Atelier Iris 3. Um dia essa fofura vemnimim."
		},
		{
			"name": "Final Fantasy XII",
			"premiere": "2008",
			"image": "http://crit.home.xs4all.nl/andrea/images-portfolio/ff12.jpg",
			"imagelarger": "http://crit.home.xs4all.nl/andrea/images-portfolio/ff12_larger.jpg",
			"stars": "3",
			"comment": "Este jogo me deixou boquiaberta na animação de abertura. Foi amor à primeira vista. Apesar da história não ter sido isso tudo, eu simplesmente amei a jogabilidade, os mapas, os side quests. Meu perfil de gamer é exploração, adoro novos cenários, e esse jogo me ofereceu uma jornada sem igual. Lindo e divertido!"
		},
		{
			"name": "Grand Theft Auto: San Andreas",
			"premiere": "2001",
			"situation": "Completa",
			"image": "http://crit.home.xs4all.nl/andrea/images-portfolio/gta.png",
			"imagelarger": "http://crit.home.xs4all.nl/andrea/images-portfolio/gta_larger.png",
			"stars": "4",
			"comment": "Em pensar que só comprei esse jogo porque tinha meu nome no título. É, quando eu o comprei, não sabia nada sobre ele, e quando comecei a jogar, achei díficil. Eu ainda estava me acostumando ao analógico, já que ele foi um dos primeiros jogos de PS2 que tive, e eu não cheguei a ter um PS1. Mas assim que me acostumei aos botões, foi puro amor. Ao contrário de muitas pessoas, eu jogava de forma mais séria a maior parte do tempo, completando missões. E eu amei tudo: a exploração dos cenários, as possibilidades dentro e fora das missões, os personagens, a história, a ação, o final, as músicas..."
		},
		{
			"name": "Need for Speed Most Wanted",
			"premiere": "2005",
			"situation": "Em Andamento",
			"image": "http://crit.home.xs4all.nl/andrea/images-portfolio/needforspeed.jpg",
			"imagelarger": "http://crit.home.xs4all.nl/andrea/images-portfolio/nfs_larger.jpg",
			"stars": "1",
			"comment": "Ao se ver alguns dos jogos japoneses da minha lista, pode-se ter a impressão de que sou uma garota fofa. Bem, você não pensaria assim se me visse jogando NFSMW. O número de palavrões/minuto é impressionante. Eu não ligo tanto quando perco em jogos, mas por alguma razão, corrida não é bem assim. Quero ser a mais rápida, sempre. SAI DA FRENTE SEU FILHO DA #$@#$@¨%&"
		},
		{
			"name": "Mortal Kombat: Deception",
			"premiere": "2008",
			"image": "http://crit.home.xs4all.nl/andrea/images-portfolio/mk.jpg",
			"imagelarger": "http://crit.home.xs4all.nl/andrea/images-portfolio/mk_larger.jpg",
			"stars": "3",
			"comment": "Não sou muito chegada em jogos de lutas. Acho-os repetitivos, e basicamente, você ganha por apertar botões na ordem certa de maneira mais rápida. Gosto de jogos envolventes, com história profunda, personagens interessantes e... Aí que vem a reviravolta: Mortal Kombat Deception tem o modo Konquest, que é basicamente um RPG no mundo de MK. E eu A-M-E-I esse RPG. A história é fascinante, com um final surpreendente. E há muita exploração de cenários e side quests, tudo que eu preciso pra ser feliz <3"
		},
		{
			"name": "Shadow Hearts: Covenant",
			"premiere": "2014",
			"image": "http://crit.home.xs4all.nl/andrea/images-portfolio/shadowhearts.jpg",
			"imagelarger": "http://crit.home.xs4all.nl/andrea/images-portfolio/shadowhearts_larger.jpg",
			"stars": "3",
			"comment": "Bate uma certa emoção quando a gente lembra de certos jogos. A franquia Shadow Hearts é assim pra mim: uma nostalgia boa, um sentimento difícil de explicar. De forma geral os jogos da franquia tem um tema mais sombrio e pesado, que ao mesmo tempo fica mais leve com personagens carismáticos. E eu não poderia deixar de citar a exploração, claro! Os jogos se passam no nosso mundo, com cenários existentes, ainda que modificados. Até mesmo os personagens existiram! Gostei da franquia toda, mas definitivamente, o segundo jogo é o mais emocionante da série."
		},
		{
			"name": "Shin Megami Tensei: Persona 4",
			"premiere": "2008",
			"platform": "PS2",
			"image": "http://crit.home.xs4all.nl/andrea/images-portfolio/persona.jpg",
			"imagelarger": "http://crit.home.xs4all.nl/andrea/images-portfolio/persona_larger.jpg",
			"producer": "Atlus",
			"categories":[ "RPG"],
			"stars": "5",
			"comment": "Persona! Essa trilha sonora pop é bem diferente da normal em RPGs, mas combinam com o cenário de High School e... Hey! Eu gosto. Personagens carismáticos, exploração legal (mas poderia ser melhor), definitivamente amei o sistema de batalha e os summons. Eu iniciei a série por Persona 3, outro jogo que gostei muito fora a chata da Yukari (mas Mitsuru é amor pra sempre), e devo confessar que invocar demônios é bem legal. Mas em Persona 3 você o fazia atirando na própria cabeça :D Um jogo muito popular com as mães de todo o planeta, tenho certeza."
		},
		{
			"name": "Super Bomberman",
			"premiere": "1994",
			"platform": "Super Nintendo",
			"image": "http://crit.home.xs4all.nl/andrea/images-portfolio/bomberman.png",
			"imagelarger": "http://crit.home.xs4all.nl/andrea/images-portfolio/bomberman_larger.jpg",
			"producer": "Hudson Soft",
			"categories":[ "ação"],
			"stars": "4"
		},
		{
			"name": "Crusader Kings II",
			"premiere": "2015",
			"image": "http://crit.home.xs4all.nl/andrea/images-portfolio/ck.png",
			"imagelarger": "http://crit.home.xs4all.nl/andrea/images-portfolio/ck_larger.jpg",
			"stars": "3"
		},
		{
			"name": "The Sims: Medieval",
			"platform": "PC",
			"image": "http://crit.home.xs4all.nl/andrea/images-portfolio/medieval.jpg",
			"imagelarger": "http://crit.home.xs4all.nl/andrea/images-portfolio/medieval_larger.jpg",
			"producer": "Netflix",
			"categories":[ "drama"],
			"stars": "4"
		},
		{
			"name": "Super Mario All Stars",
			"platform": "Super Nintendo",
			"image": "http://crit.home.xs4all.nl/andrea/images-portfolio/mario.png",
			"imagelarger": "http://crit.home.xs4all.nl/andrea/images-portfolio/mario_larger.jpg",
			"stars": "5"
		},
		{
			"name": "Yu-Gi-Oh!",
			"platform": "PSP",
			"image": "http://crit.home.xs4all.nl/andrea/images-portfolio/yugioh.jpg",
			"imagelarger": "http://crit.home.xs4all.nl/andrea/images-portfolio/yugioh_larger.jpg",
			"stars": "4"
		},
		
		]
	});