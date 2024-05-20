import  {useRef, useState} from 'react';
import './App.css';

function App() {
  const [toDos, setToDos] = useState([]);

  const inputRef = useRef();

  const handelAddItem =()=>{
    // console.log(inputRef.current.value);
    const newActivity = inputRef.current.value;
    // console.log(newActivity);
    const newItem = {completed: false , text: newActivity}
    setToDos([...toDos , newItem]);
    inputRef.current.value = '';
  }

  const handelItemData = (index)=>{
    const newToDos = [...toDos];
    // console.log(newToDos[index]);
    newToDos[index].completed = !newToDos[index].completed;
    setToDos(newToDos);
  }

  const handleDeleteButton = (index)=> {
    const newToDos = [...toDos]
    newToDos.splice(index, 1);
    setToDos(newToDos);
    // setToDos(prevToDos => prevToDos.filter((_, i) => i !== index));
  }

  // console.log(toDos);
  return (
    <div className='mainApp'>
      <div className='App'>
      <h2>To Do List 📝</h2>
      <div className="container">
        <ul>
          {
            toDos.map( ( {completed , text} , index) => {
              return(
                <div className='each_item'  key={index}>
                  <li className={`${completed ? 'completed' : ''}`} onClick={() => handelItemData(index)}>{text}</li>
                  <span onClick={() => handleDeleteButton(index)}>❌</span>
                </div>
              )
            })
          }
        </ul>
        <input type="text"  ref={inputRef}  placeholder='Enter New Activity...'  />
        <div className='add_event'><button className='btn btn-danger ' onClick={handelAddItem}>Add Event</button></div>
      </div>
    </div>
    </div>
  );
}

export default App;
