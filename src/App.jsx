import './App.css'
import HookForm from './Components/HookForm/HookForm'
import RefForm from './Components/RefForm/RefForm'
import ReusableForm from './Components/ReusableForm/ReusableForm'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import StateFullForm from './Components/StateFullForm/StateFullForm'

function App() {

  const handleLogin = (data) => {
    console.log("Login",data)
  }

  const handleUpdate = (data) => {
    console.log("Update",data)
  }
  

  return (
    <>
      <h1>Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm handleSubmit={handleLogin} formTitle={"Login"} formBtn={"Login"}>
        <div>
          <h2>Login</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, laboriosam.</p>
        </div>
      </ReusableForm>
      <ReusableForm handleSubmit={handleUpdate} formTitle={"Update"} formBtn={"Update"}>
        <div>
          <h2>Update</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, aliquid.</p>
        </div>
      </ReusableForm>
    </>
  )
}

export default App
