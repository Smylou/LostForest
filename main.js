const prompt = require('prompt-sync')();
let choix = ""
let champignon = false
let mort = false
let chat = false
let fin = false
let nomChat = ""
let confirmation = false
let repos = false
let lache = false
let nuit = false

console.log("En tant qu'aventurier novice, vous êtes naturellement dans une forêt assez sombre malgré qu’il soit 14 h. Soudain vous tombez sur un champignon luisant dans la nature, en forme de lune, blanc avec des reflets bleus. Votre estomac se met à gargouiller de faim. Que voulez-vous faire ?")
choix = prompt(" Manger | Ignorer | Écraser : ").toLowerCase()
while (choix != "manger" && choix != "ignorer" && choix != "ecraser") {
    console.log("Veuillez rentrer un choix valide")
    choix = prompt(" Manger | Ignorer | Écraser : ").toLowerCase()
}
switch (choix) {
    case "manger":
        console.log("Vous avez mangé le champignon. Il a un goût plutôt appétissant, la texture est molle . Au bout de quelques minutes, votre ventre commence à émettre une faible lueur bleue, étrange non ? Vous continuez votre chemin.")
        champignon = true
        break;
    case "ignorer":
        console.log("Ce champion à tout l'air d'être un piège, qui pourrait être assez stupide pour manger un champion bleu après tout ? Vous continuez votre chemin.")
        break;
    case "ecraser":
        console.log("D’un coup féroce, vous écrasez le champignon, il l’a bien mérité en même temps ! Puis, soudain votre regard se porte vers la lune qui étonnamment n’est pas censée être présente et qui devient de plus en plus bleue, jusqu’à ce qu’un faisceau lumineux soit projeté droit vers vous. En quelques secondes votre squelette s’effondre sur le sol, sans aucun reste de chair.")
        mort = true
        break;
}
if (mort == false) {
    console.log("Vous êtes arrivé à un petit camp composé d’un marchand, d’un feu de joie et d’un chat borgne. Le marchand vous parle : \" Tiens donc, enfin un vagabond ! Peut-être serais-tu intéressé par ce que je vends ? \"\
 Le marchand vous montre sa marchandise, composée d’une épée (coûte une pierre), d’une potion (coûte un rein) et d’un collier (gratuit ?). Que choisissez-vous ?")

    while (choix != "rien" && choix != "epee" && choix != "potion" && choix != "collier")
        choix = prompt(" Rien | Épée | Potion | Collier : ").toLowerCase()
    switch (choix) {
        case "rien":
            console.log("Vous continuez votre chemin (après avoir caressé le chat, bien sûr).")
            break;
        case "epee":
            console.log("Vous ramassez un caillou qui traîne dans votre chaussure, puis vous le donnez au marchand, qui vous l’envoie en pleine figure. Il vous dit : \" Un caillou lunaire, pas un simple caillou ! \" Touché dans votre ego, vous repartez chez vous les larmes aux yeux.")
            fin = true
            break;
        case "potion":
            console.log("Vous demandez poliment au marchand la potion étrange qui brille. Il vous répond : \"Bien sûr, viens t'asseoir à côté de moi.\" Vous l’écoutez et, au moment où vous vous posez sur le sol, vous sentez une aiguille vous piquer le bras et un doux \"bonne nuit\" parcourir votre oreille droite. Le marchand vous a endormi puis a prélevé un rein, sauf que suite à des complications médicales durant votre enfance, vous n’en aviez qu’un. Vous mourrez délicatement sur le sol rocheux, mais rassurez vous, le chat ronronne collé à votre cadavre.")
            mort = true
            break;
        case "collier":
            console.log("Vous choisissez le collier en demandant au marchand à quoi il sert (même si, vu qu'il est gratuit, ce n'est pas un problème). Le marchand vous répond que c'est le collier de son chat, ou du moins du chat qu'il a trouvé il y a quelque temps. Ne pouvant pas s'en occuper, il essaie de le donner à chaque voyageur qui passe mais n'ayant qu'un seul oeil, le chat ne suscite pas grand intérêt. Vous décidez tout de même de garder ce chat tellement mignon. Vous repartez avec le chat sur l'épaule en saluant le marchand.")
            chat = true
            while (confirmation != "oui") {
                nomChat = prompt("Comment voulez-vous appeler votre nouveau compagnon ? : ")

                confirmation = prompt("Êtes-vous sûr ? Oui/Non : ").toLowerCase()
                while (confirmation != "oui" && confirmation != "non") {
                    console.log("Veuillez rentrer un choix valide")
                    confirmation = prompt("Êtes-vous sûr ? Oui/Non : ").toLowerCase()
                }
            }
            break;
    }
    if (mort == false && fin == false && chat == false) {

        console.log("Vous avancer dans la forêt mais vous ne possédez aucun équipement. Puis vous vous rappelez que votre maître vous a appris à fabriquer un arc et des flèches. Alors, vous vous lancez dans la quête de trouver des branches et du fil pour fabriquer une arme. Une fois terminé, vous vous allongez contre un arbre pour reprendre des forces, quand soudain vous entendez un bruit dans les buissons. ")
        choix = prompt("Voulez vous allez vérifié le buisson ? : ").toLowerCase()
        while (choix != "oui" && choix != "non") {
            console.log("Veuillez rentrer un choix valide")
            choix = prompt("Voulez vous allez vérifié le buisson ? Oui/Non : ").toLowerCase()
        }
        if (choix == "oui") {
            console.log("Vous prenez votre arc en main ainsi qu’une flèche. En vous approchant du buisson, vous vous rendez compte que le chat du marchand vous a suivi et qu’il est en train de se battre avec une araignée de sa taille. Cette scène d’horreur vous pousse à bander votre arc et à décocher une flèche.")
            choix = prompt("Lancez un dé de 20 et entrez le résultat.")
            if (choix < 8) {
                console.log("Vous tirez une flèche, mais vous ratez complètement votre tir et touchez la mauvaise cible. Votre visage se décompose et vous vous enfuyez jusqu’à chez vous en priant le ciel d’effacer cette tragédie de votre mémoire.")
                fin = true
            } else if (choix > 8 && choix < 12) {
                console.log("Malgré votre entraînement votre flèche ne touche pas l'araignée mais le sol juste à côté. Heureusement, le bruit de la flèche effraie l'araignée qui décide de prendre la fuite.")
            } else {
                console.log("Votre entraînement a porté ses fruits, votre tir atteint en plein la tête de l'araignée, qui succombe sur le coup.")
            }
            console.log("Votre arc rudimentaire n’a pas supporté le tir et vous vous rendez compte qu’il est brisé. Vous vous rapprochez du chat, encore un peu bouleversé par ce qui vient de se passer, mais visiblement heureux de vous revoir, il se met à ronronner et se frotte à votre jambe, vous décidez donc de l’adopter.")
            chat = true
            while (confirmation != "oui") {
                nomChat = prompt("Comment voulez-vous appeler votre nouveau compagnon ? : ")
                confirmation = prompt("Êtes-vous sûr ? Oui/Non : ").toLowerCase()
                while (confirmation != "oui" && confirmation != "non") {
                    console.log("Veuillez rentrer un choix valide")
                    confirmation = prompt("Êtes-vous sûr ? Oui/Non : ").toLowerCase()
                }
            }
        } else {
            console.log("Une fois reposé, vous vous dirigez vers le temple. Deux chemins s'offrent à vous, à droite le chemin semble accueillant, court et dégagé, à gauche, il paraît long, lugubre et dénué de toute forme de vie. Quel chemin voulez vous prendre ?")
            choix = prompt("Droite | Gauche : ").toLowerCase()
            while (choix != "droite" && choix != "gauche") {
                console.log("Veuillez rentrer un choix valide")
                choix = prompt("Droite | Gauche : ").toLowerCase()
            }
            if (choix == "gauche") {
                console.log("Le chemin de gauche regroupe toutes les pires abominations de la nature, des cadavres, des arbres morts... Ce moment semble interminable. Vous arrivez devant le temple alors que la nuit commence à tomber")
                nuit = true
            } else {
                console.log("Le chemin de droite regroupe plusieurs variétés de fleurs, le doux parfum de la nature et le chant des oiseaux qui volent au-dessus des arbres apaisent votre âme")
            }
            console.log("À votre arrivée au temple tout est calme, trop calme. Quand soudain, surgit d’un buisson un monstre qui ne possède qu’un seul oeil, mais qui mesure plusieurs mètres. Vous prenez en main votre arc, le combat commence. Le monstre commence à vous charger, grâce à vos réflexes vous esquivez de peu son attaque. Puis votre arc se tend, la flèche est prête à partir et vous tirez. La flèche vient se loger dans le genou du monstre, mais elle n’est pas fatale. De plus votre arc rudimentaire se brise. Que voulez-vous faire ?")
            choix = prompt("Résister | Fuir : ").toLowerCase()
            while (choix != "resister" && choix != "fuir") {
                console.log("Veuillez rentrer un choix valide")
                choix = prompt("Résister | Fuir : ").toLowerCase()
            }
                if (choix == "fuir") {
                    console.log("Vous êtes un aventurier courageux mais vous connaissez vos limites, ce combat ne vaut sûrement pas la peine de mettre votre vie en jeu. Après une nouvelle attaque esquivée, vous profitez d’un court moment de répit pour fuir le plus loin possible de cet endroit.")
                    console.log("FIN")
                } else {
                    if (champignon == true && nuit == true) {
                        console.log("Vous choisissez de vous battre jusqu’au bout, le vaillant aventurier que vous êtes ne recule devant rien ! Vous commencez à charger le monstre et à enchaîner les coups de poing dans son ventre. Malheureusement, le monstre est trop fort. Quelques minutes plus tard vous vous retrouvez épuisé sur le sol.")
                        console.log("Soudain, vous levez les yeux vers le ciel, la lune est belle, brillante, haute dans la nuit. Vous sentez son énergie raviver vos forces. Vos poings commencent à briller, tandis qu’une lueur bleue teint la peau de vos mains. Vous décidez alors de saisir une flèche à mains nues et de la lancer droit en direction de l’oeil du monstre. La puissance du tir est telle qu’elle transperce l’oeil du monstre sans s’arrêter.")
                        console.log("Après vous êtes remis de ce combat, vous entrez dans le temple qui renferme mille et un trésor, mais un parchemin attire votre attention. Il s'agit d'une carte, montrant un emplacement avec une croix rouge, au dos de cette carte est marquer un message \"Voici l'emplacement de l'ingrédient lunaire, l'ingrédient qui appartient au Dieu de la lune, ce n'est qu'une pièce du puzzle, mais une fois tout les ingrédients ingéré, l'être qui les possède sera inarrêtable\".")
                        console.log("FIN")
                    } else {
                        console.log("Vous choisissez de vous battre jusqu’au bout, le vaillant aventurier que vous êtes ne recule devant rien ! Vous commencez à charger le monstre et à enchaîner les coups de poing dans son ventre. Malheureusement, le monstre est trop fort. Quelques minutes plus tard vous vous retrouvez épuisé sur le sol, immobile, et le monstre compte bien en profiter.")
                        console.log("VOUS ÊTES MORT")
                    }
            }
        }
    } else if (fin == true) {
        console.log("FIN")
    } else if (mort == true) {
        console.log("VOUS ÊTES MORT")
    }
} else {
    console.log("VOUS ÊTES MORT")
}

if (mort == false && fin == false && chat == true) {
    console.log("Vous et " + nomChat + " êtes un peu fatigués mais vous apercevez au loin un temple qui renferme probablement une pelletée de trésors ! Voulez-vous établir un camp de repos ou partir sans tarder ?")
    choix = prompt("Repos | Partir : ").toLowerCase()
    while (choix != "repos" && choix != "partir") {
        console.log('Veuillez faire un choix valide')
        choix = prompt("Repos | Partir : ").toLowerCase()
    }

    if (choix == "repos") {

        console.log("Vous établissez un camp pour que vous et " + nomChat + " puissiez vous reposer. Vous faites cuire des baies comestibles trouvées sur le chemin et ouvrez la dernière boîte de thon que vous possédez pour nourrir " + nomChat + ". Après avoir mangé, vous et " + nomChat + " commencez votre sieste côte à côte, jusqu’au soir.")
        repos = true
    } else {
        console.log("Nous sommes presque arrivés " + nomChat + " ce n’est pas le moment de se relâcher ! Vous avancez jusqu’au temple.")
    }

    console.log("A votre arrivé au temple tout est calme, trop calme, quand soudain surgie d'un buisson un monstre qui ne possède qu'un oeil mais qui mesure plusieurs mètres, vous sortez votre arme de prédilection.., Vos poings ! " + nomChat + " ne semble pas avoir peur et monstre même l'envie de se battre à vos coter ! Que voulez vous faire ?")
    choix = prompt("Attaque de frond (A) | Lui lancer des pierres (B) | Laisser " + nomChat + " se battre (C) : ").toLowerCase()

    while (choix != "a" && choix != "b" && choix != "c") {
        console.log("Veuillez rentrer A, B ou C")
        choix = prompt("Attaque de frond (A) | Lui lancer des pierres (B) | Laisser " + nomChat + " se battre (C) : ").toLowerCase()
    }
    switch (choix) {
        case "a":
            console.log("Vous rassemblez tout votre courage avant de pousser un cri bestial tout en courant vers le monstre. Vos coups font mouche mais vous en recevez également en retour. Vous sentez votre corps crier de douleur, mais il est déjà trop tard pour reculer.")
            break;
        case "b":
            console.log("Vous ramassez les pierres qui traînent sur le sol avant d’essayer de les lui lancer dessus. Malheureusement, le monstre ne semble pas être impacté par de vulgaires pierres et décide de vous attraper à la gorge avant de vous projeter contre un arbre.")
            break;
        case "c":
            console.log("Vous n’êtes qu’un lâche qui abandonne son compagnon et vous vous enfuyez. Pendant ce temps, " + nomChat + " se bat de toutes ses forces jusqu’à épuisement. Heureusement, le monstre éprouve de la peine pour ce noble animal et décide de l’adopter.")
            lache = true
            break;
    }
    if (lache == true) {
        console.log("VOUS ÊTES LACHE")
    } else {
        if (champignon == true && repos == true) {
            console.log("Malheureusement, la force du monstre est trop élevée. À force d’échanger des coups, vous tombez à genoux, épuisé. Le monstre s’avance vers vous, prêt à en finir ; c’est après tout le destin réservé à tous les aventuriers. Vous fermez les yeux, acceptant votre sort. Mais d’un coup, " + nomChat + " surgit de l’arbre. Agile, il réussit à sauter sur le monstre et à lui trancher l’œil ! Son attaque est fatale, mais dans son dernier souffle, le monstre attrape " + nomChat + " puis commence à serrer ses poings. Vous êtes sur le sol, impuissant, priant pour que quelqu’un vienne en aide à votre ami. Puis, en levant les yeux au ciel, vous apercevez la lune, pleine et rayonnante, jusqu’à ce qu’une force insoupçonnée vous redonne du pouvoir : une force lunaire. Vos poings s’éclaircissent et une détermination sans limite parcourt votre être. En quelques secondes, vous êtes face au monstre, puis, de toutes vos forces, votre poing frappe la mâchoire du monstre, qui est décapité en un rien de temps. " + nomChat + " tombe sur le sol, à bout de force, mais vivant. Après vous êtes remis de ce combat, vous entrez dans le temple qui renferme mille et un trésor, mais un parchemin attire votre attention. Il s'agit d'une carte, montrant un emplacement avec une croix rouge, au dos de cette carte est marquer un message \"Voici l'emplacement de l'ingrédient lunaire, l'ingrédient qui appartient au Dieu de la lune, ce n'est qu'une pièce du puzzle, mais une fois tout les ingrédients ingéré, l'être qui les possède sera inarrêtable\". A suivre ...")
        } else {
            console.log("Malheureusement, la force du monstre est trop élevée. À force d’échanger des coups, vous tombez à genoux, épuisé. Le monstre s’avance vers vous, prêt à en finir ; c’est après tout le destin réservé à tous les aventuriers. Vous fermez les yeux, acceptant votre sort. Mais d’un coup, " + nomChat + " surgit de l’arbre. Agile, il réussit à sauter sur le monstre et à lui trancher l’œil ! Son attaque est fatale, mais dans son dernier souffle, le monstre attrape " + nomChat + " puis commence à serrer ses poings. Vous êtes sur le sol, impuissant, priant pour que quelqu’un vienne en aide à votre ami. Sauf que personne ne vient : les miracles n’existent pas. Vous voyez " + nomChat + " mourir des mains du monstre. Tétanisé, vos larmes coulent le long de votre visage. Après cet événement, le monstre décide de partir. La mort de votre compagnon a probablement étanché sa soif de violence et de sang, mais vous, vous n’oublierez jamais ce que cet être vous a pris.")
            console.log("FIN")
        }
    }
}