import React, { useState ,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const vehiculosBack=[
  {
    nombre:"Corolla",
    marca:"Toyota",
    modelo:2014
  },
  {
    nombre:"Corolla",
    marca:"Toyota",
    modelo:2014
  },
  {
    nombre:"Corolla",
    marca:"Toyota",
    modelo:2014
  },
  {
    nombre:"Corolla",
    marca:"Toyota",
    modelo:2014
  },
  {
    nombre:"Corolla",
    marca:"Toyota",
    modelo:2014
  },
  {
    nombre:"Mustang",
    marca:"Chevrolet",
    modelo:2020
  }
]

const Vehiculos = () => {
  const [mostrarTabla,setMostrarTabla]=useState(true)
  const[vehiculos,setVehiculos]=useState([])
  const [textoBoton,setTextoBoton]=useState("Crear nuevo vehiculo")

  useEffect(()=>{
   //aca viene los datos de los vehiculos
   setVehiculos(vehiculosBack)
  },[])

  useEffect(()=>{
    if(mostrarTabla){
      setTextoBoton("Crear un nuevo vehiculo")
    }else{
      setTextoBoton("Mostrar todos los vehiculos")
    }
  },[mostrarTabla])
  return (
    <div className='divan'>
      <div className='divini'>
    <h2 className="titu">Pagina de administracion  de vehiculos</h2>
      <button
     onClick={()=>{
     setMostrarTabla(!mostrarTabla)
     }}
      className="botin m-6 w-28 self-end">
     {textoBoton} 
    </button>
    </div>
    {mostrarTabla ? <Tablavehiculos listaVehiculos={vehiculos} /> : <CreacionVehiculos funcionParaCrearLaTabla={setMostrarTabla} funcionParaAgregarVeh={setVehiculos}
    listaVehiculos={vehiculos}/>}
    <ToastContainer position="bottom-center" autoClose={5000}/>
    </div>
  )
}
const  Tablavehiculos=({listaVehiculos})=>{
  return(
    <div className='divin'>
      <h2 className='titul'>Todos los vehiculos </h2>
   <table>
     <thead>
      <tr>
        <th>Nombre del Vehiculo</th>
        <th>Marca del vehiculo</th>
        <th>Modelo del vehiculo</th>
      </tr>
     </thead>
     <tbody>
       {listaVehiculos.map((vehiculos)=>
       {
         return(
      <tr>
        <td>{vehiculos.nombre}</td>
        <td>{vehiculos.marca}</td>
        <td>{vehiculos.modelo}</td>
      </tr> )
       })}
     </tbody>

   </table>
   </div>
  )
}

const CreacionVehiculos=({funcionParaCrearLaTabla,listaVehiculos, funcionParaAgregarVeh})=>{
  const[nombre,setNombre]=useState("")
  const[marca,setMarca]=useState("")
  const[modelo,setModelo]=useState("")
  const enviarAlBackend=()=>{
    console.log(`el nombre es ${nombre} con la marca ${marca} del modelo ${modelo}`)
    if(nombre==="" || marca==="" || modelo===""){
      toast.error("Digite todos los datos")
    }else{
      toast.success("Creacion de vehiculos exitosa")
      funcionParaCrearLaTabla(true)
      funcionParaAgregarVeh([...listaVehiculos,{nombre:nombre,marca:marca,modelo:modelo}])
      }
  }
  return(
    <div className='divin'>
      <h2 className="titul">Crear Nuevo vehiculo</h2>
     <form className="ti">
       <label className="lab" htmlfor="name">
       Nombre Vehiculo  
       <input  className="botan" 
       type="text"  
       placeholder="corolla"
       value={nombre}
       onChange={(e)=>{setNombre(e.target.value)}}
       required/>
       </label>
       <label className="lab" htmlFor='marca'>
       Marca
       <select value={marca}
       onChange={(e)=>{setMarca(e.target.value)}} 
       className="lab" 
       className="botan"
       required>
         <option>Seleccione una marca</option>
         <option >Toyota</option>
         <option >Mazda</option>
         <option >Renault</option>
         <option>Chevrolet</option>
       </select>
       </label>
       <label className='lab' htmlFor='modelo'>
         Modelo
       <input className="botan"
        name="modelo" 
        type="number" 
         min={1991} 
         max={2022}
         value={modelo}
         onChange={(e)=>setModelo(e.target.value)}
         required/>
       </label>
       
       <button type="submit" className=" botonin text-white"
       onClick={()=>{enviarAlBackend()}}>
      Guardar texto</button>

     </form>
    </div>
  )
}

export default Vehiculos
