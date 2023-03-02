const { createApp } = Vue;
    createApp({ 
      data(){
        return {
          films: [
            {
                title: "Marwencol",
                year: 2010,
                genres: "Documentary, Biography, Fantasy",
                synopsis: "Outside a small bar in Kingston, NY, Mark Hogancamp was beaten nearly to death, his memories wiped away. Seeking recovery, he builds Marwencol, a miniature World War II-era town filled with doll versions of his friends, fantasies, and even his attackers."                
            },
            {
                title: "Strictly Ballroom",
                year: 1992,
                genres: "Comedy, Drama, Romance",
                synopsis: "A maverick dancer risks his career by performing an unusual routine and sets out to succeed with a new partner. Together, these two misfits try to win the Australian Pan Pacific Championships."                
            },
            {
                title: "This Is 40",
                year: 2012,
                genres: "Comedy, Drama, Romance",
                synopsis: "Pete and Debbie are both about to turn 40, their kids hate each other, both of their businesses are failing, they're on the verge of losing their house, and their relationship is threatening to fall apart."                
            },
            {
                title: "Melancholia",
                year: 2011,
                genres: "Drama, Sci-Fi",
                synopsis: "On the night of her wedding, Justine is struggling to be happy even though it should be the happiest day of her life. Meanwhile, Melancholia, a blue planet, is hurtling towards the Earth, and Claire, Justine's sister, is struggling to maintain composure with fear of the impending disaster."                
            },
            {
                title: "Martha Marcy May Marlene",
                year: 2011,
                genres: "Drama, Mystery, Thriller",
                synopsis: "Martha has run away from an abusive hippie-like cult where she was living as Marcy May for two years. She turns to her sister and brother-in-law who take her in and want to help her. The problem is Martha is having a hard time separating dreams from reality and when haunting memories of her past keep resurfacing, she may need more help than anyone is able to give her."                
            }
          ]
        }
      }
    }).mount("#myApp");