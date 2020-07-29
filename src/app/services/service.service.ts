import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import{ Usuario} from '../modales/usuario';
import { Router } from '@angular/router';
import * as jwt_decode from "jwt-decode";
import { AngularFireStorage } from '@angular/fire/storage';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  usuarios: AngularFirestoreCollection<Usuario>;

  constructor(private bd: AngularFirestore, private auth: AngularFireAuth,private storage: AngularFireStorage, private router: Router) 
  { 
    this.usuarios = this.bd.collection('usuarios');
  }
  async iniciarSesion(usu: Usuario) {
    try {
       const result = await this.auth.signInWithEmailAndPassword(usu.correo, usu.password);

       result.user.getIdToken().then(data => {
        localStorage.setItem('token' , data);
    
        this.reedirigirPerfil(usu);
     });
    } catch (e) {
       throw new Error (e.message);
    }
 }
 async registrarUsuario(usu: Usuario) {
  try {
    const resultado = await this.auth.createUserWithEmailAndPassword(usu.correo, usu.password);

    this.usuarios.add(usu);
  } catch ( e ) {

    throw new Error (e.message);

  }
}


public eliminar(collection: string, id: string) {
  return this.bd.collection(collection).doc(id).delete();
}
guardarCliente(obj: Usuario) {

    this.crear("usuarios/" , obj);
 
}

public traerFoto(path: string) {
  return this.storage.ref(path).getDownloadURL();
}
getUsuarios() {
  return this.usuarios.valueChanges();
 }
reedirigirPerfil(usu: Usuario) {
  this.getUsuarios().subscribe(data => {

    data.forEach(element => {
     if (element.correo === usu.correo) {
        localStorage.setItem('usuario_logueado', JSON.stringify(element));
        localStorage.setItem('tipo' ,element.tipo);
    
          console.log('llega');

      }
    });
  });
 }
 public subirArchivo(file: any, path: string) {
  return this.storage.upload(path, file);
}
 public obtenerBD( collection : string){
  return this.bd.collection(collection).snapshotChanges();
}
traerToken(){
  try {
    const token = localStorage.getItem('token');
    const data = jwt_decode(token);
  
    return data;
  }
  catch (error) {
  }
}


traerMail() {
  const data = this.traerToken();
  return data.email;
}
public actualizar(collection: string, id: string, data: any) {
  return this.bd.collection(collection).doc(id).set(data)

}

public crear(collection: string, data: any) {
  return this.bd.collection(collection).add(data);
}
guardarTurno(obj: any) {
  try {
    this.crear("turnos/", obj);
  }
  catch (e) {
    console.log(e);
  }
}

 
}
