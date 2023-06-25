
/*import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import Success from "./success";
import Error from "./error";
import { useQueryClient,useMutation } from "react-query";
import { addHello, getHello } from "../lib/helper";



export default function AddUserForm() {
 
  const queryClient =useQueryClient()
  
  const addMutation = useMutation(addHello,{
    onSuccess:() =>{
    queryClient.prefetchQuery('hello',getHello)
    }
  })
  
 

  const handleSubmit = (e) => {
    e.preventDefault();
    if(Object.keys(!formData).length === 0) return console.log("Don't have Form Data");
    let { VendorName,BankName,BankAccountNo } = formData;
    const model = {
      name : 'VendorName',
       BankName,BankAccountNo
  } 
    addMutation.mutate(model)

}
if(addMutation.isLoading) return <div>Loading!</div>
if(addMutation.isError) return <Error message={addMutation.error.message}></Error>
if(addMutation.isSuccess) return <Success message={"Added Successfully"}></Success>

  return (
    
     
      <form className="grid lg:grid-cols-2 w-2/3 gap-5" onSubmit={handleSubmit}>
        <div className="input-type">
          <input
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, VendorName: e.target.value })
            }
            name="VendorName"
            className="border w-full px-5 py- focus:outline-none rounded-md"
            placeholder="VendorName"
          />
        </div>
        <div className="input-type">
          <input
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, BankName: e.target.value })
            }
            name="BankName"
            className="border w-full px-5 py- focus:outline-none rounded-md"
            placeholder="BankName"
          />
        </div>
        <div className="input-type">
          <input
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, BankAccountNo: e.target.value })
            }
            name="BankAccountNo"
            className="border w-full px-5 py- focus:outline-none rounded-md"
            placeholder="BankAccountNo"
          />
        </div>
        <button className="flex-justify-center text-md w-1/2 h-1/2 bg-green-500 text-white px-7 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
          Add
          <span className="px-5">
            <BiPlus size={25} />
          </span>
        </button>
      </form>
    
  );
          }*/
          import { useState } from "react";
          import { BiPlus } from "react-icons/bi";
          import Success from "./success";
          import Error from "./error";
          import { useQueryClient, useMutation } from "react-query";
          import { addHello, getHello } from "../lib/helper";
          
          export default function AddUserForm() {
            const queryClient = useQueryClient();
            const [formData, setFormData] = useState({}); // Missing initial value for formData
          
            const addMutation = useMutation(addHello, {
              onSuccess: () => {
                queryClient.prefetchQuery('hello', getHello);
              }
            });
          
            const handleSubmit = (e) => {
              e.preventDefault();
              if (Object.keys(formData).length === 0) return console.log("Don't have Form Data");
              let { FirstName,LastName, BankName, BankAccountNo,Address,City,Country,ZipCode } = formData;
              const model = { name :`${FirstName} ${LastName}`,
              BankName,
                BankAccountNo
                ,Address,City,Country,ZipCode
              };
              addMutation.mutate(model);
            };
          
            if (addMutation.isLoading) return <div>Loading!</div>;
            if (addMutation.isError) return <Error message={addMutation.error.message} />;
            if (addMutation.isSuccess) return <Success message={"Added Successfully"} />;
          
            return (
              <form className="grid lg:grid-cols-2 w-2/3 gap-5" onSubmit={handleSubmit}>
                <div className="input-type">
                  <input
                    type="text"
                    onChange={(e) =>
                      setFormData({ ...formData, FirstName: e.target.value })
                    }
                    name="FirstName"
                    className="border w-full px-5 py- focus:outline-none rounded-md"
                    placeholder="FirstName"
                  />
                </div>
                <div className="input-type">
                  <input
                    type="text"
                    onChange={(e) =>
                      setFormData({ ...formData, LastName: e.target.value })
                    }
                    name="LastName"
                    className="border w-full px-5 py- focus:outline-none rounded-md"
                    placeholder="LastName"
                  />
                </div>
                <div className="input-type">
                  <input
                    type="text"
                    onChange={(e) =>
                      setFormData({ ...formData, BankName: e.target.value })
                    }
                    name="BankName"
                    className="border w-full px-5 py- focus:outline-none rounded-md"
                    placeholder="BankName"
                  />
                </div>
                <div className="input-type">
                  <input
                    type="text"
                    onChange={(e) =>
                      setFormData({ ...formData, BankAccountNo: e.target.value })
                    }
                    name="BankAccountNo"
                    className="border w-full px-5 py- focus:outline-none rounded-md"
                    placeholder="BankAccountNo"
                  />
                </div>
                <div className="input-type">
                  <input
                    type="text"
                    onChange={(e) =>
                      setFormData({ ...formData, Address: e.target.value })
                    }
                    name="Address"
                    className="border w-full px-5 py- focus:outline-none rounded-md"
                    placeholder="Address"
                  />
                </div>
                <div className="input-type">
                  <input
                    type="text"
                    onChange={(e) =>
                      setFormData({ ...formData, City: e.target.value })
                    }
                    name="City"
                    className="border w-full px-5 py- focus:outline-none rounded-md"
                    placeholder="City"
                  />
                </div>
                <div className="input-type">
                  <input
                    type="text"
                    onChange={(e) =>
                      setFormData({ ...formData,Country: e.target.value })
                    }
                    name="Country"
                    className="border w-full px-5 py- focus:outline-none rounded-md"
                    placeholder="Country"
                  />
                </div>
                <div className="input-type">
                  <input
                    type="String"
                    onChange={(e) =>
                      setFormData({ ...formData,ZipCode: e.target.value })
                    }
                    name="ZipCode"
                    className="border w-full px-5 py- focus:outline-none rounded-md"
                    placeholder="ZipCode"
                  />
                </div>
                <button className="flex-justify-center text-md w-2/7 h-1/2 bg-green-500 text-white px-7 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
                  Add
                  <span className="px-2">
                    <BiPlus size={20} />
                  </span>
                </button>
              </form>
            );
          }
          
