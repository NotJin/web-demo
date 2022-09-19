let data = {
    menu: [
        {
            id: 1,
            name: 'Type'
        },
        {
            id: 2,
            name: 'Dietary'
        },
        {
            id: 3,
            name: 'Ingredients'
        },
        {
            id: 4,
            name: 'Occasion'
        },
        {
            id: 5,
            name: 'Seasonal'
        },
        {
            id: 6,
            name: 'Skill-Level'
        }
    ]
};

let  menu_category = {
    menu:[
        {
            id: 1,
            name: 'Bread',
        },
        {
            id: 1,
            name: 'Breakfast',
        },
        {
            id: 1,
            name: 'Dessert',
        },
        {
            id: 1,
            name: 'Brownies & Bars',
        },
        {
            id: 1,
            name: 'Cake',
        },
        {
            id: 1,
            name: 'Candy',
        },
        {
            id: 1,
            name: 'Cookies',
        },
        {
            id: 1,
            name: 'Cupcake',
        },
        {
            id: 1,
            name: 'Donuts',
        },
        {
            id: 1,
            name: 'Granola & Granola Bars',
        },
        {
            id: 1,
            name: 'Ice Cream & Frozen Treats',
        },
        {
            id: 1,
            name: 'Muffins',
        },
        {
            id: 1,
            name: 'Pies, Crisp, & Tarts',
        },
        {
            id: 1,
            name: 'Quick Bread',
        },
        {
            id: 1,
            name: 'Scones',
        },
        {
            id: 1,
            name: 'Sweet Rolls',
        },
        {
            id: 2,
            name: 'Dairy Free'
        },
        {
            id: 2,
            name: 'Egg Free Baking'
        },
        {
            id: 2,
            name: 'Gluten Free'
        },
        {
            id: 2,
            name: 'Vegan'
        },
        {
            id: 3,
            name: 'almond'
        },
        {
            id: 3,
            name: 'apples'
        },
        {
            id: 3,
            name: 'applesauce'
        },
        {
            id: 3,
            name: 'bananas'
        },
        {
            id: 3,
            name: 'blueberries'
        },
        {
            id: 3,
            name: 'cake flour'
        },
        {
            id: 3,
            name: 'chocolate chips'
        },
        {
            id: 3,
            name: 'cream cheese'
        },
        {
            id: 3,
            name: 'egg whites'
        },
        {
            id: 3,
            name: 'heavy cream'
        },
        {
            id: 3,
            name: 'lemons'
        },
        {
            id: 3,
            name: 'peanut butter'
        },
        {
            id: 3,
            name: 'pumpkin'
        },
        {
            id: 3,
            name: 'pumpkin pie spice'
        },
        {
            id: 3,
            name: 'sour scream'
        },
        {
            id: 3,
            name: 'sprinkles'
        },
        {
            id: 3,
            name: 'whole wheat flour'
        },
        {
            id: 3,
            name: 'yogurt'
        },
        {
            id: 4,
            name: 'Birthday'
        },
        {
            id: 4,
            name: 'Christmas'
        },
        {
            id: 4,
            name: 'Easter'
        },
        {
            id: 4,
            name: 'Halloween'
        },
        {
            id: 4,
            name: 'St.Patrick\'s Day'
        },
        {
            id: 4,
            name: 'Thanksgiving'
        },
        {
            id: 4,
            name: 'Valentine\'s Day'
        },
        {
            id: 5,
            name: 'Fall'
        },
        {
            id: 5,
            name: 'Spring'
        },
        {
            id: 5,
            name: 'Summer'
        },
        {
            id: 5,
            name: 'Winter'
        },
        {
            id: 6,
            name: 'Advanced'
        },
        {
            id: 6,
            name: 'Beginner'
        },
        {
            id: 6,
            name: 'Intermediate'
        }
    ]
};

var ds_SP = {
    menu: [
        {
            id: 1,
            name: 'Dark Chocolate Peanut Butter Cake',
            image: 'https://sallysbakingaddiction.com/wp-content/uploads/2022/07/chocolate-peanut-butter-cake-slice-425x638.jpg',
            desert: true,
            cake: true,
            chocochip: true,
            heavyscream: true,
            peanutbutter: true
        },
        {
            id: 2,
            name: 'Perfect Peach Pie Recipe',
            image: 'https://sallysbakingaddiction.com/wp-content/uploads/2018/07/peach-pie-with-lattice-top-2-425x638.jpg',
            summer: true
        },
        {
            id: 3,
            name: 'Easy Make-Ahead Breakfast Casserole',
            image: 'https://sallysbakingaddiction.com/wp-content/uploads/2015/09/egg-breakfast-casserole-2-425x638.jpg',
            breakfast: true,
        },
        {
            id: 4,
            name: 'Cookie Monster Cake (for Decorating Beginners)',
            image: 'https://sallysbakingaddiction.com/wp-content/uploads/2022/07/decorated-cookie-monster-cake-425x638.jpg',
            cake: true,
            desert: true,
            cakeflour: true,
            chocochip: true,
            eggwhite: true
        },
        {
            id: 5,
            name: 'Double Chocolate Chip Cookies Recipe',
            image: 'https://sallysbakingaddiction.com/wp-content/uploads/2022/07/double-chocolate-chip-cookies-recipe-425x638.jpg',
            cookies: true,
            chocochip: true,
            beginner: true
        },
        {
            id: 6,
            name: 'Bruschetta Chicken with Zucchini Noodles',
            image: 'https://sallysbakingaddiction.com/wp-content/uploads/2016/01/bruschetta-chicken-dinner-with-zucchini-noodles-425x638.jpg',
            dairy: true,
            gluten: true
        },
        {
            id: 7,
            name: 'Peach Streusel Muffins',
            image: 'https://sallysbakingaddiction.com/wp-content/uploads/2014/07/peach-muffins-425x638.jpg',
            breakfast: true,
            muffin: true,
            heavyscream: true,
            yogurt: true,
            summer: true
        },
        {
            id: 8,
            name: 'Fruit Pizza',
            image: 'https://sallysbakingaddiction.com/wp-content/uploads/2014/05/sugar-cookie-fruit-pizza-425x638.jpg',
            category: '',
            desert: true,
            blueberries: true,
            creamcheese: true,
            heavyscream: true,
            summer: true
        },
        {
            id: 9,
            name: 'Cookie Ice Cream Sandwiches',
            image: 'https://sallysbakingaddiction.com/wp-content/uploads/2022/06/chocolate-chip-cookie-ice-cream-sandwiches-1-1-425x638.jpg',
            cookies: true,
            desert: true,
            chocochip: true,
            summer: true,
            beginner: true
        },
        {
            id: 10,
            name: 'Simply Perfect Vanilla Cupcakes',
            image: 'https://sallysbakingaddiction.com/wp-content/uploads/2016/08/homemade-vanilla-cupcakes-with-vanilla-buttercream-425x638.jpg',
            cupcake: true,
            cakeflour: true,
            eggwhite: true,
            heavyscream: true,
            sprinkles: true,
            birthday: true
        },
        {
            id: 11,
            name: 'Mini Margarita Cheesecakes',
            image: 'https://sallysbakingaddiction.com/wp-content/uploads/2022/06/mini-margarita-cheesecakes-425x638.jpg',
            desert: true
        },
        {
            id: 12,
            name: 'Simply the Best Blueberry Pie',
            image: 'https://sallysbakingaddiction.com/wp-content/uploads/2016/06/blueberry-pie-425x638.jpg',
            blueberries: true
        },
        {
            id: 13,
            name: 'Easy Zucchini Casserole Recipe',
            image: 'https://sallysbakingaddiction.com/wp-content/uploads/2022/06/zucchini-feta-bake-425x638.jpg',
            breakfast: true,
            heavyscream: true
        },
        {
            id: 14,
            name: 'Peanut Butter Filled Brownie Cookies',
            image: 'https://sallysbakingaddiction.com/wp-content/uploads/2022/05/peanut-butter-brownie-cookies-425x638.jpg',
            desert: true,
            cookies: true,
            peanutbutter: true,
            intermediate: true
        },
        {
            id: 15,
            name: 'Simply Zucchini Muffins',
            image: 'https://sallysbakingaddiction.com/wp-content/uploads/2022/05/zucchini-muffins-2-425x638.jpg',
            fall: true
        },
        {
            id: 16,
            name: 'Strawberry Cream Cheese Pie',
            image: 'https://sallysbakingaddiction.com/wp-content/uploads/2022/05/homemade-strawberry-cream-cheese-pie-425x638.jpg',
            birthday: true,
            spring: true
        },
        {
            id: 17,
            name: 'Zucchini Bread (Better than Ever!)',
            image: 'https://sallysbakingaddiction.com/wp-content/uploads/2017/07/easy-zucchini-bread-425x638.jpg',
            bread: true,
            quickbread: true,
            dairy: true,
            chocochip: true
        },
        {
            id: 18,
            name: 'Chewy Chocolate Chip Cookies',
            image: 'https://sallysbakingaddiction.com/wp-content/uploads/2013/05/classic-chocolate-chip-cookies-425x638.jpg',
            cookies: true,
            chocochip: true
        },
        {
            id: 19,
            name: 'Easy No-Knead Olive Bread',
            image: 'https://sallysbakingaddiction.com/wp-content/uploads/2022/05/olive-bread-425x638.jpg',
            bread: true
        },
        {
            id: 20,
            name: '15+ Mother’s Day Recipes',
            image: 'https://sallysbakingaddiction.com/wp-content/uploads/2019/05/one-layer-strawberry-shortcake-cake-white-cake-stand-425x638.jpg',
            spring: true
        },
        {
            id: 21,
            name: 'Carrot Cake Loaf (Quick Bread)',
            image: 'https://sallysbakingaddiction.com/wp-content/uploads/2020/10/carrot-cake-loaf-425x638.jpg',
            cake: true,
            quickbread: true
        },
        {
            id: 22,
            name: 'Easy Homemade Sprinkle Cake',
            image:'https://sallysbakingaddiction.com/wp-content/uploads/2013/03/easy-funfetti-confetti-cake-425x638.jpg',
            cake: true
        }
    ]
}
