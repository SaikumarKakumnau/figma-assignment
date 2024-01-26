import {Component} from 'react'
import LogoContainer from './components/LogoContainer';
import DiscoverContainer from './components/DiscoverContainer';
// import {FontAwesomeIcon} from '@fortawesome/free-regular-svg-icons'

import './App.css';

class App extends Component {
  state = {data: []}
  componentWillUnmount() {

  }
  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    const options = {
      method: 'GET'
    }
    let response =  await fetch("http://invitations-dev-env.eba-52zzhdmc.us-west-1.elasticbeanstalk.com/service/properties",options);
    let recivedData = await response.json()
    console.log(recivedData);
    
    this.setState({data: recivedData})
    
  }
  render(){
    const {data} = this.state
    return(
      <div className='main-container'>
        <div className='banner-container'>
          <div className='text-container'>
            <h1>Best Training At Better Price By <span className='span'>{data.time1}</span></h1>
            <p>We provide the right course for you. You can learn at your own pace, from 
              anywhere in the world, and get access to high-quailty content
            </p>
            <button type='buttton' className='button-explore'>Explore courses</button>
          </div>
        </div>
        <LogoContainer />
        <DiscoverContainer sendData={data} />
      </div>
    )
  }
}

export default App;
