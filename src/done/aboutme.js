import React from "react";
import {useForm} from "react-hook-form";



function Info(props){
    const {
        register,
        handleSubmit,
        reset,
        formState:{errors}
    } = useForm();
    const onSubmit = (data)=>{
        alert(JSON.stringify(data));

        reset();
    };
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name:
            <input id='name' type='text' placeholder={props.name} {...register('name',{required:true, maxLength:25, minLength:4})}/>
                {errors.name&&errors.name.type==='required'&&<span>This is required</span>}
                {errors.name&&errors.name.type==='maxLength'&&<span>Max 25</span>}
                {errors.name&&errors.name.type==='minLength'&&<span>Min 4</span>}
            </label>
            <label>Age:
            <input id='age' type='number' placeholder={props.age} {...register('age',{required:true, maxLength:3})}/>
                {errors.age&&errors.age.type==='maxLength'&&<span>Max 3</span>}
            </label>
            <label>Telefon:
            <input id='tel' type='number' placeholder={props.tel} {...register('tel',{required:true, minLength:10})}/>
                {errors.tel&&errors.tel.type==='minLength'&&<span>Min 10</span>}
            </label>
            <label>E-mail:
            <input id='email' type='email' placeholder={props.email} {...register('email', {pattern:/@/})}/>
                {errors.email&&<span>No correct</span>}
            </label>
            <label>Nationality:
            <input id='nationality' type='text' placeholder={props.nationality}/>
            </label>
            <input type='submit' value='Reset'/>
        </form>
    )
}

export default Info;