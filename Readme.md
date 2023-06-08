Backend created for extraavalue using NOdejs and Mongodb and deployed on cyclic

### File Tree

├── config

│ └── allowedOrigins.js

│ └── corsOptions.js

│ └── dbConn.js

├── controllers

│ └── userController.js

├── logs

│ └── errLog.log

│ └── reqLog.log

├── middleware

│ └── errorHandler.js

│ └── logger.js

├── models

│ └── User.js

├── public

│ └── css

│ └── style.css

├── routes

│ │── root.js

│ └── userRoutes.js

├── views

│ │── 404.html

│ └── index.html

├── server.js

│── README.md

└── pacakage.json

`npm run dev`

to run the app and dont forget to update the npm pacakages by `npm i`

server-deploy-live_on-cyclic https://carmine-jellyfish-tie.cyclic.app/

current CRUD and basic search is working

//GET all Products
GET - https://carmine-jellyfish-tie.cyclic.app/used-product

//POST a Product
POST - https://carmine-jellyfish-tie.cyclic.app/used-product

sample post object
{
"brand": "some exmaple brand",
"model": "some exmaple model",
"minPrice": 500,
"maxPrice": 600,
"ram": "6GB",
"rom": "128GB",
"image": "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/o/p/z/-original-imagcg22pf79cgau.jpeg?q=70"
}
