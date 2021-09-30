import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 更新组件 - 重新渲染
// const element = <h1>Hello, world</h1>
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   )
//   ReactDOM.render(element, document.getElementById('root'))
// }

// setInterval(tick, 1000)

// 函数组件
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>
// }

// function App2() {
//   return(
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </div>
//   )
// }
// ReactDOM.render(<App2 />, document.getElementById('root'))


// class 组件
// function FormattedDate(props) {
//   return <h2>It is {props.date.toLocaleTimeString()}.</h2>
// }

// class Clock extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {date: new Date()}
//   }

//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     )
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID)
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     })
//   }



//   render() {
//     return (
//       <div>
//         <h1>Hello, world.</h1>
//         <FormattedDate date={this.state.date} />
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Clock />, document.getElementById('root'))


// 事件处理 - 函数组件
// function ActionLink() {
//   function handleClick(e) {
//     e.preventDefault()
//     console.log('The link was clicked.')
//   }

//   return(
//     <a href="#" onClick={handleClick}>
//       Click me
//     </a>
//   )
// }

// ReactDOM.render(<ActionLink />, document.getElementById('root'))


// 事件处理 - class 组件
// class Toggle extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {isToggleOn: true}
  
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick() {
//     this.setState(state => ({
//       isToggleOn: !state.isToggleOn
//     }))
//   }

//   render() {
//     return(
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : "OFF"}
//       </button>
//     )
//   }
// }

// ReactDOM.render(
//   <Toggle />,
//   document.getElementById('root')
// )


// 条件渲染 - 函数组件
function UserGreeting(props) {
  return <h1>Welcome back!</h1>
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn
  if (isLoggedIn) {
    return <UserGreeting />
  } 
  return <GuestGreeting />
}

// ReactDOM.render(<Greeting isLoggedIn={true} />, document.getElementById('root'))


// 元素变量
function LoginButton(props) {
  return(
    <button onClick={props.onClick}>
      Login
    </button>
  )
}

function LogoutButton(props) {
  return(
    <button onClick={props.onClick}>
      Logout
    </button>
  )
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.state = {isLoggedIn: false}
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true})
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false})
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn
    // let button
    // if (isLoggedIn) {
    //   button = <LogoutButton onClick={this.handleLogoutClick} />
    // } else {
    //   button = <LoginButton onClick={this.handleLoginClick} />
    // }

    // return(
    //   <div>
    //     <Greeting isLoggedIn={isLoggedIn} />
    //     {button}
    //   </div>
    // )

    // 条件渲染 - 三目表达式
    return(
      <div>
        {isLoggedIn
         ? <LogoutButton onClick={this.handleLogoutClick} />
         : <LoginButton onClick={this.handleLoginClick} />
        }
      </div>
    )
  }
}

// ReactDOM.render(<LoginControl />, document.getElementById('root'))


// && 运算符
function Mailbox(props) {
  const unreadMessages = props.unreadMessages
  // const count = count
  return (
    <div>
      {/* { count && <h1>Messages: {count}</h1>} */}
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && 
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  )
}

// const messages = ['React', 'Re: React', 'Re: Re: React']
// ReactDOM.render(
//   <Mailbox unreadMessages={messages} />,
//   document.getElementById('root')
// )


// 阻止组件渲染
function WarningBanner(props) {
  if (!props.warn) {
    return null
  }

  return (
    <div className="warning">
      Warning!
    </div>
  )
}

class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = {showWarning: true}
    this.handleToggleClick = this.handleToggleClick.bind(this)
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }))
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    )
  }
}

// ReactDOM.render(
//   <Page />,
//   document.getElementById('root')
// )


// 列表 & key
function ListItem(props) {
  return <li>{props.value}</li>
}

function NumberList(props) {
  const numbers = props.numbers
  const listItems = numbers.map((number) => 
    <ListItem key={number.toString()} value={number} />
  )
  return(
    // <ul>{listItems}</ul>
    <ul>
      {numbers.map((number) => 
        <ListItem key={number.toString()} value={number} />
      )}
    </ul>
  )
}

// const numbers = [1, 2, 3, 4, 5]
// ReactDOM.render(
//   <NumberList numbers={numbers}/>,
//   document.getElementById('root')
// )


// 表单
class NameForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      textarea: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleChange2 = this.handleChange2.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleChange2(event) {
    this.setState({textarea: event.target.value})
  }

  handleSubmit(event) {
    alert('提交的名字: ' + this.state.value + '\n提交的文章: ' + this.state.textarea)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          名字:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          文章:
          <textarea value={this.state.textarea} onChange={this.handleChange2} />
        </label>
        <input type="submit" value="提交" />
      </form>
    )
  }
}

// ReactDOM.render(
//   <NameForm />,
//   document.getElementById('root')
// )

// 表单 - select
class FlavorForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: 'coconut'}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    alert('你喜欢的风味是: ' + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          选择你喜欢的风味:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">葡萄柚</option>
            <option value="lime">酸橙</option>
            <option value="coconut">椰子</option>
            <option value="mango">芒果</option>
          </select>
        </label>
        <input type="submit" value="提交" />
      </form>
    )
  }
}

// ReactDOM.render(
//   <FlavorForm />,
//   document.getElementById('root')
// )


// 状态提升
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>
  }
  return <p>The water would not boil.</p>
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value)
  }

  render() {
    const temperature = this.props.temperature
    const scale = this.props.scale
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input
          value={temperature}
          onChange={this.handleChange} />
      </fieldset>
    )
  }
}
  
function toCelsius(Fahrenheit) {
  return (Fahrenheit - 32) * 5 / 9
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature)
  if (Number.isNaN(input)) {
    return ''
  }
  const output = convert(input)
  const rounded = Math.round(output * 1000) / 1000
  return rounded.toString()
}

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
    this.state = {temperature: '', scale: 'c'}
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature})
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature})
  }
  
  render() {
    const scale = this.state.scale
    const temperature = this.state.temperature
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

    return (
      <div>
        <TemperatureInput 
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f" 
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    )
  }
}

// ReactDOM.render(
//   <Calculator />,
//   document.getElementById('root')
// )


// 组合
function FancyBorder(props) {
  return(
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  )
}

function Dialog(props) {
  return(
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.messages}
      </p>
      {props.children}
    </FancyBorder>
  )
}

class SignupDialog extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
    this.state = {login: ''}
  }

  handleChange(e) {
    this.setState({login: e.target.value})
  }

  handleSignUp() {
    alert(`Welcome abord, ${this.state.login}!`)
  }

  render() {
    return(
      <Dialog title="Mars Exploration Program"
              messages="How should we refer to you?">
        <input value={this.state.login}
                onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>

      </Dialog>
    )
  }
}

// ReactDOM.render(<SignupDialog />, document.getElementById('root'))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
