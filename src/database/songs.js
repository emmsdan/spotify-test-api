const faker = require('@faker-js/faker')
const songs = [
    {
        title: "Only the Good Die Young",
        description: "Late Classic Rock",
        date: new Date().toISOString(),
        image: "https://source.unsplash.com/random/?music,music+1",
        music: "//m4a-64.jango.com/03/56/78/0356785856.m4a",
        musicUrlSchema: "//m4a-64.jango.com/03/56/78/0356785856.m4a",
    },
    {
        title: "Hand To Hold On To",
        description: "Late Classic Rock",
        date: new Date().toISOString(),
        image: "https://album1.cdn107.com/50/d6/50d6b230f904abf17646b11db6c2969e_xl.jpg",
        music: "//mp3-128.jango.com/music/18/36/28/1836282466.mp3",
        musicUrlSchema: "//m4a-64.jango.com/03/56/78/0356785856.m4a",
    },
    ...Array.from({ length: 20}).map((_, index)=>({
        title: faker.faker.music.songName(),
        description: faker.faker.music.genre(),
        date: new Date().toISOString(),
        image: "https://source.unsplash.com/random/?music,music+"+index,
        music: index % 2 == 0 || index % 5 == 0? "//m4a-64.jango.com/33/26/22/3326229372312887829.m4a": index % 3 == 0 ? "//m4a-64.jango.com/41/88/26/4188262437958292980.m4a" : "//mp3-128.jango.com/music/04/71/65/0471652737.mp3",
        musicUrlSchema: "//m4a-64.jango.com/03/56/78/0356785856.m4a",
    }))
]

module.exports = songs