import burger from './Assets/Burger_perspective_matte_s.png';
import pizza from './Assets/Pizza_perspective_matte_s.png';
import desserts from './Assets/Donut_perspective_matte_s.png';
import drink from './Assets/can-dynamic-premium.png';

const Data = [
    {
        name:"All",
        src:"https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-dish-hotel-services-flatart-icons-lineal-color-flatarticons.png"
    },
    {
        name:"Burgers",
        src:burger
    },
    {
        name:"Pizzas",
        src:pizza
    },
    {
        name:"Salads",
        src:"https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/000000/external-salad-food-levitation-icongeek26-linear-colour-icongeek26.png"
    },
    {
        name:"dessertss",
        src:desserts
    },
    {
        name:"Drinks",
        src:drink
    }
];
const Items=[
    {
        type:"burger",
        name:"Cheese Lava American Chicken Burger",
        price:"₹247.65",
        desc:"A sinfully oozing cheesy Veg patty and Flame Grilled Chicken patty, loaded with Roasted Chipotle sauce, Red Onions, Jalapeno & a relishing salad, layered between freshly toasted Buns.",
        pic:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/nk97pp8xd8ijlcpexlmy"
    },
    {
        type:"burger",
        name:"Cheese Lava American Burger - Veg",
        price:"₹219.25",
        desc:"A sinfully oozing cheesy Veg patty, loaded with Roasted Chipotle sauce, Red Onions, Jalapeno & a relishing salad, layered between freshly toasted Buns.",
        pic:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/x6ktcvyh1uswspnlcmej"
    },
    {
        type:"burger",
        name:"McSpicy Premium Veg Burger",
        price:"₹209.52",
        desc:"A spicy Paneer patty, shredded Lettuce topped with Jalapeno and Cheese slice, Spicy Cocktail sauce & Cheese sauce layered between toasted Whole Wheat Buns.",
        pic:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/qgmq5t3eyxx13jkhlnym"
    },
    {
        type:"pizza",
        name:"Schezwan Chicken Pizza",
        price:"₹319",
        desc:"Schezwan chicken, onion, capsicum and spring onion.",
        pic:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/dzseyjlcwvskci44ltno"
    },
    {
        type:"pizza",
        name:"Paneer Makhani Pizza",
        price:"₹319",
        desc:"Capsicum, onion, red paprika and paneer tikka in tandoori sauce.",
        pic:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/lielkhosn4yksvdb50dg"
    },
    {
        type:"pizza",
        name:"Chicken Tornado Pizza",
        price:"₹339",
        desc:"Spicy chicken keema, chicken tikka capsicum, onion.",
        pic:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/w87kdisixddxa4oymebh"
    },
    {
        type:"salad",
        name:"Roasted chicken Strips Salad",
        price:"₹287",
        desc:"Everything but the bread!",
        pic:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/yumaujqs2hm2ozdg7sb3"
    },
    {
        type:"salad",
        name:"Veggie Delite Salad",
        price:"₹259",
        desc:"Everything but the bread!",
        pic:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wubzfcrbkt6x1mbp67ez"
    },
    {
        type:"salad",
        name:"Paneer Tikka Salad",
        price:"₹278",
        desc:"Everything but the bread!",
        pic:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/nhlophub642elaxii2ok"
    },
    {
        type:"desserts",
        name:"One Shot 3 Birds Triple Sundae",
        price:"₹175",
        desc:"A combination of 3 scoops of pista, butterscotch and anjeer badam with different sauces and lots of nuts, simply solid, a smart one to compliment your style.",
        pic:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wcldffdwrkm98fnkmc8x"
    },
    {
        type:"desserts",
        name:"World'S Best Chocolate Triple Sundae",
        price:"₹175",
        desc:"A combo of Belgium dark chocolate, chocolate, choco chips with lots of nuts & sauces.",
        pic:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wx7mejlo8sg1nhsf1vn0"
    },
    {
        type:"desserts",
        name:"Black Forest McFlurry Medium",
        price:"₹99.04",
        desc:"Black Forest McFlurry Medium",
        pic:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/vorqylpqff1xngmfkx2y"
    },
    {
        type:"drink",
        name:"Chocolate Thick Shake",
        price:"₹139",
        desc:"Our signature chocolate thick shake.",
        pic:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/kj9hypk5lgl15fawayiy"
    },
    {
        type:"drink",
        name:"Berry Blast Thick Shake",
        price:"₹139",
        desc:"Berry Blast Thick Shake",
        pic:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/yzkpob5ifvenc79yqjvs"
    },
    {
        type:"drink",
        name:"Coke",
        price:"₹82.86",
        desc:"The perfect companion to your burger, fries and everything nice.",
        pic:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/bdh5nsr1gk9wieb6ntfp"
    }
]

export{ Data , Items};