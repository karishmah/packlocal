let locationData = {
    tokyo: {
        loc: 'Tokyo',
        image: 'https://packlocal.s3-us-west-1.amazonaws.com/tokyoHeader.jpg',
        topSouvenirs: {
            
        }
   },
   jamaica: {
        loc: 'Jamaica',
        image: 'https://packlocal.s3-us-west-1.amazonaws.com/jamaica.jpg',

   },
   paris: {
       loc: 'Paris',
        image: 'https://packlocal.s3-us-west-1.amazonaws.com/parisHeader.jpg'

   }
};

//how do you determnine best sellers from other listed products???

let list = [
    {
        title: 'Embroidered Handbag',
        image: 'https://packlocal.s3-us-west-1.amazonaws.com/Bag+2.png',
        options: '3 more styles',
        rating: '3',
        price: 15.00
    },
    {
        title: 'Beaded braclet',
        image: 'https://packlocal.s3-us-west-1.amazonaws.com/Bracelet+2.png',
        options: '10 more styles',
        rating: '4.5',
        price: 55.00
    },
    {
        title: 'Kundan Necklace',
        image: 'https://packlocal.s3-us-west-1.amazonaws.com/Jewerly+2.png',
        options: 'comes with earings',
        rating: '4',
        price: 295.00
    },
];


export {locationData, list};