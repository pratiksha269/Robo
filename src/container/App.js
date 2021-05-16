import React, {Component} from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import Scroll from '../component/Scroll';
import ErrorBoundary from '../component/ErrorBoundary'
import './App.css'


class App extends Component {
	constructor() {
		super()
		this.state = {
			robot: [],
			searchfield:''
		}
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response=> response.json())
			.then(users=>this.setState({robot:users}));
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value })
	}

	render() {
			const filterRobot = this.state.robot.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		if(this.state.robot.length===0){
			return <h1 className='tc'>Loding</h1>
		}else{
			return (
				<div className='tc'>
					<h1> Robofriends </h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<ErrorBoundary>
							<CardList robot={filterRobot} />
						</ErrorBoundary>
					</Scroll>
				</div>
					);
			}
		}	
}

export default App;