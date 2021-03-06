import burger from './Assets/Burger_perspective_matte_s.png';
import pizza from './Assets/Pizza_perspective_matte_s.png';
import desserts from './Assets/Donut_perspective_matte_s.png';
import drink from './Assets/can-dynamic-premium.png';
import pic1 from './Assets/1.webp';
import pic2 from './Assets/2.webp';
import pic3 from './Assets/3.webp';
import pic4 from './Assets/4.webp';
import pic5 from './Assets/5.webp';
import pic6 from './Assets/6.webp';
import pic7 from './Assets/7.webp';
import pic8 from './Assets/8.webp';
import pic9 from './Assets/9.webp';
import pic10 from './Assets/10.webp';
import pic11 from './Assets/11.webp';
import pic12 from './Assets/12.webp';
import pic13 from './Assets/13.webp';
import pic14 from './Assets/14.webp';
import pic15 from './Assets/15.webp';
import pic16 from './Assets/16.webp';
import pic17 from './Assets/17.webp';
import pic18 from './Assets/18.webp';
import pic19 from './Assets/19.webp';
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
        name:"Desserts",
        src:desserts
    },
    {
        name:"Drinks",
        src:drink
    }
];
const Items=[
    {
        type:"burgers",
        name:"Cheese Lava American Chicken Burger",
        qty:1,
        price:247.65,
        desc:"A sinfully oozing cheesy Veg patty and Flame Grilled Chicken patty, loaded with Roasted Chipotle sauce, Red Onions, Jalapeno & a relishing salad, layered between freshly toasted Buns.",
        pic:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/nk97pp8xd8ijlcpexlmy"
    },
    {
        type:"burgers",
        name:"Cheese Lava American Burger - Veg",
        price:219.25,
        qty:1,
        desc:"A sinfully oozing cheesy Veg patty, loaded with Roasted Chipotle sauce, Red Onions, Jalapeno & a relishing salad, layered between freshly toasted Buns.",
        pic:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/x6ktcvyh1uswspnlcmej"
    },
    {
        type:"burgers",
        name:"McSpicy Premium Veg Burger",
        price:209.52,
        qty:1,
        desc:"A spicy Paneer patty, shredded Lettuce topped with Jalapeno and Cheese slice, Spicy Cocktail sauce & Cheese sauce layered between toasted Whole Wheat Buns.",
        pic:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/qgmq5t3eyxx13jkhlnym"
    },
    {
        type:"pizzas",
        name:"Schezwan Chicken Pizza",
        price:319,
        qty:1,
        desc:"Schezwan chicken, onion, capsicum and spring onion.",
        pic:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/dzseyjlcwvskci44ltno"
    },
    {
        type:"pizzas",
        name:"Paneer Makhani Pizza",
        price:319,
        qty:1,
        desc:"Capsicum, onion, red paprika and paneer tikka in tandoori sauce.",
        pic:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/lielkhosn4yksvdb50dg"
    },
    {
        type:"pizzas",
        name:"Chicken Tornado Pizza",
        price:339,
        qty:1,
        desc:"Spicy chicken keema, chicken tikka capsicum, onion.",
        pic:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/w87kdisixddxa4oymebh"
    },
    {
        type:"salads",
        name:"Roasted chicken Strips Salad",
        price:287,
        qty:1,
        desc:"Everything but the bread!",
        pic:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/yumaujqs2hm2ozdg7sb3"
    },
    {
        type:"salads",
        name:"Veggie Delite Salad",
        price:259,
        qty:1,
        desc:"Everything but the bread!",
        pic:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wubzfcrbkt6x1mbp67ez"
    },
    {
        type:"salads",
        name:"Paneer Tikka Salad",
        price:278,
        qty:1,
        desc:"Everything but the bread!",
        pic:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/nhlophub642elaxii2ok"
    },
    {
        type:"desserts",
        name:"One Shot 3 Birds Triple Sundae",
        price:175,
        qty:1,
        desc:"A combination of 3 scoops of pista, butterscotch and anjeer badam with different sauces and lots of nuts, simply solid, a smart one to compliment your style.",
        pic:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wcldffdwrkm98fnkmc8x"
    },
    {
        type:"desserts",
        name:"World'S Best Chocolate Triple Sundae",
        price:175,
        qty:1,
        desc:"A combo of Belgium dark chocolate, chocolate, choco chips with lots of nuts & sauces.",
        pic:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wx7mejlo8sg1nhsf1vn0"
    },
    {
        type:"desserts",
        name:"Black Forest McFlurry Medium",
        price:99.04,
        qty:1,
        desc:"Black Forest McFlurry Medium",
        pic:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/vorqylpqff1xngmfkx2y"
    },
    {
        type:"drinks",
        name:"Chocolate Thick Shake",
        price:139,
        qty:1,
        desc:"Our signature chocolate thick shake.",
        pic:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/kj9hypk5lgl15fawayiy"
    },
    {
        type:"drinks",
        name:"Berry Blast Thick Shake",
        price:139,
        qty:1,
        desc:"Berry Blast Thick Shake",
        pic:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/yzkpob5ifvenc79yqjvs"
    },
    {
        type:"drinks",
        name:"Coke",
        price:82.86,
        qty:1,
        desc:"The perfect companion to your burger, fries and everything nice.",
        pic:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/bdh5nsr1gk9wieb6ntfp"
    }
]
const Pictures = [
    {
        src:pic1
    },
    {
        src:pic2
    },
    {
        src:pic3
    },
    {
        src:pic4
    },
    {
        src:pic5
    },
    {
        src:pic6
    },
    {
        src:pic7
    },
    {
        src:pic8
    },
    {
        src:pic9
    },
    {
        src:pic10
    },
    {
        src:pic11
    },
    {
        src:pic12
    },
    {
        src:pic13
    },
    {
        src:pic14
    },
    {
        src:pic15
    },
    {
        src:pic16
    },
    {
        src:pic17
    },
    {
        src:pic18
    },
    {
        src:pic19
    }
]


export{ Data , Items,Pictures};