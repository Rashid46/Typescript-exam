interface IUserList {
    name: string;
    email: string;
    password: string;
    borrowList?: [];
    fine?: number;

}

interface IItemList {
    name: string;
    type: string;
    maxBorrowTime: number;
    status: string;
}


class lendingSystem {
    isLoggedIn = false;
    userIndex;
    public userList= [
        {
            name: 'Rashid Shahariar',
            email: 'rashid.shahariar@selise.ch',
            password: '1234',
            borrowList: [],
            count: 0,
            fine: 0
        },
        {
            name: 'Jawad Amir',
            email: 'jawad.amir@selise.ch',
            password: '123456',
            borrowList: [],
            count: 0,
            fine: 0
        }
    ]
    
    public itemList = [
        {
            name: 'Game of thrones',
            type: 'Book',
            maxBorrowTime: 4,
            status: 'free'
        },
        {
            name: 'Big hero six',
            type: 'Movie',
            maxBorrowTime: 1,
            status: 'free'
        },
        {
            name: 'Need for speed most wanted',
            type: 'Game',
            maxBorrowTime: 1,
            status: 'free'
        },
        {
            name: 'Avengers',
            type: 'Movie',
            maxBorrowTime: 1,
            status: 'free'
        }
    ]

    constructor() {
        
    }

    login(email, password) {
        let flag = true;
        for(let i=0; i<this.userList.length && flag; i++) {
            if(this.userList[i].email === email && this.userList[i].password === password) {
                console.log("Login Successfull!!!");
                flag = false;
                this.isLoggedIn = true;
                this.userIndex = i;
            }
        }
        if(flag === true) {
            console.log("Wrong username or password!!!");
            this.isLoggedIn = false;
        } 
    }

    addUser(name, email, password) {
        let newList = {
            name : name,
            email : email,
            password : password,
            borrowList : [],
            count: 0,
            fine: 0
        }

        this.userList.push(newList);
    }
    addItem(name, type, maxBorrowTime) {
        let newList = {
            name: name,
            type: type,
            maxBorrowTime: maxBorrowTime,
            status: 'free'
        }

        this.itemList.push(newList);
    }

    borrowItem(name, borrowTime) {
        if(!this.isLoggedIn) {
            console.log("Please login first!!")
        }
        else {
            let flag = true;
            for(let i=0; i<this.itemList.length && flag; i++) {
                if(this.itemList[i].name === name){
                    if(this.itemList[i].status === 'free' && this.itemList[i].maxBorrowTime >= borrowTime
                    && this.userList[this.userIndex].count <= 4){
                        this.itemList[i].status = 'unavailable';
                        let borrowList = {
                            name : this.itemList[i].name,
                            type : this.itemList[i].type,
                            borrowTime : borrowTime,
                        }
                        this.userList[this.userIndex].borrowList.push(borrowList);
                        this.userList[this.userIndex].count = this.userList[this.userIndex].count + 1;
                        console.log('The item has been issued to you!!!');
                       

                    }
                    else{
                       console.log("Not available at this moment!!!");
                    }
                    flag = false;
                }
            }
            if(flag === true) {
                console.log("This item is not available in out library!!!");
            }
        }
    }
}

let newClass = new lendingSystem;
newClass.login('rashid.shahariar@selise.ch', '1234');
newClass.borrowItem('Game of thrones', 3);
console.log(newClass.userList, newClass.itemList);
console.log(newClass.userList[0].borrowList);

let newClass2 = new lendingSystem;
newClass2.borrowItem('Game of thrones', 3);


