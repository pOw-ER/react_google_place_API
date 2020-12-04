import React,{useState,useEffect} from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Select } from 'antd';
import axios from "axios";


const { Option } = Select;

const SearchApi = ()=>{
  const [value,setValue] = useState(null)

  const first = ()=>{
    axios.get('https://maps.googleapis.com/maps/api/place/js/AutocompletionService.GetPredictionsJson?1sdortmund&4str-TR&15e3&21m1&2e1&callback=_xdc_._slmmco&key=AIzaSyCGMiLWMzxT9B9Jvnm8BKyovMAb-Pczr84&token=92971').then(res => {
      console.log(res);
      setValue(res)
    }).catch(err => console.log(err))
  }

  useEffect(()=>{
    first()
  },[])
  return (
    <div>{JSON.stringify(value)}</div>
  )
}

// class SearchInput extends React.Component {
//   state = {
//     data: [],
//     value: undefined,
//   };

//   handleSearch = value => {
//     if (value) {
//       fetch(value, data => this.setState({ data }));
//     } else {
//       this.setState({ data: [] });
//     }
//   };

//   handleChange = value => {
//     this.setState({ value });
//   };

//   render() {
//     const options = this.state.data.map(d => <Option key={d.value}>{d.text}</Option>);
//     return (
//       <Select
//         showSearch
//         value={this.state.value}
//         placeholder={this.props.placeholder}
//         style={this.props.style}
//         defaultActiveFirstOption={false}
//         showArrow={false}
//         filterOption={false}
//         onSearch={this.handleSearch}
//         onChange={this.handleChange}
//         notFoundContent={null}
//       >
//         {options}
//       </Select>
//     );
//   }
// }
// ReactDOM.render(<SearchInput placeholder="input search text" style={{ width: 200 }} />, document.getElementById('container'));

export default SearchApi;

