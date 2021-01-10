const portfolioArray = [
    {
        name: "Bootstrap Exercise",
        img: "https://picsum.photos/500/500",
        alt: "Lorem Picsum Image",
        date: 2021,
        category: "Web",
        link: "https://actor-agency.netlify.app",
        description: "A small sample of the use of Bootsrap alognside jQuery based on an exercise during the programming bootcamp Coding Jobs."
    },
    {
        name: "LëtzPark",
        img: "../Images/letz.jpg",
        alt: "LëtzPark Brand",
        date: 2020,
        category: "Brands",
        link: "https://www.behance.net/gallery/110459405/LetzPark?",
        description: "This brand was created for a web design project that focused on presenting a solution for parking in Luxembourg. The colors used are the official ones of the country."
    },
    {
        name: "Personal site",
        img: "../Images/foto.jpg",
        alt: "My brand",
        date: 2020,
        category: "Web",
        link: "None",
        description: "You're here! This website serves as a small showcase of my front-end abilities and some of my general projects relating to graphic design and illustration that I've done over the past couple of years."
    },
    {
        name: "Chloe Price",
        img: "../Images/chloe.jpg",
        alt: "Chloe Price",
        date: 2020,
        category: "Illustration",
        link: "https://brendacayzac.tumblr.com/image/639042993815519232",
        description: "Portrait of Square Enix's Life is Strange character Chloe Price. This work was an exploration of color and shading in a somewhat realistic way."
    },
    {
        name: "Beauty Squad Redesign",
        img: "../Images/beautysquad.jpg",
        alt: "Beauty Squad Brand",
        date: 2020,
        category: "Brands",
        link: "https://www.behance.net/gallery/100108499/Brand-Redesign",
        description: "Hairshop.lu reached out with the desire to stylize a subrand and generate an isotype accordingly. The initials of the initiative had to form a butterfly."
    },
    {
        name: "Powder Shampoo",
        img: "../Images/shampoo.png",
        alt: "Powder Shampoo video",
        date: 2020,
        category: "Advertisement",
        link: "https://www.behance.net/gallery/94549593/Powder-Shampoo-Motion-Graphics",
        description: "A short animated informative video for Hairshop.lu's new productL a powder shampoo to be introduced through social media. This video was also animated in French."
    },
    {
        name: "Pathologic Portrait I",
        img: "../Images/daniil.jpg",
        alt: "Daniil Dankovsky",
        date: 2019,
        category: "Illustration",
        link: "https://www.behance.net/gallery/91947859/Pathologic-Character-Portraits",
        description: "Portrait of Pathologic character Daniil Dankovsky, also known as The Bachelor, by Ice Pick Lodge. This is part of a trio of portrait inspired by the game franchise."
    },
    {
        name: "Pathologic Portrait II",
        img: "../Images/clara.jpg",
        alt: "Clara",
        date: 2019,
        category: "Illustration",
        link: "https://www.behance.net/gallery/91947859/Pathologic-Character-Portraits",
        description: "Portrait of Pathologic character Clara Subarov, also known as The Changeling, by Ice Pick Lodge. This is part of a trio of portrait inspired by the game franchise."
    },
    {
        name: "Pathologic Portrait III",
        img: "../Images/artemy.jpg",
        alt: "Artemy Burakh",
        date: 2019,
        category: "Illustration",
        link: "https://www.behance.net/gallery/91947859/Pathologic-Character-Portraits",
        description: "Portrait of Pathologic character Artemy Burakh, also known as the Haruspex, by Ice Pick Lodge. This is part of a trio of portrait inspired by the game franchise."
    },
    {
        name: "RWBY - Memento Mori",
        img: "../Images/example4.jpg",
        alt: "Memento Mori - Team RWBY",
        date: 2019,
        category: "Illustration",
        link: "https://www.behance.net/gallery/86753215/Memento-Mori",
        description: "An illustration of the characters from Rooster Teeth's Team RWBY while facing their enemies. Inspired by the video game Persona."
    },
    {
        name: "Raven Branwen",
        img: "../Images/raven.png",
        alt: "Raven Branwen",
        date: 2019,
        category: "Illustration",
        link: "https://www.behance.net/gallery/75674283/Raven-Branwen-Restricted-Palette",
        description: "An illustration of Rooster Teeth's Raven Branwen. A restricted color palette was used to capture the characters's trademark aesthetic"
    },
    {
        name: "Ambiental Facility Service",
        img: "../Images/afs.jpg",
        alt: "AFS Brand",
        date: 2018,
        category: "Brands",
        link: "https://www.behance.net/gallery/67900493/Brand-design-Ambiental-Facility-Service-SRL",
        description: "A startup owner required a brand that could combine both services provided by the company: cleaning and fumigation."
    },
    {
        name: "Sample Graphics",
        img: "../Images/tiptut.png",
        alt: "Motion graphics",
        date: 2018,
        category: "Advertisement",
        link: "https://www.behance.net/gallery/63644693/Motion-Graphics-Sample",
        description: "A small showcase of symbol animations for motion graphic videos based on TipTut's tutorial on YouTube."
    },
    {
        name: "Wakfu",
        img: "../Images/wakfu.png",
        alt: "Wakfu characters running",
        date: 2018,
        category: "Illustration",
        link: "https://brendacayzac.tumblr.com/image/172744255033",
        description: "The main cast of Ankama's Wakfu TV series running away from trouble. This was made in celebration of the show's 3rd season on Netflix."
    },
    {
        name: "Gualeguaychú",
        img: "../Images/gualeguay.jpg",
        alt: "Gualeguaychú Brand",
        date: 2017,
        category: "Brands",
        link: "https://www.behance.net/gallery/52958537/Brand-Identity-Design-Diseno-de-Identidad-de-Marca",
        description: "The city of Gualeguaychú requested several designs for their new turism brand. This was a college assignament."
    },
    {
        name: "Códice",
        img: "../Images/codice.jpg",
        alt: "Códice Brand",
        date: 2017,
        category: "Brands",
        link: "https://www.behance.net/gallery/51151157/Brand-Design-Codice",
        description: "A visual media company that takes inspiration in European medieval art requested a bran design that could encapsulate ideas."
    },
    {
        name: "Adam Taurus",
        img: "../Images/adam.png",
        alt: "Adam Taurus",
        date: 2017,
        category: "Illustration",
        link: "https://www.behance.net/gallery/59838877/Adam-Taurus-Restricted-Palette",
        description: "An illustration with a restricted color palette of Rooster Teeth's Adam Taurus. The colors were chosen based on the character's aesthetic on the show."
    },
    {
        name: "Nike History",
        img: "../Images/nike.png",
        alt: "Nike prototype book",
        date: 2017,
        category: "Editorial",
        link: "https://www.behance.net/gallery/43965347/Nike-Pieza-Editorial",
        description: "Book design for a college project based on Nike's history. The book contained diagrams, advertising pieces and interviews."
    },
    {
        name: "puto el que lee",
        img: "../Images/puto.jpeg",
        alt: "Puto el que lee project",
        date: 2016,
        category: "Editorial",
        link: "https://www.behance.net/gallery/43968125/Puto-el-que-lee-esto",
        description: "College project based on the exploration of editorial expression utilizing Fontanarossa's famous piece 'puto el que lee esto'."
    },
    {
        name: "MissingNo",
        img: "../Images/missingno.jpg",
        alt: "MissigNo Magazine",
        date: 2016,
        category: "Editorial",
        link: "https://www.behance.net/gallery/43971821/Revista-MissingNo",
        description: "Proposed design for a maagzine about video games and technology based on geek culture. MissingNo is a glich from the Pokemon game series."
    },
    {
        name: "Smooth",
        img: "../Images/smooth.jpg",
        alt: "Smooth Prototype",
        date: 2016,
        category: "Packaging",
        link: "https://www.behance.net/gallery/43968565/Tetrapak-Smooth",
        description: "Proposed design for a smoothie inspired product based on American 50s easthetic and style."
    },
    {
        name: "Mom^2",
        img: "../Images/garnet.png",
        alt: "Garnet, Sapphire, and Ruby",
        date: 2016,
        category: "Illustration",
        link: "https://www.behance.net/gallery/43969061/Mom2-Steven-Universe-Illustration",
        description: "Illustration of Steven Universe's characters: Garnet, Sapphire, and Ruby. Original designs by Rebecca Sugar."
    },
    {
        name: "Xipotli",
        img: "../Images/xipotli.jpeg",
        alt: "Xipotli Prototype",
        date: 2016,
        category: "Packaging",
        link: "https://www.behance.net/gallery/43968787/Packaging-Xipotli",
        description: "Proposed design for a chipotle flavored mayonese packaging inspired in classic mexican culture."
    },
    {
        name: "Nike Vitnage",
        img: "../Images/vintage.jpeg",
        alt: "Nike vintage Poster",
        date: 2016,
        category: "Advertisement",
        link: "https://www.behance.net/gallery/43964673/Estilos-Graficos-Publicidad-Nike",
        description: "A vintage inspired poster for a Nike oriented proyect. The collage was made using Argentinian illustrations from the beggining of the 20th century."
    },
    {
        name: "Nike Japanese Techno",
        img: "../Images/japanese.jpeg",
        alt: "Nike Japanese Techno Poster",
        date: 2016,
        category: "Advertisement",
        link: "https://www.behance.net/gallery/43964673/Estilos-Graficos-Publicidad-Nike",
        description: "A Japanese Pop Techno inspired poster for a Nike oriented proyect."
    },
    {
        name: "Nike Organic",
        img: "../Images/organic.jpeg",
        alt: "Nike Organic Poster",
        date: 2016,
        category: "Advertisement",
        link: "https://www.behance.net/gallery/43964673/Estilos-Graficos-Publicidad-Nike",
        description: "An organic inspired poster for a Nike oriented proyect."
    },
    {
        name: "Nike Techno",
        img: "../Images/techno.jpeg",
        alt: "Nike Techno Poster",
        date: 2016,
        category: "Advertisement",
        link: "https://www.behance.net/gallery/43964673/Estilos-Graficos-Publicidad-Nike",
        description: "A techno inspired poster for a Nike oriented proyect."
    },
    {
        name: "Nike Garage",
        img: "../Images/garage.jpeg",
        alt: "Nike Garage Poster",
        date: 2016,
        category: "Advertisement",
        link: "https://www.behance.net/gallery/43964673/Estilos-Graficos-Publicidad-Nike",
        description: "A 90s inspired poster for a Nike oriented proyect."
    },
    {
        name: "Nike Infography",
        img: "../Images/infography.jpeg",
        alt: "Nike Infography Poster",
        date: 2016,
        category: "Advertisement",
        link: "https://www.behance.net/gallery/43964673/Estilos-Graficos-Publicidad-Nike",
        description: "An infographic poster for a Nike oriented proyect."
    },
    {
        name: "Nike Tangible",
        img: "../Images/tangible.jpeg",
        alt: "Nike Tangible Poster",
        date: 2016,
        category: "Advertisement",
        link: "https://www.behance.net/gallery/43964673/Estilos-Graficos-Publicidad-Nike",
        description: "A tangible poster for a Nike oriented proyect made with physical elements and digital retouching."
    },
    {
        name: "Happy Never After",
        img: "../Images/marina.jpg",
        alt: "Nike Tangible Poster",
        date: 2016,
        category: "Advertisement",
        link: "https://www.behance.net/gallery/43968357/Fan-CD-Marina-The-Diamonds",
        description: "A mock up of a fan made CD of singer and composer Marina Diamandis, also known as Marina and the Diamonds."
    },

    {
        name: "Alternate Finn",
        img: "../Images/alternate.png",
        alt: "Alternate Finn and Jake",
        date: 2016,
        category: "Illustration",
        link: "https://www.behance.net/gallery/43968981/FanArt-AltFinn-Illustration",
        description: "Illustration of Adventure Times's characters: Finn the human and Jake the dog."
    },

]
