/*
import { useState } from "react";
import { BiBrush } from 'react-icons/bi';
import Success from "./success";
import Error from "./error";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getHello, updateHello } from "../lib/helper";

export default function UpdateUserForm({ formId,formData, setFormData}) {
  const queryClient = useQueryClient();
  const { isLoading, isError, data, error } = useQuery(['Hello', formId], () => getHello(formId))

 
  const UpdateMutation = useMutation((newData) => updateHello(formId, newData), {
    onSuccess: async (data) => {
      queryClient.prefetchQuery('hello', getHello)
    }
  })

  if (isLoading) return <div>Loading...!</div>
  if (isError) return <div>Error</div>

  const { name} = data;
  

  const FirstName = name ? name.split(' ')[0] : formData.FirstName;
const LastName = name ? name.split(' ')[1] : formData.LastName;


  const handleSubmit = async (e) => {
    e.preventDefault();
    let userName = `${formData.FirstName ?? FirstName} ${formData.LastName ?? LastName}`;
    let updated = Object.assign({}, data, formData, { name: userName})
   await UpdateMutation.mutate(updated)
  
  }

  return (
    <form className="grid lg:grid-cols-2 w-2/3 gap-5" onSubmit={handleSubmit}>
      <div className="input-type">
        <input
          type="text"
          onChange={(e) => setFormData({ ...formData, FirstName: e.target.value })}
          value={formData.FirstName}
          name="FirstName"
          className="border w-full px-5 py- focus:outline-none rounded-md"
          placeholder="FirstName"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          onChange={(e) => setFormData({ ...formData, LastName: e.target.value })}
          value={formData.LastName}
          name="LastName"
          className="border w-full px-5 py- focus:outline-none rounded-md"
          placeholder="LastName"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          onChange={(e) => setFormData({ ...formData, BankName: e.target.value })}
          value={formData.BankName}
          name="BankName"
          className="border w-full px-5 py- focus:outline-none rounded-md"
          placeholder="BankName"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          onChange={(e) => setFormData({ ...formData, BankAccountNo: e.target.value })}
          value={formData.BankAccountNo}
          name="BankAccountNo"
          className="border w-full px-5 py- focus:outline-none rounded-md"
          placeholder="BankAccountNo"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          onChange={(e) => setFormData({ ...formData, Address: e.target.value })}
          value={formData.Address}
          name="Address"
          className="border w-full px-5 py- focus:outline-none rounded-md"
          placeholder="Address"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          onChange={(e) => setFormData({ ...formData, City: e.target.value })}
          value={formData.City}
          name="City"
          className="border w-full px-5 py- focus:outline-none rounded-md"
          placeholder="City"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          onChange={(e) => setFormData({ ...formData, Country: e.target.value })}
          value={formData.Country}
          name="Country"
          className="border w-full px-5 py- focus:outline-none rounded-md"
          placeholder="Country"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          onChange={(e) => setFormData({ ...formData, ZipCode: e.target.value })}
          value={formData.ZipCode}
          name="ZipCode"
          className="border w-full px-5 py- focus:outline-none rounded-md"
          placeholder="ZipCode"
        />
      </div>
      <div>
        <button className="flex-justify-center text-md w-1/2 h-1/2 bg-yellow-500 text-white px-7 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
          Update<span className="px-5"><BiBrush size={25} /></span>
        </button>
      </div>
    </form>

  )
}*/


/*import { useReducer } from "react"
import { BiBrush } from 'react-icons/bi'
import Success from "./success"
import Error from "./error"
import { useQuery, useMutation, useQueryClient } from "react-query"
import { getHello, getHellos,updateHello } from "../lib/helper"



export default function UpdateUserForm({ formId, formData, setFormData }) {
  const queryClient = useQueryClient()
  const { isLoading, isError, data, error } = useQuery(['Hello', formId], () => getHello(formId))

  const UpdateMutation = useMutation((newData) => updateHello(formId, newData), {
    onSuccess: async (data) => {
      queryClient.prefetchQuery('hello', getHellos)
    }
  });

  if (isLoading) return <div>Loading...!</div>
  if (isError) return <div>Error</div>

  const { name,BankName,BankAccountNo,Address,City,Country,ZipCode } = data;
  const [FirstName, LastName] = name ? name.split(' ') : formData

  const handleSubmit = async (e) => {
    e.preventDefault();
    let userName = `${formData.FirstName ?? FirstName} ${formData.LastName ?? LastName}`;
    let updated = Object.assign({}, data, formData, { name: userName })
    await UpdateMutation.mutate(updated)  
    
  }

  return (
    <form className="grid lg:grid-cols-2 w-2/3 gap-5" onSubmit={handleSubmit}>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData} defaultValue={FirstName}
          value={formData.FirstName}
          name="FirstName"
          className="border w-full px-5 py- focus:outline-none rounded-md"
          placeholder="FirstName"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData} defaultValue={LastName}
          value={formData.LastName}
          name="LastName"
          className="border w-full px-5 py- focus:outline-none rounded-md"
          placeholder="LastName"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData} defaultValue={BankName}
          value={formData.BankName}
          name="BankName"
          className="border w-full px-5 py- focus:outline-none rounded-md"
          placeholder="BankName"
        />
      </div>
      <div className="input-type">
        <input
          type="text" onChange={setFormData} defaultValue={BankAccountNo}
          value={formData.BankAccountNo}
          name="BankAccountNo"
          className="border w-full px-5 py- focus:outline-none rounded-md"
          placeholder="BankAccountNo"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData} defaultValue={Address}
          value={formData.Address}
          name="Address"
          className="border w-full px-5 py- focus:outline-none rounded-md"
          placeholder="Address"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData} defaultValue={City}
          value={formData.City}
          name="City"
          className="border w-full px-5 py- focus:outline-none rounded-md"
          placeholder="City"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData} defaultValue={Country}
          value={formData.Country}
          name="Country"
          className="border w-full px-5 py- focus:outline-none rounded-md"
          placeholder="Country"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData} defaultValue={ZipCode}
          value={formData.ZipCode}
          name="ZipCode"
          className="border w-full px-5 py- focus:outline-none rounded-md"
          placeholder="ZipCode"
        />
      </div>
      <div>
        <button className="flex-justify-center text-md w-1/2 h-1/2 bg-yellow-500 text-white px-7 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
          Update<span className="px-5"><BiBrush size={25} /></span>
        </button>
      </div>
    </form>
  )
}*/
import { useReducer } from "react"
import { BiBrush } from 'react-icons/bi'
import Success from "./success"
import Error from "./error"
import { useQuery, useMutation, useQueryClient } from "react-query"
import { getHello, getHellos, updateUser } from "../lib/helper"

export default function UpdateUserForm({ formId, formData, setFormData }){

    const queryClient = useQueryClient()
   const {isLoading, isError, data, error} = useQuery(['Hello', formId], () => getHello(formId))
    const UpdateMutation = useMutation((newData) => updateUser(formId, newData), {
        onSuccess : async (data) => {
            // queryClient.setQueryData('users', (old) => [data])
            queryClient.prefetchQuery('Hello', getHellos)
        }
    })

   if(isLoading) return <div>Loading...!</div>
   if(isError) return <div>Error</div>

   const { name,BankName,BankAccountNo,Address,City,Country,ZipCode} = data;
   const [firstname, lastname] = name ? name.split(' ') : formData

    const handleSubmit = async (e) => {
        e.preventDefault();
        let helloName = `${formData.firstname ?? firstname} ${formData.lastname ?? lastname}`;
        let updated = Object.assign({}, data, formData, { name: helloName})
        await UpdateMutation.mutate(updated)
    }

    return (
        <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
            <div className="input-type">
                <input type="text" onChange={setFormData} defaultValue={FirstName} name="firstname" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="FirstName" />
            </div>
            <div className="input-type">
                <input type="text" onChange={setFormData} defaultValue={LastName} name="lastname" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="LastName" />
            </div>
            <div className="input-type">
                <input type="text" onChange={setFormData} defaultValue={BankName} name="email" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="BankName" />
            </div>
            <div className="input-type">
                <input type="text" onChange={setFormData} defaultValue={BankAccountNo} name="salary" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="BankAccountNo" />
            </div>
            <div className="input-type">
                <input type="date" onChange={setFormData} defaultValue={Address} name="date" className="border px-5 py-3 focus:outline-none rounded-md" placeholder="Address" />
            </div>
            <div className="input-type">
                <input type="date" onChange={setFormData} defaultValue={City} name="date" className="border px-5 py-3 focus:outline-none rounded-md" placeholder="City" />
            </div>
            <div className="input-type">
                <input type="date" onChange={setFormData} defaultValue={Country} name="date" className="border px-5 py-3 focus:outline-none rounded-md" placeholder="Country" />
            </div>
            <div className="input-type">
                <input type="date" onChange={setFormData} defaultValue={ZipCode} name="date" className="border px-5 py-3 focus:outline-none rounded-md" placeholder="ZipCode" />
            </div>


              

            <button className="flex justify-center text-md w-2/6 bg-yellow-400 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
             Update <span className="px-1"><BiBrush size={24}></BiBrush></span>
            </button>

        </form>
    )
}

