import React from "react";
import { withStorageListener } from "./withStorageListener";
import './ChangeAlert.css';

function ChangeAlert({show,toggleShow}) {
  if (show) {
    return(
        <div className='ChangeAlert-bg'>
            <div className='ChangeAlert-container'>
                <p>Parece que cambiaste tus TAREAS en otra pestaña o ventana del navegador.</p>
                <p>¿Quieres sincronizar tus TAREAS?</p>
                <button className='TodoForm-button TodoForm-button--add'
                    onClick={() => toggleShow(false)}
                >Si!</button>
            </div>
        </div>
    );
  }else{

    return null;
  }

}
const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);
export { ChangeAlertWithStorageListener };