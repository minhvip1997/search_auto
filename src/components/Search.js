import React from "react";
import './Search.css';

class Search extends React.Component {
    state = {
        items: [
            {id: 1, city: 'Ha Noi', province: 'Gia Lam'},
            {id: 2, city: 'Ha Noi', province: 'Long Bien'},
            {id: 3, city: 'Ha Noi', province: 'Hoan Kiem'},
            {id: 4, city: 'Da Nang', province: 'Hai Chau'},
            {id: 5, city: 'Da Nang', province: 'Thanh Khe'},
            {id: 6, city: 'Da Nang', province: 'Son Tra'},
            {id: 7, city: 'Sai Gon', province: 'Thu Duc'},
            {id: 8, city: 'Sai Gon', province: 'Thu Thiem'},
            {id: 9, city: 'Sai Gon', province: 'Go Vap'},
        ],
        item:{
            id: '', city: '', province: ''
        },
        isShow: true,
        search: [],
        userInput: '',
        cursor: 0,
    }

    handleOnChangeInputSearch = (event)=>{

        let input = event.target.value
        this.setState({
            userInput: input,
            isShow: false
        })
        // console.log(this.state.userInput)
        let  a = this.state.items.filter((item,index)=>{
            console.log(item)
            return (item.city.toLowerCase().includes(input.toLowerCase()))
        })
        // console.log(a)
        this.setState({
            search: a
        })
        
    }

    handleOnChangeInputCity = (event) =>{
        let input = event.target.value
        this.setState({
            item: {
                ...this.state.city,
                city: input
          },
            isShow: false
        })
        // console.log(this.state.userInput)
        let  a = this.state.items.filter((item,index)=>{
            console.log(item)
            return (item.city.toLowerCase().includes(input.toLowerCase()))
        })
        // console.log(a)
        this.setState({
            search: a
        })
    }

    handleOnChangeInputProvince = (event) =>{
        let input = event.target.value
        this.setState({
            item: {
                ...this.state.province,
                province: input
          },
            isShow: false
        })
        // console.log(this.state.userInput)
        let  a = this.state.items.filter((item,index)=>{
            console.log(item)
            return (item.province.toLowerCase().includes(input.toLowerCase()))
        })
        // console.log(a)
        this.setState({
            search: a
        })
    }


    handleOnKeyPress = (event)=>{
        
        if (event.keyCode === 38 && this.state.cursor > 0) {
            // down up
            console.log('up key')
            this.setState({
                isShow:false
            })
            this.setState( prevState => ({
                cursor: prevState.cursor - 1
              }))
              console.log(this.state.cursor)
            
        }
        else if (event.keyCode === 40 && this.state.cursor < this.state.items.length - 1) {
            // down arrow
            console.log('up down')
            this.setState({
                isShow:false
            })
            this.setState( prevState => ({
                cursor: prevState.cursor + 1
              }))

            console.log(this.state.cursor)
            
        }
        else if (event.keyCode === 37) {
           // left arrow
        }
        else if (event.keyCode === 39) {
           // right arrow
        }
    }

    componentDidMount() {
		
		document.addEventListener("keydown", this.handleOnKeyPress, false); // 38 40
	}

	componentWillUnmount() {
		
		document.removeEventListener("keydown", this.handleOnKeyPress, false); // 38 40
	}

    handleOnCLickCity = (itemchoose)=>{
        this.setState({
            item: itemchoose,
            userInput: itemchoose.city,
            isShow: true
        });
    }

    handleOnClickShow = () =>{
        this.setState({
            isShow: !this.state.isShow
        })
        
    }


    render() {
        const {items,item, isShow,userInput,search} = this.state;

        return (
            <div className="table">
                <table style={{width:"100%"}}>
                <thead>
                    <tr>
                        <th colSpan="2">
                        <input value={userInput} placeholder="Search full" onChange={(event) => this.handleOnChangeInputSearch(event)}/>
                        {isShow === true ?
                        <button onClick={()=>this.handleOnClickShow()}>Show</button> :
                        <button onClick={()=>this.handleOnClickShow()}>Hide</button>
                        }
                        </th>
                    </tr>
                     
                </thead>
                {isShow === false ? 
                <tbody>
                
                    <tr>
                    <th><input value={item.city} placeholder="city" onChange={(event) => this.handleOnChangeInputCity(event)}/></th>
                    <th><input value={item.province} placeholder="province" onChange={(event) => this.handleOnChangeInputProvince(event)}/></th>
                    </tr>
                    <tr>
                        <th>City</th>
                        <th>Province</th>
                    </tr>
                        {search.length >0 ? search.map((item,index)=>{
                        return (
                            <tr key={item.id}>
                                <td><span id={item.id} className={this.state.cursor === index ? 'activea' : null} onClick={()=>this.handleOnCLickCity(item)}>{item.city}</span></td>
                                <td><span id={item.id} className={this.state.cursor === index ? 'activea' : null} onClick={()=>this.handleOnCLickCity(item)}>{item.province}</span></td>
                            </tr>
                        )
                        })
                        :
                        items.map((item,index)=>{
                            return (
                                <tr key={item.id}>
                                    <td><span id={item.id} className={this.state.cursor === index ? 'activea' : null} onClick={()=>this.handleOnCLickCity(item)}>{item.city}</span></td>
                                    <td><span id={item.id} className={this.state.cursor === index ? 'activea' : null} onClick={()=>this.handleOnCLickCity(item)}>{item.province}</span></td>
                                </tr>
                            )
                        }) 
                        }
                    </tbody>
                    :
                    <tbody></tbody>
                    }
                </table>
            </div>
        )
    }
}
export default Search;