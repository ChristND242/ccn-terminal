const font = 'Doom';

figlet.defaults({ fontPath: 'https://cdn.jsdelivr.net/npm/figlet/fonts' });
figlet.preloadFonts([font], ready);

const formatter = new Intl.ListFormat('FR-fr', {
  style: 'long',
  type: 'conjunction',
});

// const greetings = `
//   _____  _____  _   _                     _____ _          ___  ___     
//  /  __ \\/  __ \\| \\ | |                   |  ___| |         |  \\/  |     
//  | /  \\/| /  \\/|  \\| |  ______  __      _| |__ | | ___ ___ | .  . | ___ 
//  | |    | |    | . \` | |______| \\ \\ /\\ / /  __|| |/ __/ _ \\| |\\/| |/ _ \\
//  | \\__/\\| \\__/\\| |\\  |           \\ V  V /| |___| | (_| (_) | |  | |  __/
//   \\____/ \\____/\\_| \\_/            \\_/\\_/ \\____/|_|\\___\\___/\\_|  |_/\\___|
                                                                        
// `;

const directories = {
    Buts: [
        '',
        '<white>Notre Mission</white>\n\n',
    
        '* <a href="https://congolaisdenanjing.com/">Cliquez ici pour visiter notre site officiel</a> <yellow>CCN</yellow> \n\n',
    
        '<white>Encourager l\'innovation et la technologie</white>\n\n',
    
        `En tant que <yellow>Département Technique</yellow> de cette communauté, notre mission est d'intégrer la <white>technologie et l'innovation</white> dans chaque événement. Cela permet à nos membres de se familiariser avec les outils technologiques, qu'ils soient encore étudiants ou déjà engagés dans le monde professionnel.\n\n`,
    
        `En tant que responsable de ce département, je considère qu'il est de mon devoir d'initier cette dynamique afin que chaque membre puisse développer des compétences qui lui seront bénéfiques à l'avenir.\n\n`,
    
        '<white>Surmonter les défis technologiques</white>\n\n',
    
        `Nous savons que la technologie peut parfois sembler complexe, mais avec un peu de patience et de curiosité, vous serez surpris par ce que vous pouvez accomplir. Notre objectif est d'accompagner chaque membre dans l'acquisition des connaissances de base ou dans l'amélioration de ses compétences, rendant ainsi la technologie plus accessible et intuitive.\n\n`,
    
        '<white>Un engagement pour notre communauté</white>\n\n',
    
        `Ce message est un appel à chacun d'entre nous à <green>donner le meilleur</green> pour cette communauté, non pas en quête de récompense, mais par engagement et responsabilité. Nous le faisons avant tout pour <yellow>notre pays, la République du Congo</yellow>, pour nous-mêmes et pour la communauté que nous représentons fièrement.\n\n`,
    
        `Peu importe la distance, je continuerai à <white>vous encourager et à vous pousser</white> à donner le meilleur, surtout ceux qui font partie de mon département. \n\n`,
    
    
        '<white>Christ. ND</white>\n',
        '<red>Chef du Département Technique, CCN</red>\n\n',
        ''
    ],

    Quiz: [
        '',
        '<white>Description</white>\n\n',
    
        '* <a href="https://congolaisdenanjing.com/">Cliquez ici pour visiter notre site officiel</a> <yellow>CCN</yellow> \n\n',
    
        '<white>Bienvenue au Quiz Game</white>\n\n',
        
        'Ce jeu se compose de 20 questions, chacune avec une limite de temps de 15 secondes. Si vous ne sélectionnez pas de réponse dans le délai imparti, le jeu passera automatiquement à la question suivante et vous ne gagnerez aucun point pour ce tour.\n\n',
    
        `Nos jurés, Will et Prestige, évalueront le pourcentage de joueurs qui réussissent ou échouent. Ce quiz est conçu pour tester vos connaissances sur notre pays, c'est pourquoi nous vous encourageons à jouer de manière équitable, à accepter les résultats et à considérer cette expérience comme une opportunité d’apprentissage et de progression.\n\n`,
    
        'Un immense travail a été réalisé pour donner vie à ce jeu, alors faites-en bon usage en jouant avec intégrité. Au nom du département technique de CCN, nous vous souhaitons bonne chance et espérons que vous passerez un excellent moment ! 🎉\n\n',

        '                                              <yellow>Scannez le code QR ci-dessous pour accéder au jeu</yellow> 👇🏿 \n\n',
    
        '<img src="./assets/quiz_code.png" alt="Quiz Game Image" style="display: block; margin: 0 auto; width: 30%; height: auto;"/>\n\n',
        
        ''
    ].flat(),

    Second_jeu: [
        '',
        '<white>Description</white>\n\n',
    
        '* <a href="https://congolaisdenanjing.com/">Cliquez ici pour visiter notre site officiel</a> <yellow>CCN</yellow> \n\n',
    
        '<white>Bienvenue au NeuroQuest</white>\n\n',
        
        `Ce jeu est un peu plus difficile que le précédent, et nous vous recommandons d'utiliser un ordinateur portable ou une tablette pour une meilleure expérience visuelle.\n\n`,
    
        `<white>Comment jouer ?</white>.\n\n`,
    
        'Votre objectif est de trouver les paires de drapeaux identiques en sélectionnant deux cartes correspondantes. Cependant, faites attention—le nombre de mouvements est limité, alors utilisez-les judicieusement ! \n\n',

        `Nos jurés désigneront le/la grand(e) champion(e), et des récompenses seront attribuées en conséquence. Nous vous souhaitons un excellent moment—profitez bien du jeu ! 🎉\n\n`,

        '                                              <yellow>Scannez le code QR ci-dessous pour accéder au jeu</yellow> 👇🏿 \n\n',
    
        '<img src="./assets/neuroquest_code.png" alt="Quiz Game Image" style="display: block; margin: 0 auto; width: 30%; height: auto;"/>\n\n',
        ,
        ''
    ].flat(),

    // skills: [
    //     '',
    //     '<white>languages</white>',

    //     [
    //         'JavaScript',
    //         'TypeScript',
    //         'Python',
    //         'SQL',
    //         'PHP',
    //         'Bash'
    //     ].map(lang => `* <yellow>${lang}</yellow>`),
    //     '',
    //     '<white>libraries</white>',
    //     [
    //         'React.js',
    //         'Redux',
    //         'Jest',
    //     ].map(lib => `* <green>${lib}</green>`),
    //     '',
    //     '<white>tools</white>',
    //     [
    //         'Docker',
    //         'git',
    //         'GNU/Linux'
    //     ].map(lib => `* <blue>${lib}</blue>`),
    //     ''
    // ].flat()
};

const dirs = Object.keys(directories);

const root = '~';
let cwd = root;

const user = 'tech';
const server = 'congolaisdenanjing.com';

// not every command needs to be binary
// The following work more like real programs
const files = [
    'tech_blague',
    'record'
];

function prompt() {
    return `<green>${user}@${server}</green>:<blue>${cwd}</blue>$ `;
}

function print_home() {
     term.echo(dirs.map(dir => {
         return `<blue class="directory">${dir}</blue>`;
     }).join('\n'));
     term.echo(files.map(file => {
         return `<green class="command">${file}</green>`;
     }).join('\n'));
}

const commands = {
    help() {
        term.echo(`Liste des commandes disponibles: ${help}`);
    },
    ls(dir = null) {
        if (dir) {
            if (dir.match(/^~\/?$/)) {
                 print_home();
            } else if (dir.startsWith('~/')) {
                const path = dir.substring(2);
                const dirs = path.split('/');
                if (dirs.length > 1) {
                    this.error('Répertoire invalide');
                } else {
                    const dir = dirs[0];
                    this.echo(directories[dir].join('\n'));
                }
            } else if (cwd === root) {
                if (dir in directories) {
                    this.echo(directories[dir].join('\n'));
                } else {
                    this.error('Répertoire invalide');
                }
            } else if (dir === '..') {
                print_home();
            } else {
                this.error('Répertoire invalide');
            }
        } else if (cwd === root) {
           print_home();
        } else {
            const dir = cwd.substring(2);
            this.echo(directories[dir].join('\n'));
        }
    },
    async tech_blague() {
        // we use programming jokes so it fit better developer portfolio
        const res = await fetch('https://v2.jokeapi.dev/joke/Programming');
        const data = await res.json();
        if (data.type == 'twopart') {
            // this allow to create sequence of typing animations
            this.animation(async () => {
                // to terminal, you can use `this` object
                // to reference terminal instance
                await this.echo(`Q: ${data.setup}`, {
                    delay: 50,
                    typing: true
                });
                await this.echo(`A: ${data.delivery}`, {
                    delay: 50,
                    typing: true
                });
            });
        } else if (data.type === 'single') {
            this.echo(data.joke, {
                delay: 51,
                typing: true
            });
        }
    },
    cd(dir = null) {
        if (dir === null || (dir === '..' && cwd !== root)) {
            cwd = root;
        } else if (dir.startsWith('~/') && dirs.includes(dir.substring(2))) {
            cwd = dir;
        } else if (dir.startsWith('../') && cwd !== root && dirs.includes(dir.substring(3))) {
            cwd = root + '/' + dir.substring(3);
        } else if (dirs.includes(dir)) {
            cwd = root + '/' + dir;
        } else {
            this.error('Mauvais répertoire');
        }
    },
    // credits() {
    //     // you can return string or a Promise from a command
    //     return [
    //         '',
    //         '<white>Used libraries:</white>',
    //         '* <a href="https://terminal.jcubic.pl">jQuery Terminal</a>',
    //         '* <a href="https://github.com/patorjk/figlet.js/">Figlet.js</a>',
    //         '* <a href="https://github.com/jcubic/isomorphic-lolcat">Isomorphic Lolcat</a>',
    //         '* <a href="https://jokeapi.dev/">Joke API</a>',
    //         '',
    //         '<a href="">Made with ❤️ by Christ ND</a>',
    //         ''
    //     ].join('\n');
    // },
    echo(...args) {
        if (args.length > 0) {
            term.echo(args.join(' '));
        }
    },
    record(arg) {
        if (arg === 'démarrer') {
            term.history_state(true);
        } else if (arg === 'arrêter') {
            term.history_state(false);
        } else {
            term.echo('enregistrez les commandes dans le hachage de URL afin de pouvoir partager le lien\n\n' +
                      'usage: enregistrer [arrêter|démarrer]\n');
            term.echo('<white>NOTE</white>: cette commande ne fonctionnera pas sur certaines plateformes,' +
                     ' qui utilisent un iframe!');
        }
    }
};

// clear is default command that can be turned off with an option
const command_list = ['clear'].concat(Object.keys(commands));
const formatted_list = command_list.map(cmd => `<white class="command">${cmd}</white>`);
const help = formatter.format(formatted_list);

const re = new RegExp(`^\s*(${command_list.join('|')})(\s?.*)`);

$.terminal.new_formatter([re, function(_, command, args) {
    return `<white class="command">${command}</white><aquamarine>${args}</aquamarine>`;
}]);

$.terminal.xml_formatter.tags.blue = (attrs) => {
    return `[[;#55F;;${attrs.class}]`;
};
$.terminal.xml_formatter.tags.green = (attrs) => {
    return `[[;#44D544;;${attrs.class}]`;
};

const term = $('body').terminal(commands, {
    greetings: false,
    checkArity: false,
    enabled: $('body').attr('onload') === undefined,
    completion(string) {
        // in every function we can use this to reference term object
        const { name, rest } = $.terminal.parse_command(this.get_command());
        if (['cd', 'ls'].includes(name)) {
            if (rest.startsWith('~/')) {
                return dirs.map(dir => `~/${dir}`);
            }
            if (rest.startsWith('../') && cwd != root) {
                return dirs.map(dir => `../${dir}`);
            }
            if (cwd === root) {
                return dirs;
            }
        }
        return Object.keys(commands);
    },
    execHash: true,
    prompt
});

term.pause();

term.on('click', '.command', function() {
   const command = $(this).text();
   term.exec(command, { typing: true, delay: 50 });
});

term.on('click', '.directory', function() {
    const dir = $(this).text();
    term.exec(`cd ~/${dir}`, { typing: true, delay: 50 });
});

function ready() {
    const seed = rand(256);
    term.echo(() => rainbow(render('CCN - wElcoMe'), seed))
        .echo('<white>Bienvenue à notre journée culturelle ! Préparez-vous aux défis à venir et bonne chance à tout le monde.</white>\n').resume();
}

function rainbow(string, seed) {
    return lolcat.rainbow(function(char, color) {
        char = $.terminal.escape_brackets(char);
        return `[[;${hex(color)};]${char}]`;
    }, string, seed).join('\n');
}

function rand(max) {
    return Math.floor(Math.random() * (max + 1));
}

function render(text) {
    const cols = term.cols();
    return trim(figlet.textSync(text, {
        font: font,
        width: cols,
        whitespaceBreak: true
    }));
}

function trim(str) {
    return str.replace(/[\n\s]+$/, '');
}

function hex(color) {
    return '#' + [color.red, color.green, color.blue].map(n => {
        return n.toString(16).padStart(2, '0');
    }).join('');
}
