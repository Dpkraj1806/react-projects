const e=React.createElement;

class Like extends React.Component{
    constructor(props){
        super(props);
        this.state={liked:false};
    }
    render(){
        if(this.state.liked){
            return'Button clicked';
        }
        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        )
    }
}

const likebutton = document.getElementById("like-button")
const root = ReactDOM.createRoot(likebutton)
root.render(e(Like))