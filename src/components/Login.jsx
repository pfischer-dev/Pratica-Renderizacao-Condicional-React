import { Button } from "./Button";
import { Input } from "./Input";

export function Login() {
    return (
        <form className="form">
            <Input type="text" placeholder="Username"/>
            <Input type="password" placeholder="Password"/>
            <Button type="submit" value="Login"/>
        </form>
    )
}