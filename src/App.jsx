import { Form } from "./components/Form"
import { Login } from "./components/Login";

var userIsRegistered = true;

export function App() {
  return (
    <div className="container">
      {userIsRegistered === true ? <Login /> : <Form /> }
    </div>
  )
}