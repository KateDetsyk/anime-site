import React from 'react';

import './title.css';
import Navigation from '../navigation/navigation';

import logo1 from '../img/0.jpg'
import logo2 from '../img/1.jpg'
import logo3 from '../img/2.jpg'
import logo4 from '../img/3.jpg'
import logo5 from '../img/4.jpg'
import logo6 from '../img/5.jpg'
import logo7 from '../img/6.jpg'
import logo8 from '../img/7.jpg'
import logo9 from '../img/8.jpg'
import logo10 from '../img/9.jpg'
import logo11 from '../img/10.jpg'
import logo12 from '../img/11.jpg'


export default class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state =[
                {
                    name : "Kami no Tou: Tower of God" ,
                    logo : logo1,
                    Premiered : "Spring 2020",
                    Type : "TV (>13 ep.), 25 min.",
                    Genres : "Action, Adventure, Drama, Fantasy, Mystery",
                    Description : "There is a tower that summons chosen people called Regulars with the promise of granting their deepest desires. Whether it be wealth, fame, authority, or something that surpasses them all—everything awaits those who reach the top.Twenty-Fifth Bam is a boy who had only known a dark cave, a dirty cloth, and an unreachable light his entire life. So when a girl named Rachel came to him through the light, his entire world changed. Becoming close friends with Rachel, he learned various things about the outside world from her. But when Rachel says she must leave him to climb the Tower, his world shatters around him. Vowing to follow after her no matter what it takes, he sets his sight on the tower, and a miracle occurs.Thus begins the journey of Bam, a young boy who was not chosen by the Tower but opened its gates by himself. They call his kind Irregulars—beings that have shaken the very foundation of the Tower each time they set foot inside it."
                },
                {
                    name : "Black Clover" ,
                    logo : logo2,
                    Premiered : "Fall 2017",
                    Type : "TV (Unknown ep.), 23 min.",
                    Genres : "Action, Comedy, Magic, Fantasy, Shounen",
                    Description : "Asta and Yuno were abandoned at the same church on the same day. Raised together as children, they came to know of the Wizard King—a title given to the strongest mage in the kingdom—and promised that they would compete against each other for the position of the next Wizard King. However, as they grew up, the stark difference between them became evident. While Yuno is able to wield magic with amazing power and control, Asta cannot use magic at all and desperately tries to awaken his powers by training physically."+
                    "When they reach the age of 15, Yuno is bestowed a spectacular Grimoire with a four-leaf clover, while Asta receives nothing. However, soon after, Yuno is attacked by a person named Lebuty, whose main purpose is to obtain Yuno's Grimoire. Asta tries to fight Lebuty, but he is outmatched. Though without hope and on the brink of defeat, he finds the strength to continue when he hears Yuno's voice. Unleashing his inner emotions in a rage, Asta receives a five-leaf clover Grimoire, a Black Clover giving him enough power to defeat Lebuty. A few days later, the two friends head out into the world, both seeking the same goal—to become the Wizard King!"
                },
                {
                    name : "Brand New Animal" ,
                    logo : logo3,
                    Premiered : "Spring 2020",
                    Type : "TV (Unknown ep.), 23 min.",
                    Genres : "Action, Super Power, Fantasy",
                    Description : "Throughout history, humans have been at odds with Beastmen—a species capable of changing shape due to their genetic Beast Factor. Because of this conflict, Beastmen have been forced into hiding. Anima City serves as a safe haven for these oppressed individuals to live free from human interference."+
                    "During a festival celebrating the town's 10th anniversary, Michiru Kagemori, a human who suddenly turned into a tanuki, finds that Anima City is a far cry from paradise. After witnessing an explosion in the square, she is confronted by Shirou Ogami, a seemingly indestructible wolf and sworn protector of all Beastmen. As they pursue the criminals behind the bombing, the two discover that Michiru is anything but an ordinary Beastman, and look to investigate her mysterious past and uncanny abilities. Could she turn out to be the missing link between Humans and Beastmen?"
                },
                {
                    name : "Kimi no Na wa.Your name." ,
                    logo : logo4,
                    Premiered : "Aug 26, 2016",
                    Type : "Movie 1 hr. 46 min.",
                    Genres : "Romance, Supernatural, School, Drama",
                    Description : "Mitsuha Miyamizu, a high school girl, yearns to live the life of a boy in the bustling city of Tokyo—a dream that stands in stark contrast to her present life in the countryside. Meanwhile in the city, Taki Tachibana lives a busy life as a high school student while juggling his part-time job and hopes for a future in architecture."+
                    "One day, Mitsuha awakens in a room that is not her own and suddenly finds herself living the dream life in Tokyo—but in Taki's body! Elsewhere, Taki finds himself living Mitsuha's life in the humble countryside. In pursuit of an answer to this strange phenomenon, they begin to search for one another."+
                    "Kimi no Na wa. revolves around Mitsuha and Taki's actions, which begin to have a dramatic impact on each other's lives, weaving them into a fabric held together by fate and circumstance."
                },
                {
                    name : "Koe no Katachi. A Silent Voice" ,
                    logo : logo5,
                    Premiered : "Sep 17, 2016",
                    Type : "Movie 2 hr. 10 min.",
                    Genres : "Drama, School, Shounen",
                    Description : "As a wild youth, elementary school student Shouya Ishida sought to beat boredom in the cruelest ways. When the deaf Shouko Nishimiya transfers into his class, Shouya and the rest of his class thoughtlessly bully her for fun. However, when her mother notifies the school, he is singled out and blamed for everything done to her. With Shouko transferring out of the school, Shouya is left at the mercy of his classmates. He is heartlessly ostracized all throughout elementary and middle school, while teachers turn a blind eye."+
                    "Now in his third year of high school, Shouya is still plagued by his wrongdoings as a young boy. Sincerely regretting his past actions, he sets out on a journey of redemption: to meet Shouko once more and make amends."+
                    "Koe no Katachi tells the heartwarming tale of Shouya's reunion with Shouko and his honest attempts to redeem himself, all while being continually haunted by the shadows of his past."
                },
                {
                    name : "No Game No Life: Zero" ,
                    logo : logo6,
                    Premiered : "Jul 15, 2017",
                    Type : "Movie 1 hr. 46 min.",
                    Genres : "Game, Supernatural, Drama, Romance, Fantasy",
                    Description : "In ancient Disboard, Riku is an angry, young warrior intent on saving humanity from the warring Exceed, the sixteen sentient species, fighting to establish the One True God amongst the Old Deus. In a lawless land, humanity's lack of magic and weak bodies have made them easy targets for the other Exceed, leaving the humans on the brink of extinction. One day, however, hope returns to humanity when Riku finds a powerful female Ex-machina, whom he names Schwi, in an abandoned elf city. Exiled from her Cluster because of her research into human emotions, Schwi is convinced that humanity has only survived due to the power of these feelings and is determined to understand the human heart. Forming an unlikely partnership in the midst of the overwhelming chaos, Riku and Schwi must now find the answers to their individual shortcomings in each other, and discover for themselves what it truly means to be human as they fight for their lives together against all odds. Each with a powerful new ally in tow, it is now up to them to prevent the extinction of the human race and establish peace throughout Disboard!"
                },
                {
                    name : "Gurren Lagann" ,
                    logo : logo7,
                    Premiered : "Spring 2007",
                    Type : "TV 27 ep. 24 min. per ep.",
                    Genres : "Action, Adventure, Comedy, Mecha, Sci-Fi",
                    Description : "Simon and Kamina were born and raised in a deep, underground village, hidden from the fabled surface. Kamina is a free-spirited loose cannon bent on making a name for himself, while Simon is a timid young boy with no real aspirations. One day while excavating the earth, Simon stumbles upon a mysterious object that turns out to be the ignition key to an ancient artifact of war, which the duo dubs Lagann. Using their new weapon, Simon and Kamina fend off a surprise attack from the surface with the help of Yoko Littner, a hot-blooded redhead wielding a massive gun who wanders the world above."+
                    "In the aftermath of the battle, the sky is now in plain view, prompting Simon and Kamina to set off on a journey alongside Yoko to explore the wastelands of the surface. Soon, they join the fight against the Beastmen, humanoid creatures that terrorize the remnants of humanity in powerful robots called Gunmen. Although they face some challenges and setbacks, the trio bravely fights these new enemies alongside other survivors to reclaim the surface, while slowly unraveling a galaxy-sized mystery."
                },
                {
                    name : "The Rising of the Shield Hero" ,
                    logo : logo8,
                    Premiered : "Winter 2019",
                    Type : "TV 25 ep. 24 min. per ep.",
                    Genres : "Action, Adventure, Drama, Fantasy",
                    Description : "The Four Cardinal Heroes are a group of ordinary men from modern-day Japan summoned to the kingdom of Melromarc to become its saviors. Melromarc is a country plagued by the Waves of Catastrophe that have repeatedly ravaged the land and brought disaster to its citizens for centuries. The four heroes are respectively bestowed a sword, spear, bow, and shield to vanquish these Waves. Naofumi Iwatani, an otaku, becomes cursed with the fate of being the Shield Hero. Armed with only a measly shield, Naofumi is belittled and ridiculed by his fellow heroes and the kingdom's people due to his weak offensive capabilities and lackluster personality."+
                    "When the heroes are provided with resources and comrades to train with, Naofumi sets out with the only person willing to train alongside him, Malty Melromarc. He is soon betrayed by her, however, and becomes falsely accused of taking advantage of her. Naofumi then becomes heavily discriminated against and hated by the people of Melromarc for something he didn't do. With a raging storm of hurt and mistrust in his heart, Naofumi begins his journey of strengthening himself and his reputation. Further along however, the difficulty of being on his own sets in, so Naofumi buys a demi-human slave on the verge of death named Raphtalia to accompany him on his travels."+
                    "As the Waves approach the kingdom, Naofumi and Raphtalia must fight for the survival of the kingdom and protect the people of Melromarc from their ill-fated future."
                },
                {
                    name : "Demon Slayer: Kimetsu no Yaiba" ,
                    logo : logo9,
                    Premiered : "Spring 2019",
                    Type : "TV 26 ep. 24 min. per ep.",
                    Genres : "Action, Demons, Historical, Shounen, Supernatural",
                    Description : "Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamado's shoulders. Though living impoverished on a remote mountain, the Kamado family are able to enjoy a relatively peaceful and happy life. One day, Tanjirou decides to go down to the local village to make a little money selling charcoal. On his way back, night falls, forcing Tanjirou to take shelter in the house of a strange man, who warns him of the existence of flesh-eating demons that lurk in the woods at night."+
                    "When he finally arrives back home the next day, he is met with a horrifying sight—his whole family has been slaughtered. Worse still, the sole survivor is his sister Nezuko, who has been turned into a bloodthirsty demon. Consumed by rage and hatred, Tanjirou swears to avenge his family and stay by his only remaining sibling. Alongside the mysterious group calling themselves the Demon Slayer Corps, Tanjirou will do whatever it takes to slay the demons and protect the remnants of his beloved sister's humanity."
                },
                {
                    name : "Death Note" ,
                    logo : logo10,
                    Premiered : "Fall 2006",
                    Type : "TV 37 ep. 23 min. per ep.",
                    Genres : "Mystery, Police, Psychological, Supernatural, Thriller, Shounen",
                    Description : "A shinigami, as a god of death, can kill any person—provided they see their victim's face and write their victim's name in a notebook called a Death Note. One day, Ryuk, bored by the shinigami lifestyle and interested in seeing how a human would use a Death Note, drops one into the human realm."+
                    "High school student and prodigy Light Yagami stumbles upon the Death Note and—since he deplores the state of the world—tests the deadly notebook by writing a criminal's name in it. When the criminal dies immediately following his experiment with the Death Note, Light is greatly surprised and quickly recognizes how devastating the power that has fallen into his hands could be."+
                    "With this divine capability, Light decides to extinguish all criminals in order to build a new world where crime does not exist and people worship him as a god. Police, however, quickly discover that a serial killer is targeting criminals and, consequently, try to apprehend the culprit. To do this, the Japanese investigators count on the assistance of the best detective in the world: a young and eccentric man known only by the name of L."
                },
                {
                    name : "Fullmetal Alchemist" ,
                    logo : logo11,
                    Premiered : "Fall 2003",
                    Type : "TV 51 ep. 24 min. per ep.",
                    Genres : "Action, Adventure, Comedy, Drama, Fantasy, Magic, Military, Shounen",
                    Description : "Edward Elric, a young, brilliant alchemist, has lost much in his twelve-year life: when he and his brother Alphonse try to resurrect their dead mother through the forbidden act of human transmutation, Edward loses his brother as well as two of his limbs. With his supreme alchemy skills, Edward binds Alphonse's soul to a large suit of armor."+
                    "A year later, Edward, now promoted to the fullmetal alchemist of the state, embarks on a journey with his younger brother to obtain the Philosopher's Stone. The fabled mythical object is rumored to be capable of amplifying an alchemist's abilities by leaps and bounds, thus allowing them to override the fundamental law of alchemy: to gain something, an alchemist must sacrifice something of equal value. Edward hopes to draw into the military's resources to find the fabled stone and restore his and Alphonse's bodies to normal. However, the Elric brothers soon discover that there is more to the legendary stone than meets the eye, as they are led to the epicenter of a far darker battle than they could have ever imagined."
                },
                {
                    name : "Drifters" ,
                    logo : logo12,
                    Premiered : "Fall 2016",
                    Type : "TV 12 ep. 24 min. per ep.",
                    Genres : "Action, Adventure, Comedy, Historical, Samurai, Fantasy, Seinen",
                    Description : "At the Battle of Sekigahara in 1600, Toyohisa Shimazu is the rearguard for his retreating troops, and is critically wounded when he suddenly finds himself in a modern, gleaming white hallway. Faced with only a stoic man named Murasaki and hundreds of doors on both sides, Toyohisa is pulled into the nearest door and into a world completely unlike his own."+
                    "The strange land is populated by all manner of fantastical creatures, as well as warriors from different eras of Toyohisa's world who were thought to be dead. Quickly befriending the infamous warlord Nobunaga Oda and the ancient archer Yoichi Suketaka Nasu, Toyohisa learns of the political unrest tearing through the continent. Furthermore, they have been summoned as Drifters to fight against the Ends, people who are responsible for the creation of the Orte Empire and are trying to annihilate the Drifters. As the Ends grow more powerful, so does the Empire's persecution of elves and other demihumans. It is up to Toyohisa and his group of unconventional heroes to battle in a brand-new world war to help the Empire's subjects, while protecting the land to claim for themselves and challenging the Ends."
                }
            ];
    }
    render() {
        return (
            <div className='content'>
                <Navigation></Navigation>
                <div className='block'>
                    <div className="emptyHeader"></div>

                    <div className="xreleaseInfo">
                        <h1 className="release-title" overflow= 'hidden' white-space = 'nowrap' text-overflow = 'ellipsis' margin-bottom = '0px'>
                        {this.state[this.props.id].name}
                        </h1>
                        <hr className="line"></hr>
                        <b>Premiered:</b> {this.state[this.props.id].Premiered}<br></br>
                        <b>Type:</b> {this.state[this.props.id].Type}<br></br>
                        <b>Genres:</b> {this.state[this.props.id].Genres}<br></br>


                        <hr className="line" ></hr>
                        <p className="detail-description" >{this.state[this.props.id].Description}</p></div>

                    <div class="detail_side">
                        <img class="detail_pic" border="2" src={this.state[this.props.id].logo} width="350" height="500" alt="Башня Бога / Kami no Tou: Tower of God"></img>
                    </div>
            </div>
        </div>);
    }
}