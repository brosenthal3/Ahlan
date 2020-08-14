const aboutSections = [
    {
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

        - Our great Chef.`,
        image:"falafel.jpg"
    },
    {
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

        - A frequent customer.`,
        image:"falafel2.jpg"
    },
    {
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

        - Our great Chef.`,
        image:"grill.jpg"
    }
];
const menu = [
    {
        sectionName: "Starters",
        items: [
            {
                dishName: "Fried Falafel balls",
                dishDescription: "Served with a small dish of hummus and pickels.",
                price: "$10"
            },
            {
                dishName: "Mini-Shakshuka",
                dishDescription: "Fried egg with tomatoe sauce and bread.",
                price: "$12"
            },
            {
                dishName: "Hummus plate",
                dishDescription: "Fresh homemade Hummus, served with pita's.",
                price: "$8"
            },

        ]
    },
    {
        sectionName: "Main Courses",
        items: [
            {
                dishName: "Grilled Chicken",
                dishDescription: "Marinated in a delicious Middle-Eastern sauce. Served with a salad.",
                price: "$20"
            },
            {
                dishName: "Mesabaha",
                dishDescription: "A large dish of Hummus mixed with tahini and chickpeas. Served with pita's.",
                price: "$18"
            },
            {
                dishName: "Big Shakshuka",
                dishDescription: "Three fried eggs with tomatoe sauce and bread. Served with a salad.",
                price: "$18"
            },
            {
                dishName: "The Ahlan special",
                dishDescription: "A large plate with hummus, falafel balls and beef kebabs. Served with a salad.",
                price: "$28"
            },

        ]
    },
    {
        sectionName: "Sides",
        items: [
            {
                dishName: "French Fries",
                dishDescription: "Small plate of French fries.",
                price: "$6"
            },
            {
                dishName: "Side salad",
                dishDescription: "Mixed salad with tomatoes, cucumbers and carrots.",
                price: "$4"
            },
            {
                dishName: "White rice",
                dishDescription: "Small dish of white rice.",
                price: "$4"
            },

        ]
    },
    {
        sectionName: "Deserts",
        items: [
            {
                dishName: "Cheesecake",
                dishDescription: "The very best cheesecake in the city with strawberry jam.",
                price: "$10"
            },
            {
                dishName: "Malabi",
                dishDescription: "Corn starch pudding with sugar and rose water.",
                price: "$12"
            },

        ]
    },
    {
        sectionName: "Drinks",
        items: [
            {
                dishName: "Beer",
                dishDescription: false,
                price: "$5"
            },
            {
                dishName: "White wine",
                dishDescription: false,
                price: "$8"
            },
            {
                dishName: "Red wine",
                dishDescription: false,
                price: "$10"
            },
            {
                dishName: "Pepsi",
                dishDescription: false,
                price: "$4"
            },
            {
                dishName: "Fanta",
                dishDescription: false,
                price: "$4"
            },
            {
                dishName: "Tap water",
                dishDescription: false,
                price: "$0"
            },

        ]
    },
    
];

export {aboutSections, menu}