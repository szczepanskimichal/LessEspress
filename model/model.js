const model = {

    app: {
        currentPage: "loginPage",
        pageList: ["profilePage", "editProfilePage", "dashboardPage", "motivationPage", "journalPage", "editJournalPage", "drinkingPage", "benefitPage", "limitPage"],
    }, 

    inputs: {
        profilePage: {
            username:"", 
            password:"", 
        },

        editProfilePage: {
            newUsername: "",
            newPassword:"",
            checkPassword: "", 
            publicProfileField: {
                streakField: true,
                goalField: true,
                commentField: true, 
            },
            editFields: {
                changeGoals: "",
                // others?
                writingField:false,
            }
        },
        
        editMotivationPage:{
            title:"",
            newImage:"", 
            newTextField:"",
            editMode: true, 
        },

        editJournalPage:{
            title:"",
            headers:[],
            logContent:[
                {id: 1, category: "", date: "", content:"", delete: false, editMode: false },
                {id: 2, category: "", date: "", content:"", delete: false, editMode: false },
            ],
           
            editMode:true,
        },

        editDrinksPage:{
            title: "",
            newDrink: [
                {id:1, drinkName:"", coffeineNumber:""}
            ],
            placeholders: [
                {name:"", amountCoffeine: 20, addButton: false},
                {name:"", amountCoffeine: 40, addButton: false}
            ]
        },

    },
    
    data: {
        profilePage: {
            profileImg:"",
            inputAboutMe: "",
            publicProfileField: {
                    streakField: true,
                    goalField: true,
                    commentField: true, 
                },
            editMode:false,
            },

        dashboardPage: {
            title: "dashboard",
            boxes: [
                {id:1, name:"MotivasjonsBooster", image:""},
                {id:2, name:"Koffein-grense", limit:"", cursor:"", koffeinTracker:"", diagram:""},
                {id:3, name:"Fordeker med å kutte ned forbruket", savingText:""},
                {id:4, name:"Drinke", lastDrinks: ["Kaffe", "Red bull"]},
                {id:5, name:"logg", content:[latestEntry]}
            ],
            profileBox: "",
        },

        journalPage:{
            title:"",
            headers:["kategori", "dato", "innhold"],
            logContent:[
                {id: 1, category: "", date: "", content:"" },
                {id: 2, category: "", date: "", content:"" },
            ],
            placeholders:[
                {}
            ]
        }
    }
}