import ReactDOM from 'react-dom';
import React from 'react';
import './style.css';
/* 
ReactDOM.render(
    <h1>Hello Victor Do</h1>,
    document.getElementById('root')
  );
*/
// Expressions : Hello Expressions 
/*
const name = 'victor';
const el = <h1>Hello, {name}</h1>;
ReactDOM.render(
    el,
    document.getElementById('root')
);
*/
// Add function formatName
/*
const userName = {
    fistName: 'Victor',
    lastName: 'Do'
}
function formatName(user) {
    return user.fistName + ' ' + user.lastName ;
}

const el = <h1>Hello, {formatName(userName)}</h1>;
ReactDOM.render(
    el,
    document.getElementById('root')
)  
*/
// JSX is an Expression too
/*
const userName = {
    fistName: 'Victor',
    lastName: 'Do'
}
function formatName(user) {
    if(user) {
        return `Hello ${user.fistName} ${user.lastName}` ;
    }
    return 'Hello, Strange'
}

const el = <h1>{formatName(userName)}</h1>;
ReactDOM.render(
    el,
    document.getElementById('root')
) 
*/
// Specifiying attributes 
/*
const el = <img src={'https://66.media.tumblr.com/d72e2e167070c63e88589d27fc2c1d2d/tumblr_od0p9kKnb11vf8b0wo1_1280.jpg'} alt="Girl"/>;
ReactDOM.render(
    el,
    document.getElementById('root')
)
*/
/*
Since JSX is closer to JavaScript than to HTML, 
React DOM uses camelCase property naming convention instead of HTML attribute names.
For example, class becomes className in JSX, and tabindex becomes tabIndex.
*/
//Specifying Children with JSX
//If a tag is empty, you may close it immediately with />, like XML
/*
const el = <img src={'https://66.media.tumblr.com/885328244b99c8161e4b6ecab22cee78/tumblr_oeo5ip5tYx1qadv0oo1_1280.jpg'}/>

ReactDOM.render(
    el,
    document.getElementById('root')
)
*/

//JSX tags may contain children:
/*
const el = (
    <div>
        <h1>Victor Do</h1>
        <p>I will learn React with</p>
        <ul>
            <li>React</li>
            <li>React Dom</li>
        </ul>
    </div>
);
ReactDOM.render(
    el,
    document.getElementById('root')
)
*/

//JSX Prevents Injection Attacks
/*
const title = response.potentiallyMaliciousInput;
// This is safe:
const el = <h1>{title}</h1>;
ReactDOM.render(
    el,
    document.getElementById('root')
)
*/
// JSX Respresent Object
/*These objects are called “React elements”. You can think of them as descriptions of what you want to see on the screen. React reads these objects and uses them to construct the DOM and keep it up to date. */

/*
const elJSX = (
    <h1 className = "greeting">
        Hello Victor
    </h1>
);

const elJS = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello Victor'
);
/*
const elJS = React.createElement(
    type: 'h1',
    props: {
        className: 'greeting',
        children: 'Hello Victor'
    }
)
*/
/*
Rendering an Element into the DOM
In practice, most React apps only call ReactDOM.render() once.
*/
/*
ReactDOM.render (
    elJS,
    document.getElementById('root')
)
*/
/** Elements are what components are “made of”, and we encourage you to read this section before jumping ahead. */


//Updating the Rendered Element use ReactDOM.render()
/*
function tick() {
    const el = (
        <div>
            <h1>Hello Victorc</h1>
            <h2>It is<span> </span> 
             {new Date().toLocaleTimeString()}.
            </h2>
        </div>
    );
    ReactDOM.render (
        el,
        document.getElementById('root')
    )
}
setInterval(tick, 1000);
*/
/* 
React elements are immutable. Once you create an element, you can’t change its children or attributes.

With our knowledge so far, the only way to update the UI is to create a new element, and pass it to ReactDOM.render().*/

/*--------------------------
----Components and Props----
------------------------- */
/*Components let you split the UI into independent, reusable pieces,  */
 /*-----Function and Class Components--------- */
 // Function component
 /*
 function welcome(props) {
     return <h1>Hello, {props.name}</h1>
 }

 // Class componet 
 class welcome1 extends React.Component {
     render() {
         return <h1>Hello, {this.props.name}</h1>
     }
 }
*/
// React elements that represent DOM tags
// const el = <div/>
// elements can also represent user-defined components:

// const el2 = <welcome name="sara"/>

/*When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object “props”. */
//Note: Always start component names with a capital letter.
/*
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
};
const el = <Welcome name="Victor"/>;

ReactDOM.render (
    el,
    document.getElementById('root')
);
*/
// we can create an App component that renders Welcome many times:
/*
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}
function App() {
    return (
        <div>
            <Welcome name="Victor"/>
            <Welcome name="Jonas"/>
            <Welcome name="john"/>
        </div>
    )
}
ReactDOM.render(
    App(),
    document.getElementById('root')
);
*/
// render list hello with name(props) Welcome: componet ; name="value" as props (attribute)
/*
function Welcome(props) {
    return <h1>Hello , {props.name}</h1>
}

function App() {
    return (
        <div>
            <Welcome name="Victor"/>
            <Welcome name="Jonas"/>
            <Welcome name="John"/>
        </div>
    )
}

ReactDOM.render(
    App(),
    document.getElementById('root')
)
*/
// Extracting  Components
/*
function formatDate(date) {
    return date.toLocaleDateString();
  };
  function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img
                    className="Avatar"
                    src={props.author.avatarUrl} // props.comment.author.avatarUrl
                    alt={props.author.name}
                />
                <div className="UserInfo-name">
                    <h1>{props.author.name}</h1>
                </div>
                <div className="Comment-text">
                    <p>{props.text}</p>
                </div>
                <div className="Comment-date">
                    {formatDate(props.date)}
                </div>
            </div>
        </div>
    )
};
const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React',
    author: {
        name: 'Victor Do',
        avatarUrl: 'https://66.media.tumblr.com/859e7e836ed478513c4b6ad542f9aa77/tumblr_p2wbo49jzH1vf8b0wo1_1280.jpg'
    }
};
ReactDOM.render(
    <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
    />,
    document.getElementById('root')
);
*/
/* 
B1: We call ReactDOM.render() with the 
<Comment    date={comment.date}
            text={comment.text}
            author={comment.author}
/> element.
React calls the Comment component with 
{           date={comment.date}
            text={comment.text}
            author={comment.author}
} as the props (props.date prop.text prop.author)

*/
//Extracting Components
/*
function formatDate(date) {
    return date.toLocaleDateString();
  };
function Avatar(props) {
    return <img
    className="Avatar"
    src={props.user.avatarUrl} // props.author.avarUrl
    // comment.author.avarUrl
    alt={props.user.name}
/>
}
function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user}/>
            <div className="UserInfo-name">
                <h1>{props.user.name}</h1>
            </div>
        </div>
    )
}
  function Comment(props) {
    return (
        <div className="Comment">
                <UserInfo user={props.author}/>
                <div className="Comment-text">
                    <p>{props.text}</p>
                </div>
                <div className="Comment-date">
                    {formatDate(props.date)}
                </div>
        </div>
    )
};
const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React',
    author: {
        name: 'Victor Do',
        avatarUrl: 'https://66.media.tumblr.com/859e7e836ed478513c4b6ad542f9aa77/tumblr_p2wbo49jzH1vf8b0wo1_1280.jpg'
    }
};
ReactDOM.render(
    <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
    />,
    document.getElementById('root')
);
*/
/*--------------------------
----State and lifecycle ----
------------------------- */
/*
function Clock(props) {
    return (
        <div>
            <h1>Hello World !</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    )
    // new Date().tolocaleTimeString()
};

function tick() {
    ReactDOM.render(
        <Clock date={new Date()}/>,
        document.getElementById('root')
    )
};
setInterval(tick, 1000);
*/
/*
class Clock extends React.Component {
    render() {
        return (
        <div>
            <h1>Hello World !</h1>
            <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
        </div>
        )
    };
}
function tick() {
    ReactDOM.render(
        <Clock date={new Date()}/>,
        document.getElementById('root')
    )
};
setInterval(tick, 1000);
*/
// Adding local State to a Class
/*
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    };
    render() {
        return (
        <div>
            <h1>Hello World !</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
        )
    };
}
ReactDOM.render(
    <Clock/>,
    document.getElementById('root')
)
*/
//adding Lifecycle Methods to a Class
/*
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    };
    componentDidMount() {
        this.TimerID = setInterval(
            () => this.tick(), 1000
        );
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    componentWillUnmout () {
        clearInterval(this.TimerID);
    }
    render() {
        return (
        <div>
            <h1>Hello World !</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
        )
    };
}
ReactDOM.render(
    <Clock/>,
    document.getElementById('root')
)
*/
/** Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state
  this.setState({
  counter: this.state.counter + this.props.increment,
});.
*/
/** This is why state is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it.
*/
/*
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    };
    componentDidMount() {
        this.TimerID = setInterval(
            () => this.tick(), 1000
        );
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    componentWillUnmout () {
        clearInterval(this.TimerID);
    }
    render() {
        return (
        <div>
            <h1>Hello World !</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
        )
    };
}
function App() {
    return (
        <div>
            <Clock/>
            <Clock/>
            <Clock/>
        </div>
    )
}
ReactDOM.render(
    App(),
    document.getElementById('root')
)
*/
/*--------------------------
----Handding evernt---- ----
------------------------- */
/*
You have to be careful about the meaning of this in JSX callbacks. In JavaScript, class methods are not bound by default. If you forget to bind this.handleClick and pass it to onClick, this will be undefined when the function is actually called.
 */
/*
class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: false};
  
      // This binding is necessary to make `this` work in the callback
      //https://viblo.asia/p/su-dung-bind-cho-cac-ham-cua-class-components-trong-react-lieu-co-can-thiet-OeVKBDPylkW
      this.handleClick = this.handleClick.bind(this);
    }
    // call gia tri truoc do cua state sau do di so sanh neu on thi off con off thi on : prevState: gia tri truoc do
    handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }

    render() {
        return (
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
          </button>
        );
    }
}
ReactDOM.render(
    <Toggle/>,
    document.getElementById('root')
)
*/
/**
 If you aren’t using class fields syntax, you can use an arrow function in the callback:
 */
/*
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state={isToggleOn:false};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => ({isToggleOn: !prevState.isToggleOn}))
    }
    render() {
        return (
            <button onClick={() => this.handleClick()}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}
ReactDOM.render(
    <Toggle/>,
    document.getElementById('root')
)
*/
/*
class LoggingButton extends React.Component {
    handleClick() {
        alert('this is: ', this);
    }
    render() {
        return (
            <button onClick = {() => this.handleClick()}>
                Click Me
            </button>
        )
    }
}
ReactDOM.render(
    <LoggingButton/>,
    document.getElementById('root')
)
*/
/**
 * The problem with this syntax is that a different callback is created each time the LoggingButton renders. In most cases, this is fine. However, if this callback is passed as a prop to lower components, those components might do an extra re-rendering. We generally recommend binding in the constructor or using the class fields syntax, to avoid this sort of performance problem.
 */
/*
function UserGreeting() {
    return (
        <h1>Welcome Back</h1>
    )
}
function GuestGreeting() {
    return (
        <h1>Please Sign Up</h1>
    )
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn) {
        return (
            <UserGreeting/>
        )
        // Greeting user
    }
    else {
        return (
            <GuestGreeting/>
        )
        // greeting guest
    }
}
ReactDOM.render(
    <Greeting isLoggedIn={true} />,
    document.getElementById('root')
)
*/
// Element Variable
/*
function UserGreeting() {
    return (
        <h1>Welcome Back</h1>
    )
}
function GuestGreeting() {
    return (
        <h1>Please Sign Up</h1>
    )
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn) {
        return (
            <UserGreeting/>
        )
        // Greeting user
    }
    else {
        return (
            <GuestGreeting/>
        )
        // greeting guest
    }
}
function LogoutButton(props){
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    )
};
function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    )
};
class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handlelogoutClick = this.handleLogoutClick.bind(this);
    }
    handleLoginClick() {
        this.setState({isLoggedIn: false})
    }
    handleLogoutClick() {
        this.setState({isLoggedIn: true})
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick}/>
        }
        else {
            button = <LoginButton onClick={this.handleLoginClick}/>
        }
        return(
            <div>
                <Greeting isLoggedIn = {isLoggedIn}/>
                {button}
            </div>
        )
    }
}

ReactDOM.render(
    <LoginControl/>,
    document.getElementById('root')
)
*/
/*
function UserGreeting() {
    return (
        <h1>Welcome Back</h1>
    )
}
function GuestGreeting() {
    return (
        <h1>Please Sign Up</h1>
    )
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn) {
        return (
            <UserGreeting/>
        )
        // Greeting user
    }
    else {
        return (
            <GuestGreeting/>

        )
        // greeting guest
    }
}
class LoginButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }
    handleLoginClick(){
        this.setState({isLoggedIn: true})
    }
    handleLogoutClick(){
        this.setState({isLoggedIn: false})
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <button onClick={this.handleLogoutClick}>Login</button>;
        }
        else {
            button = <button onClick={this.handleLoginClick}>Logout</button> ;
        }
        return (
            <div>
                <Greeting  isLoggedIn = {isLoggedIn}/>
                {button}
            </div>
        )
    }
}
ReactDOM.render(
    <LoginButton />,
    document.getElementById('root')
)
*/
/*
function UserGreeting() {
    return (
        <h1>Welcome Back</h1>
    )
}
function GuestGreeting() {
    return (
        <h1>Please Sign Up</h1>
    )
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn) {
        return (
            <UserGreeting/>
        )
        // Greeting user
    }
    else {
        return (
            <GuestGreeting/>

        )
        // greeting guest
    }
}
function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    )

}
function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    )
}
class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }
    handleLoginClick(){
        this.setState({isLoggedIn: true})
    }
    handleLogoutClick(){
        this.setState({isLoggedIn: false})
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick}/>;
        }
        else {
            button = <LoginButton onClick={this.handleLoginClick}/>;
        }
        return (
            <div>
                <Greeting  isLoggedIn = {isLoggedIn}/>
                {button}
            </div>
        )
    }
}
ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
)
*/
//Inline If with Logical && Operator
//You may embed expressions in JSX by wrappin
/*
function Mailbox(props) {
    return (
        <h1>You have {props.unreadMessages} unread messages.</h1>
    )
}
const mail = ['Victor: Fly', 'Jonas: JS',' React: update']
ReactDOM.render(
    <Mailbox unreadMessages = {mail.length}/>,
    document.getElementById('root')
)
*/
/*
function Mailbox(props) {
    return (
        <div>
            <h1>Hello</h1>
            {props.unreadMessages > 0 &&
            <h2>You have {props.unreadMessages} unread messages.
            </h2> }
        </div>
    )
}
const mail = ['Victor: Fly', 'Jonas: JS',' React: update', 'React: Redux']
ReactDOM.render(
    <Mailbox unreadMessages = {mail.length}/>,
    document.getElementById('root')
)
*/
/**
 * It works because in JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false.

Therefore, if the condition is true, the element right after && will appear in the output. If it is false, React will ignore and skip it.


 */
//Inline If-Else with Conditional Operator
/*
function UserGreeting() {
    return (
        <h1>Welcome Back</h1>
    )
}
function GuestGreeting() {
    return (
        <h1>Please Sign Up</h1>
    )
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    return(
        <div>
            {isLoggedIn ?  <UserGreeting/> : <GuestGreeting/>}
        </div>
    )
}
    
ReactDOM.render(
    <Greeting isLoggedIn={false} />,
    document.getElementById('root')
)
*/
/*
function UserGreeting() {
    return (
        <h1>Welcome Back</h1>
    )
}
function GuestGreeting() {
    return (
        <h1>Please Sign Up</h1>
    )
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn) {
        return (
            <UserGreeting/>
        )
        // Greeting user
    }
    else {
        return (
            <GuestGreeting/>

        )
        // greeting guest
    }
}
function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    )

}
function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    )
}
class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }
    handleLoginClick(){
        this.setState({isLoggedIn: true})
    }
    handleLogoutClick(){
        this.setState({isLoggedIn: false})
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick}/>;
        }
        else {
            button = <LoginButton onClick={this.handleLoginClick}/>;
        }
        return (
            <div>
                <Greeting  isLoggedIn = {isLoggedIn}/>
                {isLoggedIn 
                ? <LogoutButton onClick={this.handleLogoutClick}/> 
                : <LoginButton onClick={this.handleLoginClick}/>
                }
            </div>
        )
    }
}
ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
)
*/
//Preventing Component from Rendering
/*
function WarningBanner(props) {
    if(!props.warn) {
        return null;
    }
    else {
        return (
            <div className="warning">
                <h1>Warning</h1>
            </div>
        )
    }
}
class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: false};
        this.handleToggleClick = this.handleToggleClick.bind(this); 
    }
    handleToggleClick() {
        this.setState(prevState => ({
          showWarning: !prevState.showWarning
        }));
      }
    render() {
        return (
            <div>
                <WarningBanner warn = {this.state.showWarning}/>
                <button onClick={this.handleToggleClick}>
                {this.state.showWarning ? 'Hide' : 'show'}
                </button>
            </div>
        )
    }
}
ReactDOM.render(
    <Page/>,
    document.getElementById('root')
)
*/
/*--------------------------
----List and key---- ----
------------------------- */
/**
 1
 2
 3
 4
 5
<li>number[0]</li>
.
.
.
<li>number[4]</li>
 */
/*
const numbers = [1, 2, 3, 4, 5];
function ListItem(props) {
    const number = props.list;
    return (
        <ul>
            <li>{number[0]}</li>
            <li>{number[1]}</li>
            <li>{number[2]}</li>
            <li>{number[3]}</li>
            <li>{number[4]}</li>
        </ul>
    )

}
ReactDOM.render(
    <ListItem list={numbers}/>,
    document.getElementById('root')
)
*/
/*
const numbers = [1, 2, 3, 4, 5];
function ListItem(props) {
    const number = props.list;
    let listItem = number.map((number) =>
            <ul>
                <li>{number}</li>
            </ul>
        )
        return listItem;
    

}
ReactDOM.render(
    <ListItem list={numbers}/>,
    document.getElementById('root')
)
*/
/*
const human = ['Jonas',' Victor', 'React', 'Redux'] ;
const listItem = human.map((human) => <li>{human}</li>)
ReactDOM.render(
    <ul>{listItem}</ul>,
    document.getElementById('root')
)
*/
/*
function NumberList(props) {
    const number = props.list ;
    const ListItem = number.map((number) => 
    <li key={number.toString()}>
    {number -1}
    </li>);
    return (
        <ul>
            {ListItem}
        </ul>
    )
}
const number = [2, 4, 6, 8]
ReactDOM.render(
    <NumberList list={number}/>,
    document.getElementById('root')
)
*/
// Key : Key = {todo.id}  recomandation* Key = {index} mac dinh
/*
function NumberList(props) {
    const number = props.list ;
    const ListItem = number.map((number, index) => 
    <li key={index}>
    {index}
    </li>);
    return (
        <ul>
            {ListItem}
        </ul>
    )
}
const number = [2, 4, 6, 8]
ReactDOM.render(
    <NumberList list={number}/>,
    document.getElementById('root')
)
*/
// Chia nho component ra thi nen gan key o phan tu cha
/*
function ListItem(props) {
    return(
        <li>{props.value}</li>
    )
}
function NumberList(props) {
    const number = props.list ;
    const ListItems = number.map((number, index) => (<ListItem key={number.toString()} value={number}/>));
    return (
        <ul>
            {ListItems}
        </ul>
    )
}
const number = [2, 4, 6, 8]
ReactDOM.render(
    <NumberList list={number}/>,
    document.getElementById('root')
)
*/
/*
const posts = [
    {id: 1, title: 'Hello World', content: 'Welcom to learnung React!'},
    {id: 2, title: 'Instalation', content: 'You can install React from npm.'}
];
function Blog(props) {
    const sidebar = props.posts.map((post) =>
    <div key={post.id}>
        <h3>{post.title}</h3>
    </div>
    )
    const content = props.posts.map((post) =>
    <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
    </div>
    );
    return(
        <div>
            <div>
                {sidebar}
            </div>
            <div>
                {content}
            </div>
           
        </div>
    );
}
ReactDOM.render(
    <Blog posts={posts} />,
    document.getElementById('root')
)
*/
/*****************************
 * ***************FORM  *****
 ***************************/
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ' '};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({value: event.target.value})
    }
    handleSubmit(event) {
            alert(`A name was submitted:${this.state.value}`);
            event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input  type="text" value={this.state.value} onChange={this.handleChange}></input>
                <button type="submit">submit</button>
            </form>
        );
    }
}

ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
);