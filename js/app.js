const app = {

    questions: [
        'J’ai souvent réussi à un test ou un une tâche, même si j’avais peur de ne pas réussir avant de commencer.',
        'Je peux donner l’impression que je suis plus compétent(e) qu’en réalité.',
        'J’évite, si possible, les évaluations et je crains que les autres m’évaluent.',
        'Quand les gens me félicitent pour quelque chose que j’aurais accompli, j’ai peur de ne pas être capable de rester à la hauteur de leurs attentes, la prochaine fois.',
        'Il m’arrive de penser que j’ai obtenu ma position actuelle ou ma réussite actuelle parce que je me trouvais au bon endroit au bon moment ou parce que j’ai rencontré les bonnes personnes.',
        'J’ai peur que les gens qui sont importants pour moi découvrent que je ne suis pas aussi compétent(e) que ce qu’ils pensent.',
        'Je me souviens plus facilement des moments où je n’ai pas été le/la meilleure par rapport à ceux où j’ai vraiment réussi.',
        'Je réussis rarement un projet ou une tâche aussi bien que ce que j’aurais voulu.',
        'J’ai l’impression ou je crois que les réussites dans ma vie ou dans mon job sont dû à une erreur.',
        'Il m’est difficile d’accepter les compliments ou félicitations qui concernent mon intelligence ou mes accomplissements.',
        'Je pense que mes succès sont dus à une sorte de chance.',
        'Je suis déçu(e) de mes accomplissements actuels et je pense que j’aurais pu faire plus.',
        'Je suis effrayé(e) que les gens découvrent mon manque de connaissances et de compétences.',
        'Lors d’une nouvelle mission ou tâche, j’ai peur d’échouer alors que je j’ai tendance à réussir ce que j’entreprends.',
        'Quand je réussi quelque chose et que je reçois de la reconnaissance pour ce que j’ai accompli, j’ai des doutes quant à mes capacités à réussir à nouveau.',
        'Si je reçois des compliments et de la reconnaissance pour ce que j’ai accompli, j’ai tendance à minimiser l’importance de ce que j’ai fait.',
        'Je compare mes capacités à celles des autres et je pense qu’ils sont, peut-être, plus intelligents que moi.',
        'Je m’inquiète de ne pas réussir un projet ou une évaluation, alors que les gens qui m’entourent se montrent très confiants sur le fait que je réussisse.',
        'Si je dois être promu(e) ou que je dois recevoir une marque de reconnaissance de quelque sorte, j’hésite à en parler aux autres jusqu’à temps que ce soit certain.',
        'Je me sens mal et découragé(e) si je ne suis pas le/la « meilleur(e) » ou au minimum « remarquable » dans les situations de compétitions.'
    ],

    score: [],

    start: function() {
        buttonStart = document.getElementById('startBtn');
        buttonStart.addEventListener('click', app.handleStartClick);
    },

    handleStartClick: function() {

        questionsListElement = document.getElementById('questionsList');

        for (let question = 0; question < app.questions.length; question++ ) {
            questionsListElement.innerHTML += `
            <div id="question" class="question">
                <label for="question${question}">${app.questions[question]}</label></br>
                <select name="question${question}" id="question${question}">
                    <option value="">--Votre choix--</option>
                    <option value="1">Pas du tout</option>
                    <option value="2">Rarement</option>
                    <option value="3">Parfois</option>
                    <option value="4">Souvent</option>
                    <option value="5">Tout le temps</option>
                </select>
            </div>   
            `;
        };
        
        submitBtnZoneElement = document.getElementById('submitBtnZone');
        submitBtnZoneElement.innerHTML = `
            <button id="submitBtn" type="button">Voir résultat</button>
        `;
      
        app.submit();

    },

    submit: function() {

        buttonSubmitElement = document.getElementById('submitBtn');
        buttonSubmitElement.addEventListener('click', app.handleSubmitClick);
    },

    handleSubmitClick: function() {

        app.score = [];

        allAnswers = true;

        defaultAnswer = null;

        for (let answer = 0; answer < app.questions.length; answer++) {
            
            response = Number(document.getElementById(`question${answer}`).value);

            if (response === 0) {
                allAnswers = false;
                defaultAnswer = answer + 1;
                break;
            } else {
                app.score.push(response);
            }

        };

      
        if (allAnswers) {
            app.displayScore();
        } else {
            alert(`Vous devez répondre à toutes les questions. Il vous manque la question n° ${defaultAnswer}`);
            app.submit();
        }

    },

    displayScore: function() {
        
        finalScore = app.score.reduce(function(accumulateur, valeurCourante){
            return accumulateur + valeurCourante;
        });

        if (finalScore <= 40) {Interpretation = 'Vous vivez faiblement l’expérience du sentiment d’imposture.'};
        if (finalScore > 40 && finalScore <= 60) { Interpretation = 'Vous vivez modérément l’expérience du sentiment d’imposture.'};
        if (finalScore > 60 && finalScore <= 80) {Interpretation = 'vous vivez fréquemment l’expérience de sentiment d’imposture.'};
        if (finalScore > 80) {Interpretation = 'vous vivez intensément l’expérience du sentiment d’imposture.'};

        contentElement = document.getElementById('content');
        
        contentElement.innerHTML = `
        <h2>Interprétation des résultats</h2>
        <p>Le test de l’Imposteur a été développé pour aider les individus à déterminer s’ils ont ou non les caractéristiques correspondant au sentiment d’imposture et si oui dans quelle mesure.</p>
        <p>Après avoir fait le test, il faut additionner le nombre points par réponses pour chaque affirmation.</p>
        <p>Pas du tout = 1point / Rarement = 2 points / Parfois = 3 points / Souvent = 4 points / Tout le temps = 5 points</p>
        
        <ul>
            <li>Si votre score est de 40 ou moins : vous vivez faiblement l’expérience du sentiment d’imposture.</li>
            <li>Si votre score est compris entre 41 et 60 : vous vivez modérément l’expérience du sentiment d’imposture.</li>
            <li>Si votre score est compris entre 61 et 80 : vous vivez fréquemment l’expérience de sentiment d’imposture.</li>
            <li>Si votre score est plus élevé que 80 : vous vivez intensément l’expérience du sentiment d’imposture.</li>
        </ul>

        <P>Plus le score est élevé, le plus fréquemment et sérieusement le Syndrome de l’Imposteur peut interférer dans la vie d’un individu.</p>

        <h2>Votre score est de ${finalScore}</h2>
        <p>${Interpretation}</P>

        <p>Tiré et traduit à partir de « The Impostor Phenomenon: When Success Makes You Feel Like A Fake, p20-22, P.R. Clance, 185 Toronto, Bantham Books. Coyright 1985 Pauline Rose Clance, PhD, ABPP.</p>       
        `;
    },

};


document.addEventListener('DOMContentLoaded', app.start);

