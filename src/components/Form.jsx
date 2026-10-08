import { Button } from "./Button";
import { Input } from "./Input";

export function Form() {
    return (
        <form className="form">
            <Input type="text" placeholder="Username"/>
            <Input type="password" placeholder="Password"/>
            <Input type="password" placeholder="Confirm Password"/>
            <Button type="submit" value="Register" />
        </form>
    );
}