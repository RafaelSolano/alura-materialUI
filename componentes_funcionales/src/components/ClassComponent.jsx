import  { Component } from "react";
class ClassComponent  extends Component{
    constructor(){
        super()
        this.state={
            count : 0,
        }
    }
    render(){
        return (
            <div>
                ClassComponent
                <p>
                    <button
                        onClick={()=>
                        this.setState({
                            count:
                                this.state.count-1,   
                        })
                        }
                    >-</button>
                    {this.state.count}
                    <button
                        onClick={() =>
                            this.setState({
                                count:
                                    this.state.count+1,
                            })    
                        }
                    >+</button>
                </p>
            </div>
        )
    }
}
export default ClassComponent