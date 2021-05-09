console.log('Si tu vois ce message, alors tu es un(e) tricheur(euse) :D')
//Déclencheurs & animations
  //Déclenchement Animations départ
  $('#startBtn').on('click', function() {
    $('#conteneurJeu').addClass('started');
    jeu()
  })  
  //Effet de clique du bouton
$('#startBtn')
  .mousedown(function() {
  $(this).css({
    'filter': 'drop-shadow(5px 5px 5px rgb(51, 6, 15))',
  })
})
  .mouseup(function() {
    $(this).css({
    'filter': 'drop-shadow(10px 15px 10px rgb(51, 6, 15))',
  })
})
$('#guessBtn')
  .mousedown(function() {
  $(this).css({
    'filter': 'drop-shadow(5px 5px 5px rgb(51, 6, 15))',
  })
})
  .mouseup(function() {
    $(this).css({
    'filter': 'drop-shadow(10px 15px 10px rgb(51, 6, 15))',
  })
})
$('#resumeBtn')
  .mousedown(function() {
  $(this).css({
    'filter': 'drop-shadow(5px 5px 5px rgb(51, 6, 15))',
  })
})
  .mouseup(function() {
    $(this).css({
    'filter': 'drop-shadow(10px 15px 10px rgb(51, 6, 15))',
  })
}) 

//Déclarations des variables
let target
let guess
let tentativesRestantes
let victoires = 0
//Jeu
function jeu() {
  $('#affichageTentatives').text('10')
  target = (Math.floor(Math.random() * 100));
  tentativesRestantes = 10;
  console.log($(target), $(tentativesRestantes))

  $('#guessBtn').on('click', function() {
    guess = parseInt($('#guessField').val());
    
      if (guess == target && tentativesRestantes > 0) {
      $('#resultat').text(`Bravo,
      vous avez deviné,`);
      $('#nombreADeviner').text(`${target}`);
      $('#coups').text(11 - tentativesRestantes)
      $('#hideScore').css({'pointer-events': 'all'});
      $('#guessField').val('')
      victoires+= 1
      console.log(victoires)
      $('#victoires').text(`${victoires}`)
      console.log(guess, tentativesRestantes)
      score()     
    } else if (guess < target) {
      tentativesRestantes-=1
      $('#infos').text('C\'est plus!');
      $('#guessField').val('')
      console.log('C\'est plus' + tentativesRestantes + 'Deviner' +  target)    
    } else if (guess > target) {
      tentativesRestantes-=1
      $('#infos').text('C\'est moins!');
      $('#guessField').val('')
      console.log('C\'est moins!' + tentativesRestantes + 'Deviner' +  target)   
    } else if (tentativesRestantes === 1) {
      $('#resultat').text('Perdu ! Il fallait trouver:');
      $('#nombreADeviner').text(`${target}`);
      $('#hideScore').css({'pointer-events': 'all'});
      $('#guessField').val('')
      victoires = 0
      $('#victoires').text(`${victoires}`)
      console.log(tentativesRestantes)    
      score()     
    }
    $('#affichageTentatives').text(tentativesRestantes)
  })
  //Affichage du score
  function score() {
    $('#hideScore').addClass('score');
  }
}

//Relancement du jeu
$('#resumeBtn').on('click', function(){
  $('#conteneurJeu').addClass('hideScore')
  $('#infos').text('')
  $('#hideScore').css({'pointer-events': 'none'})
  setTimeout(function(){$('#hideScore').removeClass('score')}, 600)
  setTimeout(function(){$('#conteneurJeu').removeClass('hideScore')}, 600)
  newGame()
})
//
function newGame() {
  $('#affichageTentatives').text('10')
  target = (Math.floor(Math.random() * 100));
  tentativesRestantes = 10;
  console.log($(target), $(tentativesRestantes))

  $('#guessBtn').on('click', function() {
    guess = parseInt($('#guessField').val());
    if (tentativesRestantes == 0) {
      $('#resultat').text('Perdu ! Il fallait trouver:');
      $('#nombreADeviner').text(`${target}`);
      $('#hideScore').css({'pointer-events': 'all'});
      $('#guessField').val('')
      console.log(tentativesRestantes)    
      score()     
    } else if (guess == target) {
      $('#resultat').text(`Bravo,
      vous avez deviné,`);
      $('#nombreADeviner').text(`${target}`);
      $('#hideScore').css({'pointer-events': 'all'});
      $('#guessField').val('')
      console.log(guess, tentativesRestantes)
      score()     
    } else if (guess < target) {
      tentativesRestantes-=1
      $('#infos').text('C\'est plus!');
      $('#guessField').val('')
      console.log('C\'est plus' + tentativesRestantes + 'Deviner' +  target)    
    } else if (guess > target) {
      tentativesRestantes-=1
      $('#infos').text('C\'est moins!');
      $('#guessField').val('')
      console.log('C\'est moins!' + tentativesRestantes + 'Deviner' +  target)   
    } 
    
    $('#affichageTentatives').text(tentativesRestantes)
  })
    //Affichage du score
    function score() {
      $('#hideScore').addClass('score');
    }
  }