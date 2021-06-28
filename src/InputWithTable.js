import React, { useState, startTransition } from "react";
import { Input } from '@material-ui/core';

import BasicTable from "./Table";

let lastTime = null;

const CustomInput = props => {
    const [val, setVal] = useState("")
    const onChange = e => {
        const inputVal = e.currentTarget.value;
        setVal(inputVal);

        if (!lastTime) {
            console.log(lastTime)
        } else {
            console.log(new Date() - lastTime)
        }
        lastTime = new Date()
        props.onChange(inputVal)
    }


    return <Input value={val} onChange={onChange} />

}


const InputWithTable = props => {
    const [val, setVal] = useState("");

    const onChange = inputVal => {
        //startTransition(() => {
        setVal(inputVal);
        //})
    }



    return <>
        <CustomInput onChange={onChange} />
        <BasicTable filterVal={val} />
    </>
}

export default InputWithTable;