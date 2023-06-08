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

{"brand":"Samsung","image":"https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/o/p/z/-original-imagcg22pf79cgau.jpeg?q=70","maxPrice":600,"minPrice":500,"model":"Galaxy test 6g","ram":"21GB","rom":"312GB"}

//get products
http://localhost:3500/used-product
//get products by id http://localhost:3500/used-product/id
http://localhost:3500/used-product/648228a2b3d94530bae8597c

//put and update data
http://localhost:3500/used-product/648228a2b3d94530bae8597c

current CRUD and basic search is working
