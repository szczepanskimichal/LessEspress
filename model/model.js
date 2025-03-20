const model = {

    app: {
        currentPage: "loginPage",
        pageList: ["profilePage", "editProfilePage", "dashboardPage", "motivationPage", "journalPage", "editJournalPage", "drinkingPage", "benefitPage", "limitPage"],
    }, 

    inputs: {
        slide1: {
            username:"username", 
            password:"password", 
            description: "placeholder for intro text",
        },

        slide2B: {
            newUsername: "",
            newPassword:"",
            checkPassword: "", 
            publicProfileField: {
                streakField: true,
                goalField: true,
                commentField: true, 
            },
            changeFields: {
                changeGoals: "",
                // others?
                writingField:false,
            }
        },
        
        slide4:{
            name:"Motivasjons-booster",
            newImage:"", 
            newTextField:"",
            editMode: true, 
        },

        slide5B:{
            title:"Endre logg",
            headers: ["kategori", "Dato", "Innhold"],
            logContent:[
                {id: 1, category: "", date: "", content:"" },
                {id: 2, category: "", date: "", content:"" },
            ],
            editMode:true,
        }, 
        slide6:{
            title: "Legg til drikke",
            newDrink: [
                {id:1, drinkName:"", coffeineNumber:""}
            ],
            placeholders: [
                {name:"Kaffe", amountCoffeine: 20, addButton: false},
                {name:"Red bull", amountCoffeine: 40, addButton: false}
            ]
        }
    },
    
    data: {
        slide2: {
            profileImg:"",
            inputAboutMe: "",
            publicProfileField: {
                    streakField: true,
                    goalField: true,
                    commentField: true, 
                },
            editMode:false,
            },
        slide3: {
            name: "dashboardPage",
            boxes: [
                {id:1, name:"MotivasjonsBooster", image:""},
                {id:2, name:"Koffein-grense", limit:"", cursor:"", koffeinTracker:"", diagram:""},
                {id:3, name:"Fordeker med å kutte ned forbruket", savingText:""},
                {id:4, name:"Drinke", lastDrinks: ["Kaffe", "Red bull"]},
                {id:5, name:"logg", content:[latestEntry]}
            ],
            profileBox: "",
        },

        slide5:{
            title:"Din logg",
            headers: ["kategori", "Dato", "Innhold"],
            logContent:[
                {id: 1, category: "", date: "", content:"", delete: false, editMode: false },
                {id: 2, category: "", date: "", content:"", delete: false, editMode: false },
            ],

            editContent: [
                {id: 0, category: "", date: "", content:"", addField: false, cancelField: false },
            ],
            editMode:true,
        },

        
    }
}