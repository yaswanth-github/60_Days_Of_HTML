// React JS

class StudentCard extends React.Component {
    render() {
    return (
    <div className="student-card">
    <img src={this.props.img} alt="Student" />
    <h3>{this.props.name}</h3>
    <p>{this.props.bio}</p>
    </div>
    )
    }
    }
    
    class App extends React.Component {
    render() {
    return (
    <div>
    <StudentCard 
           img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" 
           name="John Doe" 
           bio="John is a computer science major at XYZ University. He has experience in web development and is interested in artificial intelligence."
         />
    <StudentCard 
           img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" 
           name="Jane Smith" 
           bio="Jane is a graphic design major at XYZ University. She has experience in branding and illustration and is interested in user experience design."
         />
    </div>
    )
    }
    }
    
    ReactDOM.render(<App />, document.getElementById("root"))