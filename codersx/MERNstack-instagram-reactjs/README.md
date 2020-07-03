Front-End:Reactjs
    npm create-react-app instagram-reactjs
    react-bootstrap
    react-router-dom
    styled-components
    axios

    components
        SignIn   //
        SignUp   //
        TimeLine
        User

    Router
        <Router path='/user/:id' component={UserList}/>
        <Router path='/user/add' component={UserAdd}/>
        ...
    Axios
        //GET trong componentDidMount(){} 
        axios.get('http://localhost:5000/user/')
            .then(res=>{
                if(res.data.length>0){
                    this.setState({
                        ...
                    })
                }
            })
            .catch(err=>console.log(err))

        //POST
        const user={
            name:this.state.name,
            age:this.state.age
        }
        axios.post('http://localhost:5000/user/add/',user)
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err));

        //PATch
        const user={
            name:this.state.name,
            age:this.state.age
        }
        axios.patch('http://localhost:5000/user/update/'+id,user)
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err))

        //DELETE
        axios.delete('http://localhost:5000/user/delete/'+id)  
            .then(res=>console.log(res.data))  
            .catch(err=>console.log(err));

        ...   

Back-End:Express
    npm install express cors mongoose dotenv          //cors:api su dung bat ky dau
    npm init -y
    npm install --save-dev nodemon
        "start":"nodemon server.js"

    create file
        server.js
        .env
        .gitignore 

        models
            User //su dung bcryptjs
            
        router api:su dung async/await
            /user
                /          :GET         
                /:id       :GET
                /add        :POST
                /delete/:id     :DELETE
                /update/:id     :PATcH
                /signin    :POST
            Signin
                Su dung localStorage.setItem("userId",_Id) 
                        let userId = localStorage.getItem("userId") 
Data:MongoDB
    Atlas
        create project
        network access:form anywhere
        create database
        connect your application:edit password,database link
