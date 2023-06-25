/*import Head from 'next/head'
import { BiUserPlus,BiX,BiCheck} from "react-icons/bi";
import Table from '../components/table';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { getSession, useSession, signOut } from "next-auth/react"
import Form from '../components/form';
import { useSelector, useDispatch  } from 'react-redux';
import { toggleChangeAction,deleteAction} from '../redux/reducer';
import { getHello,deleteHello} from '../lib/helper';
import { useQueryClient } from 'react-query';

export default function Home() /

  
  const { data: session } = useSession();

  function handleSignOut(){
    signOut();
  }
 return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>

      {session ? User({ session, handleSignOut }) : Guest()}
    </div>
  )
}
// Guest
function Guest() 

{  
  const visible = useSelector((state) => state.app.client.toggleForm)
  const deleteBankAccountNo = useSelector(state => state.app.client.deleteBankAccountNo)
  const queryclient = useQueryClient();
  const dispatch = useDispatch()
  const handler = () => {
    dispatch(toggleChangeAction())
  }
  const deletehandler =  async () => {
    if(deleteBankAccountNo){
      await deleteHello();
      await queryclient.prefetchQuery('hello', getHello)
      dispatch(deleteAction(null))
    }
  }

  const canclehandler = async () => {
    console.log("cancel")
    await dispatch(deleteAction(null))
  }

     
  return (
  <section>
    <main className="container mx-auto text-center py-20">
          <h3 className='text-4xl font-bold'>Vendor Homepage</h3>
          <div className="container mx-auto flex justify-between py-5 border-b">
            <div className="left flex gap-3">
            <button onClick={handler} className='flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-grary-50 hover:border-indigo-500 hover:text-gray-800'>
  Add Vendor <span className='px-1'><BiUserPlus size={23}></BiUserPlus></span>
</button>

            </div>
            {deleteBankAccountNo ? <DeleteComponent deletehandler={deletehandler} canclehandler={canclehandler} /> : null}

            </div>
            {visible ? <Form></Form> : <></>}

            <div className="container mx-auto">
            <Table></Table>
            </div>
            </main>

            </section>
      
  )}
  function DeleteComponent({ deletehandler, canclehandler }) {
    return (
      <div className='flex gap-5'>
        <button>Are you sure?</button>
        <button onClick={() => deletehandler()} className='flex bg-red-500 text-white px-4 py-2 border rounded-md hover:bg-rose-500 hover:border-red-500 hover:text-gray-50'>Yes<span className='px-1'><BiX color='rgb(255 255 255)' size={25} /></span></button>
        <button onClick={() => canclehandler()} className='flex bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-rose-500 hover:border-green-500 hover:text-gray-50'>No<span className='px-1'><BiCheck color='rgb(255 255 255)' size={25} /></span></button>
      </div>
    )
  }
  

// Authorize User
function User({ session, handleSignOut }){
  return(
    <main className="container mx-auto text-center py-20">
          <h3 className='text-4xl font-bold'>Authorize User Homepage</h3>

          <div className='details'>
            <h5>{session.user.name}</h5>
            <h5>{session.user.email}</h5>
          </div>

          <div className="flex justify-center">
            <button onClick={handleSignOut} className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 bg-gray-50'>Profile Page</button>
          </div>

          <div className='flex justify-center'>
            <Link href={'/profile'}><a className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'>Sign out</a></Link>
          </div>
      </main>
  )
}
*/
import Head from 'next/head'
import { BiUserPlus,BiX,BiCheck} from "react-icons/bi";
import Table from '../components/table';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { getSession, useSession, signOut } from "next-auth/react"
import Form from '../components/form';
import { useSelector, useDispatch  } from 'react-redux';
import { toggleChangeAction,deleteAction} from '../redux/reducer';
import { getHello,deleteHello} from '../lib/helper';
import { useQueryClient } from 'react-query';

export default function Home() /*{

  
  const { data: session } = useSession();

  function handleSignOut(){
    signOut();
  }
 return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>

      {session ? User({ session, handleSignOut }) : Guest()}
    </div>
  )
}
// Guest
function Guest() */

{  
  const visible = useSelector((state) => state.app.client.toggleForm)
  const deleteBankAccountNo = useSelector(state => state.app.client.deleteBankAccountNo)
  const queryclient = useQueryClient();
  const dispatch = useDispatch()
  const handler = () => {
    dispatch(toggleChangeAction())
  }
  const deletehandler =  async () => {
    if(deleteBankAccountNo){
      await deleteHello(deleteBankAccountNo);
      await queryclient.prefetchQuery('hello', getHello)
      dispatch(deleteAction(null))
    }
  }

  const canclehandler = async () => {
    console.log("cancel")
    await dispatch(deleteAction(null))
  }

     
  return (
  <section>
    <main className="container mx-auto text-center py-20">
          <h3 className='text-4xl font-bold'>Vendor Homepage</h3>
          <div className="container mx-auto flex justify-between py-5 border-b">
            <div className="left flex gap-3">
            <button onClick={handler} className='flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-grary-50 hover:border-indigo-500 hover:text-gray-800'>
  Add Vendor <span className='px-1'><BiUserPlus size={23}></BiUserPlus></span>
</button>

            </div>
            {deleteBankAccountNo ? <DeleteComponent deletehandler={deletehandler} canclehandler={canclehandler} /> : null}

            </div>
            {visible ? <Form></Form> : <></>}

            <div className="container mx-auto">
            <Table></Table>
            </div>
            </main>

            </section>
      
  )}
  function DeleteComponent({ deletehandler, canclehandler }) {
    return (
      <div className='flex gap-5'>
        <button>Are you sure?</button>
        <button onClick={() => deletehandler()} className='flex bg-red-500 text-white px-4 py-2 border rounded-md hover:bg-rose-500 hover:border-red-500 hover:text-gray-50'>Yes<span className='px-1'><BiX color='rgb(255 255 255)' size={25} /></span></button>
        <button onClick={() => canclehandler()} className='flex bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-rose-500 hover:border-green-500 hover:text-gray-50'>No<span className='px-1'><BiCheck color='rgb(255 255 255)' size={25} /></span></button>
      </div>
    )
  }
