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
        userInput: ''
    }

    handleOnChangeInputSearch = (event)=>{
        this.setState({
            userInput: event.target.value
        })
        console.log(this.state.userInput)
        let  a = this.state.items.filter((item,index)=>{
            return (item.city.toLowerCase().includes(this.state.userInput.toLowerCase()))
        })
        console.log(a)
        this.setState({
            search: a
        })
        
    }

    handleOnCLickCity = (itemchoose)=>{
        // console.log(itemchoose)
        this.setState({
            item: itemchoose
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
                            <td><span onClick={()=>this.handleOnCLickCity(item)}>{item.city}</span></td>
                            <td><span onClick={()=>this.handleOnCLickCity(item)}>{item.province}</span></td>
                        </tr>
                        
                    )
                    })
                    :
                    items.map((item,index)=>{
                        return (
                            
                            <tr key={item.id}>
                                <td><span onClick={()=>this.handleOnCLickCity(item)}>{item.city}</span></td>
                                <td><span onClick={()=>this.handleOnCLickCity(item)}>{item.province}</span></td>
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